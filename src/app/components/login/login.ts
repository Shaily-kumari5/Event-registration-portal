import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({

selector:'app-login',

standalone:true,

imports:[CommonModule,ReactiveFormsModule],

templateUrl:'./login.html',

styleUrl:'./login.css'

})

export class Login{

loginForm;

constructor(private fb:FormBuilder,private router:Router){

this.loginForm=this.fb.group({

username:['',[Validators.required]],

password:['',[Validators.required]]

})

}

login(){

if(this.loginForm.valid){

this.router.navigate(['/dashboard']);

}

}

}