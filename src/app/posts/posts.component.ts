import { Component, OnInit } from '@angular/core';
import { PostsService } from "../services/posts.service";
import {MatDialog, MatDialogRef} from '@angular/material';
import { JobPostComponent } from '../job-post/job-post.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts;
  dialogReturn: MatDialogRef<JobPostComponent>

  constructor(private postsService: PostsService,
    public form: MatDialog,
    ) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => {this.posts = res.post, console.log(res.post)})
  }

  openForm(){
    this.dialogReturn = this.form.open(JobPostComponent);

    this.dialogReturn.afterClosed().subscribe(res => { console.log(res)})
  }
  

}