import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from  'rxjs';
import {Category} from './category'
import {Clue} from './clue'
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CategoryService {

   configUrl =  "https://cors-anywhere.herokuapp.com/http://jservice.io/api/"
  constructor(private http: HttpClient) { }

  getCategories(offset, count) {
    let headers: HttpHeaders = new HttpHeaders();]
    headers = headers.append('Access-Control-Request-Headers', 'x-requested-with');
  return this.http.get(this.configUrl+"categories?offset="+offset+"&count="+count);
  }

  getClues(url) : Observable<Clue[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Access-Control-Request-Headers', 'x-requested-with');
  return this.http.get<Clue[]>(this.configUrl + url);
  }

}
