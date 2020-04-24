import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  //Get the health data
  GetHealthData():Observable<any>{

    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=a4ffdbfb8f874b5cbf208191ed28cbec');
  }
  //Get the sports data
  GetSportsData():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=sports&apiKey=a4ffdbfb8f874b5cbf208191ed28cbec');
  }

  //Get the entertainment data
  GetEntertainData():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=entertainment&apiKey=a4ffdbfb8f874b5cbf208191ed28cbec');
  }

  //Get the business data
  GetBusData():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=business&apiKey=a4ffdbfb8f874b5cbf208191ed28cbec');
  }

  //For searching the array of any of the API's
  GetSearchData(title:string):Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/everything?q=' + title + '&from=2020-04-23&sortBy=popularity&apiKey=c589e6746d0645268ee2b8ab2b496397');
  }

}
