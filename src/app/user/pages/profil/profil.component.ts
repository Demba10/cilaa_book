import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  // Les attributs
  isUpdating: boolean = false; 

  ngOnInit(): void {
      
  }
  isUpdatingFunction() {
    this.isUpdating = !this.isUpdating
  }
}
