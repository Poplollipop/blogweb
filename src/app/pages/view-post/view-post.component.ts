import { Component } from '@angular/core';
import { PostService } from '../../@service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentService } from '../../@service/comment.service';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {


  postId: any;
  postData: any;
  comments: any;


  commentForm!: FormGroup


  constructor(
    private postserviece: PostService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private commentService: CommentService,
  ) { }


  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['id']
    this.getPostById();

    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content: [null, Validators.required],
    })
  }


  sendComment() {
    const postedBy = this.commentForm.get('postedBy')?.value
    const content = this.commentForm.get('content')?.value

    this.commentService.createComment(this.postId, postedBy, content).subscribe(res => {
      this.snackBar.open("已成功發表評論！", "確認")
      this.getCommentsByPost();
    }, error => {
      this.snackBar.open("目前系統有誤，請稍後嘗試", "確認")
    })
  }


  getCommentsByPost(){
    this.commentService.getAllCommentsByPost(this.postId).subscribe(res=>{
      this.comments =res;
    },error=>{
      this.snackBar.open("目前系統有誤，請稍後嘗試", "確認")
    })
  }


  getPostById() {
    this.postserviece.getPostById(this.postId).subscribe(res => {
      this.postData = res;
      this.getCommentsByPost();
    }, error => {
      this.snackBar.open("出現錯誤，請稍後再試", "確認")
    })
  }


  likePost() {
    this.postserviece.likePost(this.postId).subscribe((response) => {
      this.snackBar.open("已點選喜歡這篇文", "確認");
      this.getPostById();
    }, (error) => {
      this.snackBar.open("發生了錯誤，請稍後再嘗試", "確認")
    })
  }

}
