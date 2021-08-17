import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  public propertyId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.propertyId = 0;
  }

  ngOnInit(): void {
    // Captures the parameter(in this case the Id value) from the url and parsing it to number.
    this.propertyId = Number(this.route.snapshot.params['id']);

    // Another option to parse String into Number is using the PLUS sign before the statement
    // this.propertyId = +this.route.snapshot.params['id'];

    // This observable achieves pagination in our view
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }

  onClickNext(){
    this.propertyId += 1;

    this.router.navigate(['property-details', this.propertyId]);
  }

}
