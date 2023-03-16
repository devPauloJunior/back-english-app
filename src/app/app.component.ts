import { Component } from '@angular/core'; //permite decorar a class, fazendo se tornar em um componente Angular

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string = "" 


  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo():void {
    this.jogoEmAndamento = true
    this.tipoEncerramento = ""
  }
}
