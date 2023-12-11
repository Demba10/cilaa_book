import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RegisterService } from 'src/app/services/register/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Les attributs
  switch: number = 2;
  passe!: number;
  users!: any;
  nom!: any;
  email!: any;
  tel!: any;
  psw!: any;
  adress!: any;
  image!: any;
  statut!: string;
  exactNom!: boolean;
  verifNom!: string;
  exactEmail!: boolean;
  verifEmail!: string;
  exactPassword!: boolean;
  verifPassword!: string;
  idLastUser!: number;

  constructor(
    private register: RegisterService,
  ) { }

  ngOnInit(): void {
    this.updateStage();
  }

  ajouterBailleur() {
    const us = new User(this.nom, this.adress,this.tel, this.image, this.statut, 'bailleur', this.psw, this.email,)
    this.register.postBailleur(us).subscribe(
      response => {
        console.log(response);
      }
    )
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
    this.switch = 2;
    this.updateStage()
  }


  // Systeme e connexion
  // Méthode pour afficher un sweetalert2 apres vérification 
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  // Verification du nom
  verifNomFonction() {
    this.exactNom = false;
    if (this.nom == "") {
      this.verifNom = "Veuillez renseigner votre nom";
    }
    else if (this.nom.length < 2) {
      this.verifNom = "Le nom est trop court";
    }
    else {
      this.verifNom = "";
      this.exactNom = true;
    }
  }

  // Verification de  l'email 
  verifEmailFonction() {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;
    this.exactEmail = false;

    if (this.email == "") {
      this.verifEmail = "Veuillez renseigner votre email";
    }
    else if (!this.email.match(emailPattern)) {
      this.verifEmail = "Veuillez donner un email valide";
    }
    else {
      this.verifEmail = "";
      this.exactEmail = true;
    }
  }
  // Verification du mot de passe 
  verifPasswordFonction() {
    this.exactPassword = false;
    if (this.psw == "") {
      this.verifPassword = "Veuillez renseigner votre mot de passe";
    }
    else if (this.psw.length < 5) {
      this.verifPassword = "Mot de passe doit être supérieur ou égal à 5";
    }
    else {
      this.verifPassword = "";
      this.exactPassword = true;
    }
  }


  // Valider l'inscription
  validerInscription() {
    // On fait appel au méthode qui permettent de vérifier les champs 
    this.verifEmailFonction();
    this.verifNomFonction();
    this.verifPasswordFonction();

    // On vérifie si le tableau n'est pas vide 
    if (this.users.length) {
      console.warn("taille du tab");
      this.idLastUser = this.users[this.users.length - 1].idUser;
      console.log(this.idLastUser)
    }
    else {
      this.idLastUser = 0;
      console.warn("idLastUser = 0")
    }

    // Si les champs sont exacts, on ajoute le compte dans le tableau localStorage
    if (this.exactNom && this.exactEmail && this.exactPassword) {
      let user = {
        idUser: this.idLastUser + 1,
        nom: this.nom,
        email: this.email,
        password: this.psw,
        contacts: []
      }

      console.log(this.idLastUser);
      let userExist = this.users.find((elemt: any) => elemt.email == this.email);

      if (userExist) {
        // Est executé que si l'on trouve un compte avce le meme email que celui qui a été renseigné
        this.verifierChamps('Erreur!', 'Cet email est déjà utilisé', 'error');
      }
      else {
        // On crée le compte 
        this.users.push(user);
        localStorage.setItem("Users", JSON.stringify(this.users));
        this.verifierChamps('Felicitation!', 'Inscription reuissie', 'success');
      }
    }
  }
}
