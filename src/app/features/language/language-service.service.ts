import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class LanguageService {

	constructor(private http: HttpClient) { }
}
