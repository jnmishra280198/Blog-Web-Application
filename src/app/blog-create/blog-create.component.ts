import { Component, OnInit} from '@angular/core';
import {BlogHttpService} from "../blog-http.service";
import {ActivatedRoute, Router} from "@angular/router"

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _route: ActivatedRoute,private router:Router) {
   
   }
 public blogTitle: string;
 public blogDescription: string;
 public blogBodyHtml: string;
 public blogCategory: string;
 public possibleCategories=["Comedy" ,"Drama" ,"Action" ,"Technology"];
  ngOnInit() {

  }
  public createBlog():any{
    let blogData={
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody:this.blogBodyHtml,
      category:this.blogCategory,
    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data =>
      {
        console.log("Blog Created");
        console.log(data);
        alert("Blog create succesfully");
        setTimeout(()=>
        {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 2000)
      },
      error =>
      {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("Some error occured");
      }
    )
  }

}
