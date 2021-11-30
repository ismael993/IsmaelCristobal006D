import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataHead } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<GetDataHead>
    ('https://goweather.herokuapp.com/weather/Chile');
  }
}
