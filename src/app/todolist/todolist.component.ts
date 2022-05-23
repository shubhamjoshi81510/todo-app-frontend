import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todoservice:TodoserviceService) { }
  
    gettodos():any[]{
      return this.todoservice.todos;
    }
  
    
      
    deleteTodos(index:number):void{
      this.todoservice.deleteTodos(index);
     

  }
  ngOnInit(): void {}


   
 

  }



