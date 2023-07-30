import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../interfaces/ipensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listarPensamentos: IPensamento[] = [];

  constructor(){

  }

  ngOnInit(): void {

  }

}
