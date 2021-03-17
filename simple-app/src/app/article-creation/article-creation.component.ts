import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from "../article.service";
import {RawArticle} from "../models/rawArticle.models";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {

	articleForm : FormGroup;
	/*@Output()
  newArticle : EventEmitter<RawArticle> = new EventEmitter();*/

  constructor(private fb: FormBuilder,
    private articleService: ArticleService, 
    private router:Router) {
    this.articleForm = this.fb.group({
      title: ['Example Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const rawArticle : RawArticle = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }
    //this.newArticle.emit(rawArticle);

    this.articleService.postArticle(rawArticle).subscribe(()=> {
        this.router.navigate(['../']);
    });
  }
}
