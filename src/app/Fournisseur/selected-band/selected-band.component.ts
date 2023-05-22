import { Component, OnInit } from '@angular/core';
import { BonLivraison } from 'src/app/Classes/bon-livraison';
import { Commande } from 'src/app/Classes/commande';
import { Produit } from 'src/app/Classes/produit';
import { ProduitService } from 'src/app/Services/produit-service.service';

@Component({
  selector: 'app-selected-band',
  templateUrl: './selected-band.component.html',
  styleUrls: ['./selected-band.component.css']
})
export class SelectedBandComponent implements OnInit {
bon!:BonLivraison[];
commande!:Commande[];
produits!:Produit[];
  constructor(private produitservice:ProduitService) { }

  ngOnInit(): void {
  }

  getAllProduits() {
    this.produitservice.getAllProduits()
      .subscribe(produits => {
        this.produits = produits;
        console.log(this.produits); // Do something with the users data
      }, error => {
        console.error(error); // Handle error if any
      });
  }
}
