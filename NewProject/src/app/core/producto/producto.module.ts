import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../../model/model.module";
import {TableComponent} from "./../producto/table.component";
import {FormComponent} from "./../producto/form.component";
import {StatePipe} from './../state.pipe';
import {Subject} from "rxjs/Subject";
import {MessageModule} from "../../messages/message.module";
import {MessageService} from "../../messages/message.service";
import {Message} from "../../messages/message.model";
import { ModelResolver } from '../../model/model.resolver';
import {Model} from "../../model/repositories/repository.model";
import { TablaGenericaComponent } from "../componentesGenericos/tabla-generica/tabla-generica.component";
import { SharedState, SHARED_STATE } from "../sharedState.model";
import { TermsGuard } from '../terms.guard';
import {CategoryCountComponent} from './../producto/categoryCount.component';
import {NotFoundComponent} from './../notFound.component';
import {ProductCountComponent} from './../producto/productCount.component';
import {UnsavedGuard} from './../unsaved.guard';
import { CounterDirective } from "./counter.directive";
import {RouterModule, Routes} from "@angular/router";

import {CommonModule} from "@angular/common";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from "ngx-order-pipe";
import {NgxPaginationModule} from 'ngx-pagination';
const childRoutes: Routes = [
  {
    path: "",
    canActivateChild: [TermsGuard],
    children: [{path: "products", component: ProductCountComponent},
    {path: "categories", component: CategoryCountComponent},
    {path: "", component: ProductCountComponent}],
    resolve: {model: ModelResolver}
  }

];

let routing = RouterModule.forChild([
  
    {
    path: "form/:mode/:id", component: FormComponent,
    resolve: {model: ModelResolver},
    canDeactivate: [UnsavedGuard]
  },
  {
    path: "form/:mode", component: FormComponent,
    resolve: {model: ModelResolver},
  //    canActivate: [TermsGuard]
  },
  {path: "table", component: TableComponent, resolve: { model: ModelResolver }},
  {path: "table/:category", component: TableComponent},
  {path: "", redirectTo: "/product/table", pathMatch: "full"},
  
]);

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, MessageModule, routing, Ng2SearchPipeModule, OrderModule, NgxPaginationModule],
  declarations: [TableComponent, FormComponent, ProductCountComponent, CategoryCountComponent, CounterDirective],
  exports: [ModelModule, TableComponent, FormComponent],
//  providers: [UnsavedGuard],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]

//    providers: [{
//      provide: SHARED_STATE,
//      deps: [MessageService, Model],
//      useFactory: (messageService, model) => {
//        return new Subject<SharedState>();
//  //      let subject = new Subject<SharedState>();
//  //      subject.subscribe(m => messageService.reportMessage(
//  //        new Message(MODES[m.mode] + (m.id != undefined
//  //          ? ` ${model.getProduct(m.id).name}` : "")))
//  //      );
//  //      return subject;
//      }
//    }]
})
export class ProductoModule {}

