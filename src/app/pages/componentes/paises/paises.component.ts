import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/core/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paisesList: any[] = [];

  constructor(private svcPaises: PaisesService) {

    this.svcPaises.getCountriesByRegion('Americas').subscribe((data: any[]) => {
      this.paisesList = data;
    });

  }

  ngOnInit(): void {
  }

  searchCriterio(criterio) {
    console.log('El criterio es: ', criterio);
    this.svcPaises.getCountriesBycriterio(criterio).subscribe((data: any[]) => {
      this.paisesList = data;
  });


    //
  }
}
