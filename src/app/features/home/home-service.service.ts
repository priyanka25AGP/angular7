import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class HomeService {

	constructor(private http: HttpClient) { }

}
