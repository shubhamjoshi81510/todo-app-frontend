import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(private todoService:TodoserviceService) {}
  

  inputValue:string ='';
  ngOnInit(): void {
  }
 
  addTodo():void{
    this.todoService.addTodo(this.inputValue);
  }
}
