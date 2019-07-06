import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse } from '@angular/common/http';

//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator.do';
import { Observable } from 'rxjs';

@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  constructor(private _http:HttpClient) { 
    console.log("blog-http service was called");
  }
  private handleError(err: HttpErrorResponse)
  {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  public getAllBlogs(): any{
    let myResponse=this._http.get(this.baseUrl+'/all?authToken=MDlmODQxMzdhMDc0MWNlZTcxOTMwNDViNDg1NzM4NjU0MDE0ZjNhZGI1ZjIxNjQzMGQ3ZmI4MTAyNGI0M2ViNWNlZDVmZjhhM2QzZWE1ZDg2MDhjYTMzYmFjYTcyYjFlOTIyNGViZGJlYWU1OThkZDVlNTc5N2QzNTFjYzEyYjYwMQ==');
    console.log(myResponse);
    return myResponse;

  }
  public getSingleBlogInformation(currentBlogId):any{
     let myResponse=this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=MDlmODQxMzdhMDc0MWNlZTcxOTMwNDViNDg1NzM4NjU0MDE0ZjNhZGI1ZjIxNjQzMGQ3ZmI4MTAyNGI0M2ViNWNlZDVmZjhhM2QzZWE1ZDg2MDhjYTMzYmFjYTcyYjFlOTIyNGViZGJlYWU1OThkZDVlNTc5N2QzNTFjYzEyYjYwMQ==');
    return myResponse;
    }
  public createBlog(blogData):any
  {
    let myResponse=this._http.post(this.baseUrl +  '/create' + '?authToken=MDlmODQxMzdhMDc0MWNlZTcxOTMwNDViNDg1NzM4NjU0MDE0ZjNhZGI1ZjIxNjQzMGQ3ZmI4MTAyNGI0M2ViNWNlZDVmZjhhM2QzZWE1ZDg2MDhjYTMzYmFjYTcyYjFlOTIyNGViZGJlYWU1OThkZDVlNTc5N2QzNTFjYzEyYjYwMQ==', blogData);
    return myResponse;
  }
  public deleteBlog(blogId):any{
    let data={};
    let myResponse=this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=MDlmODQxMzdhMDc0MWNlZTcxOTMwNDViNDg1NzM4NjU0MDE0ZjNhZGI1ZjIxNjQzMGQ3ZmI4MTAyNGI0M2ViNWNlZDVmZjhhM2QzZWE1ZDg2MDhjYTMzYmFjYTcyYjFlOTIyNGViZGJlYWU1OThkZDVlNTc5N2QzNTFjYzEyYjYwMQ==', data); 
    return myResponse;
  } 
  public editBlog(blogId ,blogData):any
  {
    let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=MDlmODQxMzdhMDc0MWNlZTcxOTMwNDViNDg1NzM4NjU0MDE0ZjNhZGI1ZjIxNjQzMGQ3ZmI4MTAyNGI0M2ViNWNlZDVmZjhhM2QzZWE1ZDg2MDhjYTMzYmFjYTcyYjFlOTIyNGViZGJlYWU1OThkZDVlNTc5N2QzNTFjYzEyYjYwMQ==', blogData);
    return myResponse; 
  }

}
