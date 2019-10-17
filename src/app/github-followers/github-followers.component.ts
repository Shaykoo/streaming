import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github/github.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any = [];

  constructor(private service: GithubService) { }

  ngOnInit(){                  // used to initilize the component- When this componnts runs it runs ngOnIt first
    this.service.getAll()
      .subscribe(
       followers => this.followers = followers) // we connectd the map operator to give an array of the response object result
    };
     
}
