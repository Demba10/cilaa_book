import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bailleur-details',
  templateUrl: './bailleur-details.component.html',
  styleUrls: ['./bailleur-details.component.css']
})
export class BailleurDetailsComponent implements OnInit {


  ngOnInit(): void {
    this.hoverProjetDetail()
  }

  hoverProjetDetail() {
    let a = document.getElementById("box-projet");
    let b = document.getElementById("signale")
    a?.addEventListener('mouseover', () => {
      a!.style.backgroundColor = '#FB8500';
      b!.style.backgroundColor = '#023047';
      b!.style.color = '#fff';
    } )
    a?.addEventListener('mouseout', () => {
      a!.style.backgroundColor = '#023047';
      b!.style.backgroundColor = '#fff'
      b!.style.color = '#000';
    })
  }
}
