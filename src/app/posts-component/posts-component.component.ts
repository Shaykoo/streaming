import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputRequest } from '../common/bad-input-request';

@Component({
  selector: 'posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit{

  posts:any = [];

  constructor(private service: PostService){}

  ngOnInit(){                  // used to initilize the component- When this componnts runs it runs ngOnIt first
    this.service.getAll()
      .subscribe(
       posts => this.posts = posts) // we connectd the map operator to give an array of the response object result
    };
     
  
  createPost(input:HTMLInputElement){
    let post = { context: input.value };
    this.posts.unshift(post.context);
    
    input.value = "";

    this.service.create(post)
    .subscribe(newPost => {
      post['id'] = newPost['id']; // putting id in the post object
      }, 
      (error: AppError) => {
      this.posts.splice(0,1);    // RollBack

      if(error instanceof BadInputRequest)
       console.log("Error:Post not created");
      else throw error;
    });
  }


  updatePost(post){
    this.service.update(post)
    .subscribe( upadtedPost => console.log(upadtedPost))
  }
  

  deletePost(post){
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      this.service.delete(post)
      .subscribe(
        null,                 //empty params as we get nothing after deleting from this fake API
        (error: AppError) => {
         this.posts.splice(index, 0 , post); //RollBack::interesting: 3rd param is for adding ...wow

        if(error instanceof NotFoundError){           // these are for handling the expected errors
          alert("This post has already been deleted");
        }else{                                     // these are for handling the unexpected errors
          throw error;
        }
    });
 }

}
