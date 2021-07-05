import { Component, OnInit } from '@angular/core';
import { PostServiceComponent } from "../post-service/post-service.component";
import { Router, ActivatedRoute } from "@angular/router";
import { BlogPost } from "../BlogPost";




@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  tag:string;
  blogPost: BlogPost;
  id:Number; 
  constructor(private router:Router,private activeRoute:ActivatedRoute,private postService:PostServiceComponent) { }

  ngOnInit(): void {
    //this.id = this.activeRoute.snapshot['id'];\\// replace if neccecery with this.id
    this.postService.getPostById(this.activeRoute.snapshot['id']).subscribe(data => this.blogPost = data);
    this.tag = this.blogPost.tags.toString(); 
  }

}
