import { Component, OnInit } from '@angular/core'; // OnInit is an interface that allows us to perform actions when the component is initialized
import {CommonModule} from '@angular/common';
import { ItemsapiService } from '../../services/itemsapi.service';

@Component({
  selector: 'app-listitems',
  imports: [CommonModule],
  templateUrl: './listitems.html',
  styleUrl: './listitems.css',
})

export class Listitems implements OnInit {
  // implement OnInit to call the getCars() method when the component is initialized and display the list of cars in the template
    
  ngOnInit(): void {
    this.api.getCars();
  }

  constructor(public api: ItemsapiService) {}
  // inject the ItemsapiService into the component's constructor

}
