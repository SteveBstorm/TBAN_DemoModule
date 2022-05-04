import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { ListeComponent } from './components/liste/liste.component';
import { BeerComponent } from './beer.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListeComponent,
    BeerComponent
  ],
  imports: [
    CommonModule,
    BeerRoutingModule,
    SharedModule
  ]
})
export class BeerModule { }
