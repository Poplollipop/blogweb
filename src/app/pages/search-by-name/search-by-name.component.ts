import { Component } from '@angular/core';
import { PostService } from '../../@service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-search-by-name',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './search-by-name.component.html',
  styleUrl: './search-by-name.component.scss'
})
export class SearchByNameComponent {

  result: any[] = [];
  name: any = "";
  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
  ) { }


  searchByName() {
    this.postService.searchByName(this.name).subscribe(res => {
      this.result = res;
      console.log(this.result);
    }, error => {
      this.snackBar.open("系統出了錯誤，請稍後嘗試", "確認")
    })
  }

}
