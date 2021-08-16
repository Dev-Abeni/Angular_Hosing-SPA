import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Condo",
      "Type": "House",
      "Price": 12000.00,
    },

    {
      "Id": 2,
      "Name": "Apartment",
      "Type": "House",
      "Price": 34000.00,
    },

    {
      "Id": 3,
      "Name": "Condo",
      "Type": "House",
      "Price": 12500.00,
    },

    {
      "Id": 4,
      "Name": "G+2",
      "Type": "House",
      "Price": 100000.00,
    },

    {
      "Id": 5,
      "Name": "Apartment",
      "Type": "House",
      "Price": 23000.00,
    },

    {
      "Id": 6,
      "Name": "Studio",
      "Type": "House",
      "Price": 12000.00,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
