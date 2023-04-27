import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilFournisseurComponent } from './components/profil-fournisseur/profil-fournisseur.component';
import { ProfilLivreurComponent } from './components/profil-livreur/profil-livreur.component';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { ListLivraisonComponent } from './components/list-livraison/list-livraison.component';
import { ListLivreurComponent } from './components/list-livreur/list-livreur.component';
import { ListFournisseurComponent } from './components/list-fournisseur/list-fournisseur.component';
import { BonDeLivraisonComponent } from './components/bon-de-livraison/bon-de-livraison.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilFournisseurComponent,
    ProfilLivreurComponent,
    AdminDashbordComponent,
    ListLivraisonComponent,
    ListLivreurComponent,
    ListFournisseurComponent,
    BonDeLivraisonComponent,
    LoginComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
