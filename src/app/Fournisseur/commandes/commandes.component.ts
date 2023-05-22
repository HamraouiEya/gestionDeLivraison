import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/Classes/commande';
import { CommandeService } from 'src/app/Services/commande-service.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
commandes!: Commande [];
  constructor(private commandeservice:CommandeService,private router:Router) { }

  ngOnInit(): void {
  }
  getAllCommandes() {
    this.commandeservice.getAllCommandes()
      .subscribe(commandes => {
        this.commandes = commandes;
        console.log(this.commandes); // Do something with the users data
      }, error => {
        console.error(error); // Handle error if any
      });
  }
ajout()
{
  this.router.navigate(['ajouterCommande'])
}
}
