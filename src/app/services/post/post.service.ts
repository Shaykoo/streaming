import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.services';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  // private url = "https://jsonplaceholder.typicode.com/comments";

  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/comments",http); // instance of the constructor of the base class
   }

}
