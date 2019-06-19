import { Injectable } from '@angular/core';
// import { GitSearch } from './git-search';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private http: HttpClient) { }




  sampleObservable = () => {
    return this.http.get('https://api.github.com/search/repositories?q=');
  }

  samplePromise = () => {
    return this.http.get('https://api.github.com/search/repositories?q=')
    .toPromise();
  }

  usingObservable = () => {
    let apiCall = this.sampleObservable();
    apiCall.subscribe( (result) => {
      console.log(result);
    }, (error) => {
      console.log(error);

  });
  apiCall.subscribe();
  }

  usingPromise = () => {
    this.samplePromise().then ( (result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    })
  }

}
