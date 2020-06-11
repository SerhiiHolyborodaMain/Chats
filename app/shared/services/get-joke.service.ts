import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ijoke } from '../interfaces/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class GetJokeService {
private  url:string = 'https://api.chucknorris.io/jokes/random'
  constructor(private http:HttpClient) { }
 
  public getJokes():Observable<Array<Ijoke>>  {
    return  this.http.get<Array<Ijoke>>(this.url) 
}

 
}
