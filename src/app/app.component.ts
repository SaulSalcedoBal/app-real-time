import { Component, OnInit } from '@angular/core';
import { MainTopBarMenuService } from './services/core/main-top-bar-menu.service';
import { SideBarMenuService } from './services/core/side-bar-menu.service';

//TypeScript
declare var App:/*tipo de variable (cualquiera) -->*/any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /* Add the next part to load the js */ implements OnInit {

  constructor(private menuSvc: MainTopBarMenuService, private menuSb: SideBarMenuService) {

  }

  title = 'app-real-time';


  miempresa: string = 'Grupo Flecha Amarilla';
  periodo: number = 2020;

  menuItems: any[] = [];

  sidemenuItems: any[] = [];


  // Primer elemento al correr un componente
  ngOnInit() {
    // Load SideBar Script
    App.init();
    // Load Data
    this.getData();

    this.getDataSideBar();
  }

  getData() {
    this.menuSvc.getItemsMenu().subscribe((data: any) => {
      //Async
      this.menuItems = data;

    });


  }

  getDataSideBar() {
    this.menuSb.getItemsMenuSideBar().subscribe((dat: any) => {
      //Async
      this.sidemenuItems = dat;

    });


  }

listenChildMenuEvent(eventArgs: any){
  console.log('Los datos emitidos por el componente hijo son: ', eventArgs);
  console.log('El indice seleccionado en el componente pap+a es: ', eventArgs.index);
    console.log('El item seleccionado en el componente hijo es: ', eventArgs.name);
}

}
