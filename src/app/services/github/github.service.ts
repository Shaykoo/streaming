import { Injectable } from '@angular/core';
import { DataService } from '../data.services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {

  constructor(http: HttpClient) {
    super("https://api.github.com/users/mosh-hamedani/followers",http); // instance of the constructor of the base class
   }
}
