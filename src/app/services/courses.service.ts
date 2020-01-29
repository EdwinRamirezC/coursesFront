import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {API_ENDPOINT} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private httpClient: HttpClient) { }

  getCourses() {
    const url = API_ENDPOINT + '?limit=9&page=1';
    return this.httpClient.get(url);
  }
  getNextCourses(nextUrl){
    return this.httpClient.get(nextUrl);
  }
}
