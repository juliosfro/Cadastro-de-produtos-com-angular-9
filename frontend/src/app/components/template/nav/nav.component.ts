import { Component, OnInit } from '@angular/core';

/* A notação abaixo que começa com @ se chama decorator */
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
