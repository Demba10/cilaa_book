import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { ProjetService } from 'src/app/services/projet/projet.service';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  users!: any;
  userAth!: any;
  user!: any;
  projets!: any[];

  constructor(
    private bailleur: RegisterService,
    private log: LoginService,
    private projet: ProjetService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userOnline');
    console.log(this.user); 
  
    this.projet.getProjet().subscribe(
      response => {
        this.projets = response;
        console.log(this.projets);
        
      }
    ) 
  }
}
