import {Categoria} from "../../model/entities/categoria.model";
import {Component, Inject, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Product} from "../../model/entities/product.model";
import {CategoriaModel} from "../../model/repositories/categoria.repository.model";
import {ProductoModel} from '../../model/repositories/producto.repository.model';
import {Model} from "../../model/repositories/repository.model";
import {MODES, SharedState, SHARED_STATE} from "../sharedState.model";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;

@Component({
  selector: "modal-form",
  moduleId: module.id,
  templateUrl: "form.component.html",
  styleUrls: ["form.component.scss"]
})
export class FormComponent {

  @ViewChild('form') form: NgForm;
  product: Product = new Product();
  originalProduct = new Product();

  lastId: number;
  editing: boolean = false;

  constructor(private model: ProductoModel, private categoriaModel: CategoriaModel,
    @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.product = new Product();
      if (update.id != undefined) {
        Object.assign(this.product, this.model.get(update.id));
        Object.assign(this.originalProduct, this.product);
      } else {
        this.form.reset();
      }

      this.editing = update.mode == MODES.EDIT;
    });
  }
  
  get categorias(): Categoria[] {
    return this.categoriaModel.getDataSet();
  }

  cambiarProducto(id: number) {
    if (id != undefined) {
      Object.assign(this.product, this.model.get(id));
      Object.assign(this.originalProduct, this.product);
    }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.save(this.product);
      this.originalProduct = this.product;
      form.reset();
      $("#modalForm").modal("hide");
    }
  }  

}

