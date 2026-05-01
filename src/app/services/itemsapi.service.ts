import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsapiService {

  private _http = inject(HttpClient);

  cars = signal<Cars[]>([]);

  private _apiUrl = 'http://localhost:3000/api/cars'; 

  getCars(){
    this._http.get<Cars[]>(this._apiUrl).subscribe((data) => {
      this.cars.set(data);
    });
  }

  addItem(myMake: string, myModel: string, myYear: string, myImage: string) {
    const url = this._apiUrl;
    const car = {
      make: myMake,
      model: myModel,
      year: myYear,
      image: myImage
    };

    this._http.post<Cars[]>(url, car).subscribe(() => {
      this.getCars();
    });
  }

  deleteItem(myId: string) {
    const url = this._apiUrl + '/' + myId;

    this._http.delete(url).subscribe(() => {
      this.getCars();
    });
  }

  
}
