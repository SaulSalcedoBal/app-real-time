import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Llamada a apis
const endPoint: string = 'assets/json/mainMenu.json';

@Injectable({
  providedIn: 'root'
})
export class MainTopBarMenuService {

  //Modulo para establecer las llamadas a las apis rest (Http Client)
  constructor(private http: HttpClient) { }

getItemsMenu(){
  //Subscriptor
  return this.http.get(endPoint);
}


}
