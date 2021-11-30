import { Injectable } from '@angular/core';

export interface User{
  id: number; 
  nombre:string;
  email:string;
  password:string; 
  modified: number;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor() { }
}
