import {Routes, RouterModule} from "@angular/router";
import {TableComponent} from "./core/producto/table.component";
import {FormComponent} from "./core/producto/form.component";
import {NotFoundComponent} from './core/notFound.component';
import {ProductCountComponent} from "./core/producto/productCount.component";
import {CategoryCountComponent} from "./core/producto/categoryCount.component";
import {ModelResolver} from './model/model.resolver';
import {TermsGuard} from './core/terms.guard';
import {UnsavedGuard} from './core/unsaved.guard';
import { LoadGuard } from './load.guard';




const routes: Routes = [
  {
    path: "ondemand",
    loadChildren: "./core/ondemand/ondemand.module#OndemandModule",
    canLoad: [LoadGuard]
  },
  {
    path: "product",
    loadChildren: "./core/producto/producto.module#ProductoModule",
//    canLoad: [LoadGuard]
  },
  {
    path: "productg",
    loadChildren: "./core/producto-generico/productoGenerico.module#ProductoGenericoModule",
//    canLoad: [LoadGuard]
  },
  {
    path: "categoria",
    loadChildren: "./core/categoria/categoria.module#CategoriaModule",
  },
  {path: "", redirectTo: "/productg/tableg", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];


export const routing = RouterModule.forRoot(routes);