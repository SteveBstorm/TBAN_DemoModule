import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  prop! : string

  maListe : string[] = [
    "pomme", "poire", "fraise", "prune"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
