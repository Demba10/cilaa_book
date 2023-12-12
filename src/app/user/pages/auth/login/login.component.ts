import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users!: any[];
  userAuth$: any;
  email!: string;
  psw!: string;

  constructor(
    private router: Router,
    private log: LoginService
  ) { }

  ngOnInit(): void {
    this.log.getBailleurs().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
      }
    )
  }

  registered() {
    this.router.navigate(['/register']);
  }
  connexion() {
    const us = {
      email: this.email,
      password: this.psw
    }
    this.log.posLogin(us).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('userOnline', JSON.stringify(response));
        Swal.fire({
          title: 'success',
          text: 'Connexion reussie',
          icon: 'success'
        })
        this.router.navigate(['accueil']);
      }
    )
  }
}