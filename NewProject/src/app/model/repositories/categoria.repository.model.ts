import { Model } from './repository.model';
import { RestDataSource } from '../dataSources/rest.datasource';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { Categoria } from "../entities/categoria.model";

@Injectable()
export class CategoriaModel extends Model<Categoria> {
  constructor(private ds: RestDataSource) {    
    super(ds, environment.url + "store/v1/categorias");    
    super.loadDataSet();
  }  
}