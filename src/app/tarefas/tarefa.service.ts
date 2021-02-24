import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listartTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listartTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefa'] = JSON.stringify(tarefa);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listartTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

}
