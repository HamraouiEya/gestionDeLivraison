import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Entities/home/home.component';
import { LogInComponent } from './Entities/log-in/log-in.component';
import { HomeClientComponent } from './Entities/Client/home-client/home-client.component';
import { LivraisonComponent } from './Entities/Client/livraison/livraison.component';
import { HomeAdminComponent } from './Entities/Admin/home-admin/home-admin.component';
import { GestionLivreursComponent } from './Entities/Admin/gestion-livreurs/gestion-livreurs.component';
import { GestionLivraisonComponent } from './Entities/Admin/gestion-livraison/gestion-livraison.component';
import { GestionProduitComponent } from './Entities/Admin/gestion-produit/gestion-produit.component';
import { GestionBanDeLivraisonComponent } from './Entities/Admin/gestion-ban-de-livraison/gestion-ban-de-livraison.component';
import { CommandesComponent } from './Fournisseur/commandes/commandes.component';
import { AjouterCommandeComponent } from './Fournisseur/ajouter-commande/ajouter-commande.component';
import { SelectedBandComponent } from './Fournisseur/selected-band/selected-band.component';
import { CreeCompteComponent } from './Entities/cree-compte/cree-compte.component';
import {GestionFournisseurComponent} from "./Entities/Admin/gestion-fournisseur/gestion-fournisseur.component";

const routes: Routes = [
  { path: 'home', title: 'home', component: HomeComponent },
  { path: 'LogIn', title: 'LogIn', component: LogInComponent },
  { path: 'HomeClient', title: 'HomeClient', component: HomeClientComponent },
  {
    path: 'gestionFournisseur',
    title: 'gestionFournisseur',
    component: GestionFournisseurComponent,
  },
  {
    path: 'gestionLivreurs',
    title: 'gestionLivreurs',
    component: GestionLivreursComponent,
  },
  {
    path: 'commandesFournisseur',
    title: 'commandesFournisseur ',
    component: CommandesComponent,
  },
  {
    path: 'creeCompte',
    title: 'cree compte ',
    component: CreeCompteComponent,
  },
  {
    path: 'SelectedBandeLivraison',
    title: 'selactedBandeLivraison',
    component: SelectedBandComponent,
  },
  {
    path: 'ajouterCommande',
    title: 'ajouter une commande  ',
    component: AjouterCommandeComponent,
  },
  {
    path: 'gestionLivraison',
    title: 'gestionLivraison',
    component: GestionLivraisonComponent,
  },
  {
    path: 'gestionProduit',
    title: 'gestionProduit',
    component: GestionProduitComponent,
  },
  {
    path: 'gestionBanDeLivraison',
    title: 'gestionBanDeLivraison',
    component: GestionBanDeLivraisonComponent,
  },
  {
    path: 'commandeclient',
    title: 'commandeclient',
    component: LivraisonComponent,
  },
  {
    path: 'homeAdmin',
    title: 'homeAdmin',
    component: HomeAdminComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
