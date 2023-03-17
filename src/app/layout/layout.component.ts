import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  
  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string = "" 

  public encerrarGame(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo():void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ""
  }
  
}
