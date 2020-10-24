import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  @Input() titleMenu: string = "";
  @Input() mainIconMenu: string = "";
  @Input() sidemenuItems: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
