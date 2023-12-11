import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  // les attributs

  constructor(
    private router: Router
  ) {}

  public show: boolean = true;

  ngOnInit(): void {
      
  }

  showDetail():void {
    this.router.navigate(['/details'])
  }
}
