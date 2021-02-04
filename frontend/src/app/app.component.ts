import { Component } from '@angular/core';

@Component({
  /* Abaixo estamos setando um seletor para o componente. */
  selector: 'app-root',
  /* Vai apontar para o template que vamos criar. */
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'frontend';
  /* nome = 'Maria'; */
}
