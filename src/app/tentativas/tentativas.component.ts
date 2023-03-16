import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges, OnInit {

  @Input() public tentativas: number = 0;

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {}
  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }

  }
  ngOnInit() {}
}
