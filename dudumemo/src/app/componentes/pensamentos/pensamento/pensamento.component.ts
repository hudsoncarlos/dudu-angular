import { Component, Input, OnInit } from '@angular/core';
import { IPensamento } from '../interfaces/ipensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: IPensamento = {
    id: 0,
    conteudo: 'Conteúdo inserido para carregamento do componente filho pensamento.',
    autoria: 'Componente filho',
    modelo: 'modelo1'
  }

  constructor(){

  }

  ngOnInit(): void {

  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
