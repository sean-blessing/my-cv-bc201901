import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.class';

@Component({
  selector: 'app-work-exp-comp',
  templateUrl: './work-exp-comp.component.html',
  styleUrls: ['./work-exp-comp.component.css']
})
export class WorkExpCompComponent implements OnInit {
  gig: string = "Reggae Musician";
  display: boolean = true;
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    // create 5 products
    // put them into products array
  }

}
