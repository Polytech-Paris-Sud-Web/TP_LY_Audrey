import { Injectable } from '@angular/core';
import { Article } from './models/article.models';
import { RawArticle } from './models/rawArticle.models';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  //avec une base de donnée
  public getArticles() : Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public getArticle(id:Number): Observable<Article>{
    return this.http.get<Article>("http://localhost:3000/articles/"+id);
  }

  public deleteArticle(article : Article):Observable<Article[]> {
    return this.http.delete<Article[]>("http://localhost:3000/articles/"+article.id);
  }

  public postArticle(article: RawArticle):Observable<Article>{
    return this.http.post<Article>("http://localhost:3000/articles", article);
  }


  // en dur
  /*public getArticles() : Article[] {
    return [
    {
      title: 'My First Article',
      content: 'Hello World',
      authors: 'Orangefire'
    }, {
      title: 'Angular component',
      content: 'Angular component looks awesome!',
      authors: 'Orangefire'
    }, {
      title: 'Angular service',
      content: 'I read something about angular service, i will try it soon',
      authors: 'Orangefire'
    }
    ];
  }*/
}
