import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'John Ronald Reuel Tolkien, conhecido internacionalmente por J. R. R. Tolkien, foi um escritor, professor universitário e filólogo britânico. Nascido na atual África do Sul, que recebeu o título de doutor em Letras e Filologia pela Universidade de Liège e Dublin, em 1954, e autor das obras como O Hobbit, O Senhor dos Anéis e O Silmarillion. Em 28 de março de 1972, Tolkien foi nomeado Comendador da Ordem do Império Britânico pela Rainha Elizabeth II.',
      autoria: 'John Ronald Reuel Tolkien',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Christopher Tolkien nasceu em Leeds, na Inglaterra, o terceiro de quatro filhos do autor John Ronald Reuel Tolkien e de Edith Mary Reuel Tolkien (21 de janeiro de 1889 – 29 de novembro de 1971). Foi educado na Dragon School em Oxford, e então na Oratory School. Durante a Segunda Guerra Mundial, ele serviu como piloto da Força Aérea Real, cursando Inglês depois na Universidade de Oxford.',
      autoria: 'Christopher John Reuel Tolkien',
      modelo: 'modelo3'
    }
  ]

  constructor(){

  }

  ngOnInit(): void {

  }

}
