import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.css']
})
export class PropertyAddComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // Back to a specific component when the user clicks a back link
  // onBack()
  // {
  //   this.router.navigate(['/']);
  // }

  onSubmit(Form: NgForm){
    console.log("Form submitted");
    console.log(this.addPropertyForm)
  }

}
