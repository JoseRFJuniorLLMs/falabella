import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl = 'http://localhost:8080/beers/v1/todos';

  constructor(private http: HttpClient) { }

  getBeer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBeer(beer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, beer);
  }

  updateBeer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBeer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBeersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
