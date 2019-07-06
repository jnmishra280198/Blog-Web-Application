import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
selector: 'app-blog-edit',
templateUrl: './blog-edit.component.html',
styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
public currentBlog;
public possibleCategories=["Comedy","Drama","Action","Technology"];

constructor(private _route:ActivatedRoute,private router:Router,public blogService:BlogService,public blogHttpservice:BlogHttpService) { }

ngOnInit() {


let myBlogId = this._route.snapshot.paramMap.get('blogId');
console.log(myBlogId)
//this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
//console.log(this.currentBlog);
// calling the function to get the current blog id
this.blogHttpservice.getSingleBlogInformation(myBlogId).subscribe(
data=> {
console.log("logging data");
console.log(data);
this.currentBlog=data["data"];
console.log(this.currentBlog.blogId);

},
error=>{
console.log("some error occured");
}
);

}
public editThisBlog():any{
this.blogHttpservice.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
data=>{
console.log("blog edited");
console.log(data);
alert("blog posted successfully");
//this.toastr.success('!blog posted successfully', 'Success!');
setTimeout(()=>{
this.router.navigate(['/blog',this.currentBlog.blogId]);

},1000)
},
error=>{
console.log("some error occured");
console.log(error.errorMessage);
alert("some error occured");
//this.toastr.error('blog is not posted successfully!', 'Oops!');

}
);

}

}