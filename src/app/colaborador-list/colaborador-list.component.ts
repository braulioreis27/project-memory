// src/app/colaborador-list/colaborador-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../colaborador.service';
import { Colaborador } from '../models/colaborador.model';


@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.css']
})
export class ColaboradorListComponent implements OnInit {
  colaboradores: Colaborador[] = [];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.colaboradorService.getColaboradores().subscribe(data => {
      this.colaboradores = data;
    });
  }
}
