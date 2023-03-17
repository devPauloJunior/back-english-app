import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Palavra } from '../shared/palavra.model'
import { PALAVRAS } from './palavras-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public palavras: Palavra[] = PALAVRAS
  public instrucoes: string = 'Traduza a(s) palavra(s)'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaPalavra: Palavra

  public progresso: number = 0
  public tentativas: number = 5

  @Output() public encerrarGame : EventEmitter<string> = new EventEmitter

  constructor() {
    this.rodadaPalavra = this.palavras[this.rodada]
    this.atualizaRodada();
  }
  ngOnInit() {}
  ngOnDestroy() {}

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void {  
    if (this.rodadaPalavra.palavraPtBr == this.resposta) {
      this.rodada++
      if (this.rodada === 4) {
         this.encerrarGame.emit('vitoria');
      }

      this.atualizaRodada()

      this.progresso = this.progresso + (100 / this.palavras.length);
      console.log(this.rodada)
    } else {
      this.tentativas--;

      if(this.tentativas === -1) {
        this.encerrarGame.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaPalavra = this.palavras[this.rodada]
    this.resposta = ''
  }
}
