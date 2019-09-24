import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Article } from './article.model';

export class ArticleService {

  articleList: AngularFireList<any>;
  // selectedEmployee: Article = new Article();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.articleList = this.firebase.list('articles');
    return this.articleList;
  }

  insertArticle(article: Article) {
    this.articleList.push({
      title: article.title,
      link: article.link,
      user: article.user,
      date: article.date
    });
  }

  // updateArticle(article: Article) {
  //   this.articleList.update(article.$key,
  //     {
  //       title: article.title,
  //       link: article.link,
  //       user: article.user,
  //       date: Date.now()
  //     });
  // }

  // deleteArticle($key: string) {
  //   this.articleList.remove($key);
  // }

}
