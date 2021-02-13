import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  /* É necessario esperar a rota ser injetada no construtor pelo angular. */
  /* Será criado um router sem a necessidade de instancia-lo, isso chama-se 
     injeção de dependencia. */
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    /* console.log('Navegando...'); */
    this.router.navigate(['/products/create']);
  }

}
