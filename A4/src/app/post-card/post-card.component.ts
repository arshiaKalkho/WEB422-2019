import {Input, Component, OnInit } from '@angular/core';
import {BlogPost} from "../BlogPosts";




@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})



export class PostCardComponent implements OnInit {
  @Input() post : BlogPost ;
  constructor() { }

  ngOnInit(): void {
  }

}
