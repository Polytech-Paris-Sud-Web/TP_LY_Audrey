import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.models';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

	@Input()
	article?: Article;

	@Output()
	deletedArticle :EventEmitter<Article> = new EventEmitter();

  constructor(private http:HttpClient,public route:ActivatedRoute, private articleService:ArticleService, private router:Router) {
    this.route.params.subscribe( (params) => {
      if (params['id']){
        this.articleService.getArticle(params['id']).subscribe((data)=>{
          console.log(data);
          if (data){
            this.article = data
          }
        });
      }
    });
  }


  ngOnInit(): void {
  }

  onClickDelete(){
    this.route.params.subscribe( (params) => {
      if (params['id']){
        if (this.article){
          this.articleService.deleteArticle(this.article).subscribe(()=> {
            this.router.navigate(['../']);
          });
        }
      } else {
        if(this.article){
          this.deleteA();
        }
      }
    });
  }

  deleteA(){
  	this.deletedArticle.emit(this.article);
  }

}
