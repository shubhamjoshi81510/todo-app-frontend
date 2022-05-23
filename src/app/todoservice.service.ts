import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from './model/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  constructor(private http:HttpClient) { 
    this.refreshtodo();
  }
 
    todos: any[]=[
  
    
    ]
     
    public refreshtodo():void{

      this.http.get<Todos[]>('http://localhost:8080/get-todos').subscribe(res => {
        this.todos = res;
      })
    }
    public deleteTodos(id:number):void{
      let url = 'http://localhost:8080/delete-todo/'+id;
      this.http.delete<Todos[]>(url).subscribe(res => {
        this.todos = res;
      })

  }
  public addTodo(newtask:String){
    let reqBody = {
      task:newtask
    }
    this.http.post<Todos[]>('http://localhost:8080/add-todo',reqBody).subscribe(res => {
      this.todos = res;
    })
  }
}
