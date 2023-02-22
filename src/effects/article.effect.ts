import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap ,of } from "rxjs";
import { ArticleRW } from "src/models/articlerw.model";
import { ArticleService } from "src/services/article.service";
import * as ArticleActions from '../actions/article.action'


@Injectable()
export class ArticleEffect{
    constructor(private action$: Actions, private articleService: ArticleService){}

    getArticle$ = createEffect(
        () => this.action$.pipe(
            ofType(ArticleActions.getPerginate),
            switchMap((action) =>{
                return this.articleService.getArticle(action.page, action.itemPerPage)
            }),
            map((response) =>{
                return ArticleActions.getPerginateSuccess({article: <Array<ArticleRW>>response})
            }),
            catchError((error)=>{
                return of(ArticleActions.getPerginateFailure({error: error.message}));
            }),
            
        )
        
    )
}