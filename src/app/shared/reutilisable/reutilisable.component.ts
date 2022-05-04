import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reutilisable',
  templateUrl: './reutilisable.component.html',
  styleUrls: ['./reutilisable.component.scss']
})
export class ReutilisableComponent implements OnInit {

  @Input() prop! : string[]

  constructor() { }

  ngOnInit(): void {
  }

}
