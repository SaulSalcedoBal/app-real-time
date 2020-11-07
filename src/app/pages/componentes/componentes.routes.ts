import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BotonesComponent } from './botones/botones.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { ComponentesComponent } from './componentes.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { CerrarComponent } from './cerrar/cerrar.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { PaisesComponent } from './paises/paises.component';




const routes : Routes = [
    {
        path: '',
        component: ComponentesComponent,
        children: [
            {
                path: 'buttons', component: BotonesComponent
            },
            {
                path: 'cards', component: TarjetasComponent
            },
            {
                path: 'busqueda', component: BusquedaComponent
            },
            {
                path: 'cancelacion', component: CancelacionComponent
            },
            {
                path: 'cerrar', component: CerrarComponent
            },
            {
                path: 'configuraciones', component: ConfiguracionesComponent
            },
            {
                path: 'perfil', component: PerfilComponent
            },
            {
                path: 'registro', component: RegistroComponent
            },
            {
                path: 'paises', component: PaisesComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentesRouterModule { }