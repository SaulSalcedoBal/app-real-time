import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //Variable Declarations
  /* Parametros de entrada del componente ( @Input() )*/
  @Input() empresa: string;
  @Input() anio: number;
  //@Input() isBold: boolean= false;

  ngOnInit(): void {
  }

}
