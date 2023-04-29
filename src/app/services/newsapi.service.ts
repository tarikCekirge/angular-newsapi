import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  //Headline Url
  headlineNews = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=relevancy&apiKey=a2433051b827418f956a7aae03538bfb';

  //technology 
  technologyNews = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a2433051b827418f956a7aae03538bfb';

  //sports 
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=a2433051b827418f956a7aae03538bfb';

  //science 
  scienceNews = 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=a2433051b827418f956a7aae03538bfb';

  //health 
  healthNews = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=a2433051b827418f956a7aae03538bfb';

  //general 
  generalNews = 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=a2433051b827418f956a7aae03538bfb';

  //entertainment 
  entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=a2433051b827418f956a7aae03538bfb';

  //business 
  businessNews = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a2433051b827418f956a7aae03538bfb';


  getTechnologyNews(): Observable<any> {
    return this._http.get(this.technologyNews)
  }
  getSportsNews(): Observable<any> {
    return this._http.get(this.sportsNews)
  }
  getScienceNews(): Observable<any> {
    return this._http.get(this.scienceNews)
  }
  getHealthNews(): Observable<any> {
    return this._http.get(this.healthNews)
  }
  getGeneralNews(): Observable<any> {
    return this._http.get(this.generalNews)
  }
  getEntertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentNews)
  }
  getBusinesstNews(): Observable<any> {
    return this._http.get(this.businessNews)
  }
  headlines(): Observable<any> {
    return this._http.get(this.headlineNews)
  }

}

