import { Component, OnInit } from '@angular/core';
import { Addcar } from '../additem/additem';
import { Listitems } from '../listitems/listitems';


@Component({
  selector: 'app-home',
  imports: [Addcar, Listitems],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  ngOnInit(): void {
  }
}
