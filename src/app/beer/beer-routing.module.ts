import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './beer.component';
import { ListeComponent } from './components/liste/liste.component';

const routes: Routes = [
  {path : '', component : BeerComponent, children : [
    {path : 'liste', component : ListeComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
