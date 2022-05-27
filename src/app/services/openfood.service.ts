import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenFoodService {
  constructor(private http: HttpClient) {}

  getApiData() {
    return this.http.get('https://world.openfoodfacts.org?json=true');
  }
}
