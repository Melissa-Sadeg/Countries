import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  //nvx route
  // pour chaque route   ya ladresse:path (nom de famille ) le composant prenom(destination acceille)
  // chaque route a une adresse
  { path: '', component: AccueilComponent },
  // on'as bien afficher la page le route marche
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
