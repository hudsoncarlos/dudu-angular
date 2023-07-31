import { Component, OnInit } from '@angular/core';
import { IPensamento } from '../interfaces/ipensamento';
import { PensamentoService } from '../services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: IPensamento[] = [];

  constructor(private service: PensamentoService){

  }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentosApi) => {
      this.listaPensamentos = listaPensamentosApi;
    });
  }

}
