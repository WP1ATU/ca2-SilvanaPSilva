import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../models/interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsapiService {

  private _http = inject(HttpClient);

  cars = signal<Cars[]>([]);

  private _apiUrl = environment.apiUrl;

  getCars() {
    this._http.get<Cars[]>(`${this._apiUrl}/cars`).subscribe((data) => {
      this.cars.set(data);
    });
  }

  addCar(myMake: string, myModel: string, myYear: string, myImage: string) {
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

  deleteCar(myId: string) {
    const url = this._apiUrl + '/' + myId;

    this._http.delete(url).subscribe(() => {
      this.getCars();
    });
  }


}
