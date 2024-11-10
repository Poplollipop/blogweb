import { Component } from '@angular/core';
import { PostService } from '../../@service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent {
  constructor(private postService: PostService, private snackBar: MatSnackBar) { }

  allPosts: any;


  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllPost().subscribe(res => {
      console.log(res);
      this.allPosts = res;
    }, error => {
      this.snackBar.open("搜尋錯誤，請稍後再試", "確認")
    })
  }

}
