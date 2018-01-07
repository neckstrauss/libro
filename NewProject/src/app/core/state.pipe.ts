import { Product } from '../model/entities/product.model';
import { ProductoModel } from '../model/repositories/producto.repository.model';
import {Pipe} from "@angular/core";
import {SharedState, MODES} from "./sharedState.model";
import {Model} from "../model/repositories/repository.model";

@Pipe({
  name: "formatState",
  pure: true
})
export class StatePipe {
  
  constructor(private model: ProductoModel) {}
  
  transform(value: any): string {
    if (value instanceof SharedState) {
      let state = value as SharedState;
      return MODES[state.mode] + (state.id != undefined
        ? ` ${this.model.getProduct(state.id).name}` : "");
    } else {
      return "<No Data>";
    }
  }
}