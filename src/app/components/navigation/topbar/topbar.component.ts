import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navigation-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  //Variable de entrada
  @Input() menuProfileItems: any[] = [];
  //Salida, objetos capaces de emitir un evento(EventEmitter)
  @Output() onClickMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclick_menu(index: number, item: any){
    //console.log('El indice seleccionado en el hijo es: ', index);
    //console.log('El item seleccionado en hijo es: ', item);
    
    //Regresar al componente papá (app.component), pueda ser escuchado por el componente papá
    this.onClickMenu.emit({
      index,
      name: item.title
    });

  }

}