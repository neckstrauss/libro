import {Component, Inject, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Product} from "../../model/entities/product.model";
import {ProductoModel} from '../../model/repositories/producto.repository.model';
import {Model} from "../../model/repositories/repository.model";
//import { SharedState, MODES } from "../sharedState.model";
import {MODES, SharedState, SHARED_STATE} from "../sharedState.model";
import {Observable} from "rxjs/Observable";
//import "rxjs/add/operator/filter";
//import "rxjs/add/operator/map";
//import "rxjs/add/operator/distinctUntilChanged";
//import "rxjs/add/operator/skipWhile";
import {ActivatedRoute, Router} from "@angular/router";

declare var $: any;


@Component({
  selector: "paForm",
  moduleId: module.id,
  templateUrl: "form.component.html",
  styleUrls: ["form.component.css"]
})
export class FormComponent {

  @ViewChild('form') form: NgForm;

  product: Product = new Product();
  originalProduct = new Product();

  lastId: number;
  editing: boolean = false;

  constructor(private model: ProductoModel,
    @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.product = new Product();
      this.form.reset();
      if (update.id != undefined) {
        Object.assign(this.product, this.model.getProduct(update.id));
        Object.assign(this.originalProduct, this.product);
      }
      this.editing = update.mode == MODES.EDIT;
    });

  }

  //  get editing(): boolean {
  //    return this.state.mode == MODES.EDIT;
  //  }

  //  constructor(private model: ProductoModel, activeRoute: ActivatedRoute, private router: Router) {
  //    activeRoute.params.subscribe(params => {
  //      this.editing = params["mode"] == "edit";
  //      let id = params["id"];
  //      if (id != null) {
  //        Object.assign(this.product, model.getProduct(id) || new Product());
  //        Object.assign(this.originalProduct, this.product);
  //      }
  //    });
  //  }

  //  constructor(private model: Model,
  //    @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
  //
  //    stateEvents
  //      .subscribe(update => {
  //        this.product = new Product();
  //        if (update.id != undefined) {
  //          Object.assign(this.product, this.model.getProduct(update.id));
  //        }
  //        this.editing = update.mode == MODES.EDIT;
  //      });
  // }



  cambiarProducto(id: number) {
    this.form.reset();
    if (id != undefined) {
      Object.assign(this.product, this.model.getProduct(id));
      Object.assign(this.originalProduct, this.product);
    }
  }

  submitForm(form: NgForm) {

    if (form.valid) {
      this.model.save(this.product);
      this.originalProduct = this.product;
      //      this.product = new Product();
      form.reset();
      $("#exampleModal").modal("hide");

      //  form.reset(); 
      //  this.router.navigateByUrl("/");

    }
  }

  resetForm() {
    this.product = new Product();
  }

}

