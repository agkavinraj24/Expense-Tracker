import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private formBuilder:FormBuilder ,private router:Router) { }

  ngOnInit(): void {
  }

  profileForm=this.formBuilder.group({
    email:[''],
    password:['']
  })

  expense(){
    this.router.navigate(['expense']);
  }
}
