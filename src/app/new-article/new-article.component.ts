import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "";

  validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ],
    'link': [
      { type: 'required', message: 'Link is required.' }
    ]
  };

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.fb.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
    });
  }

  resetFields() {
    this.exampleForm = this.fb.group({
      title: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required)
    });
  }

  onSubmit(value) {
    // add article
  }

}
