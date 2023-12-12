 import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users!: any;
  userAuth!: any;
  user: any;

  constructor(
    private bailleur: RegisterService,
    private log: LoginService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userOnline') || '');
    console.log(this.user);

    if (this.user != null && this.user != undefined) {
      this.userAuth = true;
    }
    else {
      this.userAuth = false;
    }
  }
}
