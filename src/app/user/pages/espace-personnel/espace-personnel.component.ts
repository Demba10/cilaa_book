import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espace-personnel',
  templateUrl: './espace-personnel.component.html',
  styleUrls: ['./espace-personnel.component.css']
})
export class EspacePersonnelComponent implements OnInit {

  // Les attributs

  switch: number = 2;
  step: number = 11;

  ngOnInit(): void {
      
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
