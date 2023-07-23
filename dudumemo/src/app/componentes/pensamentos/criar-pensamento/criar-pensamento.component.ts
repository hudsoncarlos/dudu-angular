import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Árvore e Folha.',
    autoria: 'J.R.R Tolkien',
    modelo: 'modelo3'
  }

  constructor(){}

  ngOnInit(): void {

  }

  criarPensamento(){
    alert("Pensamento criado.");
  }

  cancelarPensamento(){
    alert("Pensamento cancelado.");
  }
}
