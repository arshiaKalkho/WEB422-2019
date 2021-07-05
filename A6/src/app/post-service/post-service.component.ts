import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../BlogPost';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})




export class PostServiceComponent implements OnInit {
  MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getAllPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`/api/posts?page=1&perPage=${this.MAX_SAFE_INTEGER}`);/////////////////////////////////fix
    //////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\
  }//////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\
  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`/api/posts`, data);
  }//////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\
  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`/api/posts/${id}`, data);
  }
  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`/api/posts/${id}`);
  }
  getPostById(id){
    return this.http.get<any>(`/api/posts/${id}`);
  }


}
