import { Postagem } from './../model/Postagem';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://plek.herokuapp.com/postagem', this.token)
}

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://plek.herokuapp.com/postagem/${id}`, this.token)
  }

  postPostagens(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://plek.herokuapp.com/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://plek.herokuapp.com/postagem/put', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://plek.herokuapp.com/postagem/${id}`, this.token)
  }


}
