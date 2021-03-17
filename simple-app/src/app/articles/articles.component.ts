import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.models';
import { RawArticle } from '../models/rawArticle.models';
import { ArticleService } from '../article.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
	
	articles?: Article[];
  constructor(private articleService:ArticleService) { 
  }

  ngOnInit(): void {
    this.getArticles(); 
  }

  deleteA(article : Article){
    this.articleService.deleteArticle(article).subscribe(()=> {
      this.getArticles();
    });
  }

  getArticles() {
    this.articleService.getArticles().subscribe((data)=>{
      this.articles = data;
    });
  }
}



