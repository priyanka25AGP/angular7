import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

    constructor(private http: HttpClient) {}
    //To get all countries
    getCountryList(): Observable<any> {
        return this.http.get(`https://restcountries.eu/rest/v2/all`, {
        });
    }

    // To get country details
    getCountryDetails(alphaId): Observable<any> {
      return this.http.get(`https://restcountries.eu/rest/v2/alpha`+alphaId, {
      });
    }
}

