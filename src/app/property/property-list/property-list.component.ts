import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() {
  }

  properties: Array<any> = [];

  ngOnInit(): void {
    this.properties = [
      {
        "Id": 1,
        "Name": "Condo",
        "Type": "House",
        "Price": 12000.00,
        "Status" : "For Sell",
        "ImageUrl" : "assets/images/Condo1.jpg"
      },

      {
        "Id": 2,
        "Name": "Apartment",
        "Type": "House",
        "Price": 34000.00,
        "Status" : "For Sell",
        "ImageUrl" : "assets/images/Apartment1.jpg"

      },

      {
        "Id": 3,
        "Name": "Condo",
        "Type": "House",
        "Price": 2500.00,
        "Status" : "For Rent",
        "ImageUrl" : "assets/images/Condo2.jpg"

      },

      {
        "Id": 4,
        "Name": "G+2",
        "Type": "House",
        "Price": 10000.00,
        "Status" : "For Rent",
        "ImageUrl" : "assets/images/G+2.jpg"

      },

      {
        "Id": 5,
        "Name": "Apartment",
        "Type": "House",
        "Price": 23000.00,
        "Status" : "For Sell",
        "ImageUrl" : "assets/images/Apartment2.jpg"

      },

      {
        "Id": 6,
        "Name": "Studio",
        "Type": "House",
        "Price": 12000.00,
        "Status" : "For Sell",
        "ImageUrl" : "assets/images/Studio1.jpg"

      }
    ]
  }

}
