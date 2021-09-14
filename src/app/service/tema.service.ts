import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAlltema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://plek.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`https://plek.herokuapp.com/tema/${id}`, this.token)


  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://plek.herokuapp.com/tema', tema, this.token)

  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('https://plek.herokuapp.com/tema/put', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://plek.herokuapp.com/tema/del/${id}`, this.token)

  }
}
