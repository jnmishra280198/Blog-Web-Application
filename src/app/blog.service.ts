import { Injectable } from '@angular/core';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class BlogService {



  public allBlogs = [

    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854z",
      "created": "2017-10-20T12:20:47.854z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47.6782",
      "created": "2017-10-21T21:47:51.678z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1> This is big text</h1> <p>Small text </p>",
      "description": "this is  description of the example blog ",
      "title": "This is an example blog "
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.4072",
      "created": "2017-11-14T14:15:54.4072",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1> This is big text</h1> <p>Small text </p>",
      "description": "this is  third blog description  ",
      "title": "This is third blog "
    }
  

]  
public currentBlog; 

 
constructor() {
  console.log("service constructor is called");
 }
public  getAllBlogs():any{
  return this.allBlogs;
}


public getSingleBlogInformation(currentBlogId): any {
  for (let blog of this.allBlogs) {
    if (blog.blogId == currentBlogId) {
      this.currentBlog = blog;
    }
  }
  console.log(this.currentBlog);
  return this.currentBlog;
}

  
}
