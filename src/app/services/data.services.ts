import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInputRequest } from 'src/app/common/bad-input-request';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) {}

  getAll(){
    return this.http.get(this.url)   //this returns the response observable which is subscribed to the observable itself
    .map(response => response)
    .catch(this.handleError);
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
    .map(response => response)
    .catch(this.handleError);
  }

  update(resource){
      return this.http.patch(this.url + '/'+ resource.id, JSON)
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
    .map(response => response)
    .catch(this.handleError);  //just the reference of the private method here
  }

  private handleError(error: Response){ //we dont want consumer of this service to know abt this method // expected errors
    if(error.status === 400)  // for 400(bad request)  error
    return Observable.throw(new BadInputRequest(error.json()));

    if(error.status === 404) // ythis is only for 404 Error(not found)
      return Observable.throw(new NotFoundError()); // returning error in the form of object
  
    return Observable.throw(new AppError(error));
  }
}
