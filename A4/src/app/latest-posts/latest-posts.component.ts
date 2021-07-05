import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPosts';
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  @Input() post : Array<BlogPost>;
  constructor() { }
  
  ngOnInit(): void {
  }

}
