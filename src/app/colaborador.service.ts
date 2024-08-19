// src/app/colaborador.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from './models/colaborador.model';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private baseUrl = 'http://localhost:8080/api/colaboradores';

  constructor(private http: HttpClient) { }

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.baseUrl);
  }

  getColaborador(id: number): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${this.baseUrl}/${id}`);
  }

  createColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.baseUrl, colaborador);
  }

  updateColaborador(id: number, colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(`${this.baseUrl}/${id}`, colaborador);
  }

  deleteColaborador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getColaboradoresAdmitidosNoAno(year: number): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${this.baseUrl}/admitidos/${year}`);
  }
}
