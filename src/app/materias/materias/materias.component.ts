import { MateriasService } from './../services/materias.service';
import { Component } from '@angular/core';
import { Materias } from '../model/materias';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.scss']
})
export class MateriasComponent {
  materias: Observable <Materias[]> ;
  displayedColumns = ['id','name','email','codigoAluno','password','materias','actions'];

  //MateriasService: MateriasService;

  constructor(private materiasService: MateriasService,
    private router: Router,
    private route: ActivatedRoute

    ){
    //this.materias = [];
    //this.MateriasService = new MateriasService();
    this.materias = this.materiasService.listFindAll();

  }

  refresh(){
    this.materias = this.materiasService.listFindAll();
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});

  }

  onEdit(materia: Materias){
    this.router.navigate(['edit', materia.id], {relativeTo: this.route});

  }

  onDelete(materia: Materias){
    console.log(this.materiasService.remove);
    this.materiasService.remove(materia.id).subscribe(
      (response) => {
        console.log('Estudante removido com sucesso:', response);
        this.refresh();

      },
      (error) => {
        console.error('Erro ao remover estudante:', error);
      }
    );

  }





}
