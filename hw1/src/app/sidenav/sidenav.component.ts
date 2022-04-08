import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { } 
  isMain = true;
  isAbout = false;
  isContact = false;

  page = 'main';

  ngOnInit(): void {
  }

}
