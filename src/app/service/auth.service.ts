import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:3000/user/authenticate";

  constructor(private http : HttpClient) { }

}
