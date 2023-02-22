import { createAction, props } from "@ngrx/store";
import { ArticleRW } from "src/models/articlerw.model";


export const getPerginate = createAction('[Article] Get Perginate', props<{page: number, itemPerPage: number}>())
export const getPerginateSuccess = createAction('[Article] Get Perginate Success', props<{article: ArticleRW[]}>())
export const getPerginateFailure = createAction('[Article] Get Perginate Failure', props<{error: string}>())