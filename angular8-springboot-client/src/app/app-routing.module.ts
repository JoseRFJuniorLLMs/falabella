import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { CreateBeerComponent } from './create-beer/create-beer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { UpdateBeerComponent } from './update-beer/update-beer.component';

const routes: Routes = [
  { path: '', redirectTo: 'beer', pathMatch: 'full' },
  { path: 'beers', component: BeerListComponent },
  { path: 'add', component: CreateBeerComponent },
  { path: 'update/:id', component: UpdateBeerComponent },
  { path: 'details/:id', component: BeerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
