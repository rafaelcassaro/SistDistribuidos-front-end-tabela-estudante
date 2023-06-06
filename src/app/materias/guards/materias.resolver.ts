import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


import {MateriasService } from '../services/materias.service';
import { Materias } from '../model/materias';

@Injectable({
  providedIn: 'root'
})
export class MateriasResolver implements Resolve<Materias> {

  constructor(private service: MateriasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Materias> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', name: '', email: '', codigoAluno:'' ,password:'',materias: []});
  }
}
