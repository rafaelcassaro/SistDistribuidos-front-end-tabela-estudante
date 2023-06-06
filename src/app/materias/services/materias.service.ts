import { Injectable } from '@angular/core';
import { Materias } from '../model/materias';
import {HttpClient} from '@angular/common/http'
import { first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private readonly API = 'api/recurso2/estudante';
  private readonly APIpost = 'api/recurso1/estudante';
  private readonly APIput = 'api/recurso3/estudante';

  constructor(private httpClient: HttpClient ){ }

  loadById(id: String){
    return this.httpClient.get<Materias>(`${this.APIpost}/${id}`);
  }

  listFindAll(){
      return this.httpClient.get<Materias[]>(this.API).pipe(first(), tap(materias => console.log(materias) ));
  }

  save(record: Materias){
    if(record.id){
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Materias){
    return this.httpClient.post<Materias>(this.APIpost, record);
  }

  private update(record: Materias){
    return this.httpClient.put<Materias>(`${this.APIput}/${record.id}`, record);
  }

  remove(id: String){
    return this.httpClient.delete(`${this.APIput}/${id}`).pipe(first());
  }


}
