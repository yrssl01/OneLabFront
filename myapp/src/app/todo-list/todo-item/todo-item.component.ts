import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item : any;
  @Output() deleteHandle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


}
