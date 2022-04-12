import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() list: any;
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(itemIndex: number) {
    this.list.splice(itemIndex, 1);
  }

}
