import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  // les attributs
  projets!: any[];
  categories!: any[];

  constructor(
    private router: Router,
    private projet: ProjetService
  ) {}

  public show: boolean = true;

  ngOnInit(): void {
    this.projet.getProjet().subscribe(
      response => {
        this.projets = response.projets.data;
        console.log(this.projets);
        this.categories = response.categories;
      }
    )
  }

  showDetail():void {
    this.router.navigate(['/details'])
  }
}
