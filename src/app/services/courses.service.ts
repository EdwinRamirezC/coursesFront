import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {API_ENDPOINT} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private httpClient: HttpClient) { }

  getCourses() {
    const url = API_ENDPOINT + '?limit=5&page=1';
    return this.httpClient.get(url);
  }
}
