import { Component, OnInit } from '@angular/core';
import { PostServiceComponent } from '../post-service/post-service.component';
import { Router } from "@angular/router";
import { BlogPost } from "../BlogPost";



@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})

export class PostsTableComponent implements OnInit {
  blogPosts: Array<BlogPost> =[];
  constructor(private postData: PostServiceComponent, private router:Router) { }

  ngOnInit(){
    this.postData.getAllPosts().subscribe(data => this.blogPosts = data);
  }
  rowClicked(e, id){
    this.router.navigate(['admin/blog', id]);
  }
}
