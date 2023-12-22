import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { Projet } from 'src/app/models/projet.model';
import { ProjetService } from 'src/app/services/projet/projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-espace-personnel',
  templateUrl: './espace-personnel.component.html',
  styleUrls: ['./espace-personnel.component.css']
})
export class EspacePersonnelComponent implements OnInit {

  // Les attributs

  titre!: any;
  description!: any;
  image!: any;
  categorie_id!: any;
  user_id!: any;
  statut: any = "pas_finance";

  switch: number = 1;
  step: number = 11;

  projets!: any[];
  projetSpecifiques!: any[];
  userOnline!: any;
  categories!: any[];
  categorieSpecifiques!: any;

  constructor(
    private pro: ProjetService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.userOnline = JSON.parse(localStorage.getItem('userOnline') || '');
    this.pro.getProjet().subscribe(
      response => {
        this.projets = response.projets.data;
        this.categories = response.categories;
        
        this.projetSpecifiques = this.projets.filter(ele => ele.user_id == this.userOnline.user.id && ele.is_deleted == false);

        for (let i = 0; i < this.categories.length; i++) {
          this.projetSpecifiques.forEach(element => {
            if (this.categories[i].id == element.categorie_id) {
              element.categorie_id = this.categories[i].nom;
            }
          });
        }
        
      }
    )

    
  }

    envoyerProjet() {
    const newProjet = new Projet(this.titre, this.description, this.statut, this.image, this.categorie_id, this.userOnline.user.id)

    // console.log(newProjet);
    
    this.pro.postProjet(newProjet).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          title: 'success',
          text: 'Projet enregistré avec succès',
          icon: 'success'
        }) 
        location.reload()
        this.switch = 1;
      }
    ) 
    }
  supprimerProjet(id: number) {
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {result
    //   if (.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
    this.pro.supprimerProjet(id).subscribe(
      response => {
        console.log(response);
      }
    )
  }

  swichter1() {
    this.switch = 1;
  }
  swichter2() {
    this.switch = 2;
  }
  etape1() {
    this.step = 11
  }
  etape2() {
    this.step = 12
  }
  etape3() {
    this.step = 13
  }
  etape4() {
    this.step = 14
  }
  etape5() {
    this.step = 15
  }
}
