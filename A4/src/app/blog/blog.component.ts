import { Component, OnInit } from '@angular/core';
import blogData from '../blogData.json';
import { BlogPost } from '../BlogPosts';





@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  BlogPosts: Array<BlogPost> = blogData;
  
  constructor() { }


  ngOnInit(): void {
  }

}
