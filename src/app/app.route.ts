import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    // => (return)
    { path: 'dashboard', loadChildren: () => import('./pages/tableros/tableros.module').then(module => module.TablerosModule)},
    { path: 'components', loadChildren: () => import('./pages/componentes/componentes.module').then(module => module.ComponentesModule)},
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(module => module.LoginModule)},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })], //usehash para diferenciar una carpeta de una ruta
    //solo un archivo de rutas principal /forRoot/
    // para archivos de rutas hijos, /forchild/
    exports: [RouterModule]
})

export class AppRouterModule { 
    
}