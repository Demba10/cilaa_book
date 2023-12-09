import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-personnel',
  templateUrl: './espace-personnel.component.html',
  styleUrls: ['./espace-personnel.component.css']
})
export class EspacePersonnelComponent implements OnInit {

  // Les attributs

  switch: number = 2;

  ngOnInit(): void {
      
  }

  swichter1() {
    this.switch = 1;
  }
  swichter2() {
    this.switch = 2;
  }
}
