import { Component } from '@angular/core';
import { PostService } from '../../@service/post.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-view-post',
  standalone: true,
  imports: [CommonModule,MatCardModule,],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent {


  postId: any;
  postData: any;

  constructor(
    private postserviece: PostService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }


  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['id']
    console.log(this.postId);
  }


  getPostById(){
    this.postserviece.getPostById(this.postId).subscribe(res=>{
      this.postData = res;
      console.log(res);
    },error=>{
      this.snackBar.open("出現錯誤，請稍後再試", "確認")
    })
  }


}
