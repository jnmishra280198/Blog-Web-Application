import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location],
})
export class BlogViewComponent implements OnInit,OnDestroy {


  public currentBlog;
  
  constructor(private _route: ActivatedRoute, private router: Router,public blogService:BlogService,public blogHttpService :BlogHttpService, private location : Location) {
    console.log("Blog View  component Constructor is called");
   }

  ngOnInit() {
    console.log("Blog view component OnInit is called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
    
      data=>
      {
        console.log(data);
        this.currentBlog=data["data"];
       
      },
      error =>
      {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }



  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>
      {
        console.log(data);
        alert("Blog deleted succesfully");
        setTimeout(()=>{
          this.router.navigate(['/home']);
          
        },1000)
      },
      error =>
      {
        console.log("some error occured");
        
        console.log(error.errorMessage);
      }
    )
  }
  public goBackToPreviousPage(): any
  {
    this.location.back();
  }

  ngOnDestroy()
  {
    console.log("Blog View component  is Destroyed");
  }
  

}
