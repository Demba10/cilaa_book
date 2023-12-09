import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Les attributs
  switch: number = 0;
  passe!: number;

  ngOnInit(): void {
    this.updateStage()
  }
  updateStage() {
    localStorage.setItem('switch', JSON.stringify(this.switch));
    this.passe = JSON.parse(localStorage.getItem('switch') || '0');
  }

  swichDefault() {
    setTimeout(() => {
      this.switch = 0;
      this.updateStage()
    }, 1);
  }

  switchPorteur() {
    setTimeout(() => {
      this.switch = 1;
      this.updateStage()
    }, 1);
  }

  switchBailleur() {
    this.switch = 1;
    this.updateStage()
  }
}
