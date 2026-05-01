import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsapiService } from '../../services/itemsapi.service';

@Component({
  selector: 'app-additem',
  imports: [FormsModule],
  templateUrl: './additem.html',
  styleUrl: './additem.css',
})
export class Addcar {
  make = '';
  model = '';
  year = '';
  image = '';

  constructor(private itemsApi: ItemsapiService) {}

  addCar() {
    this.itemsApi.addCar(this.make, this.model, this.year, this.image);
    this.make = '';
    this.model = '';
    this.year = '';
    this.image = '';
  }
}
