import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost'
import { Observable } from 'rxjs';


const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page,tag,category): Observable<BlogPost[]>{
    let url = `http://localhost:4200/api/posts?page=${page}&perPage=${perPage}`
    if(tag) url += `&tag=${tag}`;
    if(category) url += `&category=${category}`
    
    return this.http.get<BlogPost[]>(url);
  }

  getPostById(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`http://localhost:4200/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>('http://localhost:4200/api/categories/');
  } 

  getTags(): Observable<string[]>{
    return this.http.get<string[]>('http://localhost:4200/api/tags/');
  } 
}
