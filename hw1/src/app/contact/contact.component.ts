import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts = [
    {
      name: 'John',
      number: 555,
    },
    {
      name: 'Mike',
      number: 111,
    },
    {
      name: 'Bob',
      number: 333,
    },
  ];

  products = [
    {
      name: 'Банан',
      category: 'Фрукт',
    },
    {
      name: 'Картофель',
      category: 'Овощь',
    },
    {
      name: 'Говядина',
      category: 'Мясо',
    },
    {
      name: 'Курица',
      category: 'Мясо',
    },
    {
      name: 'Морковь',
      category: 'Овощь',
    },
    {
      name: 'Яблоко',
      category: 'Фрукт',
    }
  ];
  
}
