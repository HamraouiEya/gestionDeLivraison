import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Entities/home/home.component';
import { LogInComponent } from './Entities/log-in/log-in.component';
import { FooterComponent } from './Entities/footer/footer.component';
import { HomeClientComponent } from './Entities/Client/home-client/home-client.component';
import { LivraisonComponent } from './Entities/Client/livraison/livraison.component';
import { HomeAdminComponent } from './Entities/Admin/home-admin/home-admin.component';

import { GestionLivreursComponent } from './Entities/Admin/gestion-livreurs/gestion-livreurs.component';
import { GestionFournisseurComponent } from './Entities/Admin/gestion-fournisseur/gestion-fournisseur.component';
import { GestionLivraisonComponent } from './Entities/Admin/gestion-livraison/gestion-livraison.component';
import { GestionBanDeLivraisonComponent } from './Entities/Admin/gestion-ban-de-livraison/gestion-ban-de-livraison.component';
import { GestionProduitComponent } from './Entities/Admin/gestion-produit/gestion-produit.component';

import { AjouterCommandeComponent } from './Fournisseur/ajouter-commande/ajouter-commande.component';

import { CommandesComponent } from './Fournisseur/commandes/commandes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedBandComponent } from './Fournisseur/selected-band/selected-band.component';
import { CreeCompteComponent } from './Entities/cree-compte/cree-compte.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AjouterProduitComponent } from './Entities/ajouter-produit/ajouter-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent,
    FooterComponent,
    HomeClientComponent,
    LivraisonComponent,
    HomeAdminComponent,

    GestionLivreursComponent,
    GestionFournisseurComponent,
    GestionLivraisonComponent,
    GestionBanDeLivraisonComponent,
    GestionProduitComponent,

    AjouterCommandeComponent,

    CommandesComponent,
    SelectedBandComponent,
    CreeCompteComponent,
    AjouterProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
