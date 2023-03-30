import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import { ActionCreator, Store } from "@ngrx/store";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs";
import { Action } from "rxjs/internal/scheduler/Action";
import { hydrate, hydrateFailure, hydrateSuccess } from "../actions/hydration.actions";
import { AppState } from "../state/app.state";

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(hydrate),
      map(() => {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return hydrateSuccess({ state });
          } catch {
            localStorage.removeItem("state");
          }
        }
        return hydrateFailure();
      })
    )
  );
  serialize$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(hydrateSuccess, hydrateFailure),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) => localStorage.setItem("state", JSON.stringify(state)))
      ),
    { dispatch: false });


  constructor(private action$: Actions, private store: Store<AppState>) {}

  ngrxOnInitEffects() {
    return hydrate();
  }
}


