import { ArticleRW } from "../models/articlerw.model";

export interface ArticleState{
    article: [],  
    isSuccess: boolean,
    error: string,
    loading: boolean,
}