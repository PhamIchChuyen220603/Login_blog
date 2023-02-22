import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = " https://social.runwayclub.dev/api/articles"
  constructor(private httpClient:HttpClient) { }
  getArticle(page:number, itemPerPage: number){
    
    return this.httpClient.get(`${this.url}/latest?page=${page}&per_page=${itemPerPage}`)
  }
}
