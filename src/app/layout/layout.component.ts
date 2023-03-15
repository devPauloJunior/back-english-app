import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  public jogoEmAndamento: boolean = true;
  public tipoDeEncerramento: string

  constructor() {}
  ngOnInit() {}

  public encerrarGame(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoDeEncerramento = tipo;
  }

  public reiniciarGame(): void {
    this.jogoEmAndamento = true;
    this.tipoDeEncerramento = undefined;
  }

}
