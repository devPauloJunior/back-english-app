import { Component } from '@angular/core'; //permite decorar a class, fazendo se tornar em um componente Angular

@Component({
  selector: 'app-root',
  template: `
    <app-layout></app-layout>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
}
