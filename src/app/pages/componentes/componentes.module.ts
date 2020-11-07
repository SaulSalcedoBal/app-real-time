import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { BotonesComponent } from './botones/botones.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { ComponentesRouterModule } from './componentes.routes';
import { BotonesTestComponent } from './botones-test/botones-test.component';
import { NewTestComponent } from './new-test/new-test.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { RegistroComponent } from './registro/registro.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { PaisesComponent } from './paises/paises.component';



@NgModule({
  declarations: [ComponentesComponent, BotonesComponent, TarjetasComponent, BusquedaComponent, CancelacionComponent, BotonesTestComponent, NewTestComponent, PerfilComponent, ConfiguracionesComponent, RegistroComponent, CerrarComponent, PaisesComponent],
  imports: [
    CommonModule,
    ComponentesRouterModule
  ]
})
export class ComponentesModule { }
