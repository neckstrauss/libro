import { ModelResolver } from './model.resolver';
import { ProductoModel } from './repositories/producto.repository.model';
import {NgModule} from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
//import {StaticDataSource} from "./static.datasource";
import {Model} from "./repositories/repository.model";
import { RestDataSource } from "./dataSources/rest.datasource";
import { CategoriaModel } from "./repositories/categoria.repository.model";


@NgModule({
  imports: [HttpClientModule],
  providers: [ ProductoModel, CategoriaModel, RestDataSource, ModelResolver]
})
export class ModelModule {}