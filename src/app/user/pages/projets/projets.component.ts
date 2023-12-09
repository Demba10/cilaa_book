import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  // les attributs

  public show: boolean = true;

  ngOnInit(): void {
      
  }

  showDetail():void {
    this.show = !this.show;
  }
}
