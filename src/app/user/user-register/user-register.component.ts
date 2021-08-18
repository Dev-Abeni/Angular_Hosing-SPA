import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(formGroup: AbstractControl) : Validators {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null :
    {notMatched: true};
  }

  onSubmit(){
    console.log(this.registrationForm)
  }

}
