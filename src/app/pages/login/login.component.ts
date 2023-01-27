import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  mensaje!:string;

  formLogin!: FormGroup; 

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      usuario: ['',
      [ Validators.required,
        Validators.minLength(6)]],

      password: ['',
      [ Validators.required,
        Validators.minLength(6),
      ]]
    })
  }
  login(){
    console.log(this.formLogin.value)
    this.mensaje = 'Enviado con exito'
  }
}
