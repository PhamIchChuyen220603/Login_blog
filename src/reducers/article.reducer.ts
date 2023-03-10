import { createReducer, on } from "@ngrx/store"
import { ArticleState } from "../states/article.state"
import * as ArticleActions from "../actions/article.action"
import { state } from "@angular/animations"
import { act } from "@ngrx/effects"
import { Action } from "rxjs/internal/scheduler/Action"

const initialState: ArticleState = {
    article: [],
    isSuccess: true,
    loading: false,
    error: ''
}

export const ArticleReducer = createReducer(
    initialState,
    on(ArticleActions.getPerginate, (state) => ({ ...state, loading: true, article: [], error: '' })),
    on(ArticleActions.getPerginateSuccess, (state, action) => ({ ...state, articles: action.article, loading: false, isSuccess: true, error: '' })),
    on(ArticleActions.getPerginateFailure, (state, action) => ({ ...state, loading: false, isSuccess: false, error: action.error, article: [] }))
)
