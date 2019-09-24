import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { ArticleService } from './new-article.service'

@Component({
    selector: 'app-new-article',
    templateUrl: 'new-article.component.html',
    styleUrls: ['new-article.component.scss']
})
export class NewArticleComponent {
    article = {
        $key: "",
        title: "",
        link: "",
        user: "",
        date: ""
    }
    validation_messages = {
        'title': [
            { type: 'required', message: 'Title is required.' }
        ],
        'link': [
            { type: 'required', message: 'Link is required.' }
        ]
    };

    constructor(
        private articleService: ArticleService
    ) { }

    onSubmit() {
        // add article
        console.log('Inserting');
        // this.articleService.insertArticle(this.article);

    }

}
