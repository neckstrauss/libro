import {Component, Inject} from "@angular/core";
import {Product} from "../../model/entities/product.model";
import {ProductoModel} from '../../model/repositories/producto.repository.model';
import {Model} from "../../model/repositories/repository.model";
import {SharedState, MODES, SHARED_STATE} from "../sharedState.model";
import {ActivatedRoute} from "@angular/router";
import { Observer } from "rxjs/Observer";


@Component({
  selector: "paTable",
  moduleId: module.id,
  templateUrl: "table.component.html",
  styleUrls: ['table.component.scss']
})
export class TableComponent {
  category: string = null;

  public productsPerPage = 15;
  public selectedPage = 1;

  key: string = 'name'; //set default  
  reverse: boolean = false;


  constructor(private model: ProductoModel, activeRoute: ActivatedRoute,
  @Inject(SHARED_STATE) private observer: Observer<SharedState>) {

    activeRoute.params.subscribe(params => {
      this.category = params["category"] || null;
    });
  }



  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getDataSet()
      .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.model.getDataSet()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  deleteProduct(key: number) {
    this.model.delete(key);
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
  }


  getTotal(): number {
    return this.getProducts.length;
  }

  editProduct(key: number) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }
  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }

  actualizarProductos()
  {
    this.model.loadDataSet();  
  }
  



}