import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Llamada a apis
const endPointSideBar: string = 'assets/json/sideMenu.json';

@Injectable({
  providedIn: 'root'
})
export class SideBarMenuService {

  //Modulo para establecer las llamadas a las apis rest (Http Client)
  constructor(private http: HttpClient) { }

  getItemsMenuSideBar(){
    //Subscriptor
    return this.http.get(endPointSideBar);
  }

}

