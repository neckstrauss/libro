import { ModelModule } from "../../model/model.module";
import { ModelResolver } from "../../model/model.resolver";
import { ModalFormGenericoComponent } from "../componentesGenericos/modal-form-generico/modal-form-generico.component";
import { TablaGenericaComponent } from "../componentesGenericos/tabla-generica/tabla-generica.component";
import { SHARED_STATE, SharedState } from "../sharedState.model";
import { FormComponent } from "./form.component";
import { TableComponent } from "./table.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from "ngx-order-pipe";
import { NgxPaginationModule } from 'ngx-pagination';
import { Subject } from "rxjs/Subject";
import { ExcelService } from "../producto/excel.service";
import { ModuloGenericoModule } from "../componentesGenericos/modulo-generico.module";

let routing = RouterModule.forChild([

  { path: "tableg", component: TableComponent, resolve: { model: ModelResolver } },
  { path: "", redirectTo: "/productg/tableg", pathMatch: "full" },

]);

@NgModule({
  imports: [CommonModule, FormsModule, ModelModule, routing, Ng2SearchPipeModule, OrderModule, NgxPaginationModule, ModuloGenericoModule],
  declarations: [TableComponent, FormComponent],
  exports: [TableComponent, FormComponent, TablaGenericaComponent, ModalFormGenericoComponent],
  providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }, ExcelService]

})
export class ProductoGenericoModule { }

