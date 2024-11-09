import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {

  postForm!: FormGroup
  tags: string[] = []

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: [null, Validators.required],
      content: [null, [Validators.required, Validators.maxLength(5000)]],
      img: [null, Validators.required],
      postedBy: [null, Validators.required]
    })
  }

  add(event: any) {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tag: any) {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  
}
