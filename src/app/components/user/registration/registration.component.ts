import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,15}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  })

  passwordConvalidata = false;

  onSubmit(){
    console.log(this.form.value)
  }

  controlloPassword(e){
    if(e === this.form.controls.password.value){
      this.passwordConvalidata = true;
    } else {
      this.passwordConvalidata = false;
    }
  }
convalidaForm(): boolean{
  if(this.form.valid && this.passwordConvalidata){
    return false
  } else {
    return true
  }
}
}
