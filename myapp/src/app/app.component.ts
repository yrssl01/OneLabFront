import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  todoList = [
    {
      completed: false,
      name: 'Купить молоко',
    },
    {
      completed: false,
      name: 'Купить хлеб',
    },
    {
      completed: false,
      name: 'Купить масло',
    },
  ];

  addData(value: string) {
    if (value) {
      this.todoList.push({
        name: value,
        completed: false,
      });
    };
  };

}
