import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReutilisableComponent } from './reutilisable/reutilisable.component';



@NgModule({
  declarations: [
    ReutilisableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    FormsModule,
    ReutilisableComponent
  ]
})
export class SharedModule { }
