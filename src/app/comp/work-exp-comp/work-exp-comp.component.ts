import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.class';

@Component({
  selector: 'app-work-exp-comp',
  templateUrl: './work-exp-comp.component.html',
  styleUrls: ['./work-exp-comp.component.css']
})
export class WorkExpCompComponent implements OnInit {
  gig: string = "Reggae Musician";
  hide: boolean = false;
  hdn: boolean = false;
  products: Product[] = [];

  constructor() { }

  ngOnInit() {
    // fill products array w/ 5 products
    this.products = [new Product(1,"sql","SQL Book",42.99),
                     new Product(2,"java","Java Book",47.99),
                     new Product(3,"spring","Spring Book",34.99),
                     new Product(2,"html","HTML Book",14.99),
                     new Product(2,"ang","Angular Book",45.99)
                    ];
  }

  logIt() {
    console.log("log button pressed.");
  }

}
