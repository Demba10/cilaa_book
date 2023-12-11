import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  users!: any;

  constructor(
    private bailleur: RegisterService
  ) { }

  ngOnInit(): void {
    this.bailleur.getBailleurs().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
        }
    )
    
  }



}
