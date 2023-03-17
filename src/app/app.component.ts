import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  template: `
    <app-layout></app-layout>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
}
