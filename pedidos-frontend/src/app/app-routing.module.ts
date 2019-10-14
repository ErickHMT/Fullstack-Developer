import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoConsultaComponent } from './pedido/pedido-consulta/pedido-consulta.component';

const appRoutes: Routes = [
    { path: 'pedido/novo', component: PedidoFormComponent },
    { path: 'pedido/list', component: PedidoConsultaComponent },
    { path: '', redirectTo: '/pedido/novo', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
