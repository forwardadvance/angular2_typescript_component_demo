import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <h1>Hello {{name}}</h1>
    `
})
export class AppComponent {
  private name: string
  constructor() {
    this.name = 'World'
  }
}
