import { ProductoModel } from '../../model/repositories/producto.repository.model';
import {
    Component, KeyValueDiffer,
    KeyValueDiffers, ChangeDetectorRef
} from "@angular/core";
import { Model } from "../../model/repositories/repository.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "paProductCount",
    template: `<div class="bg-info p-a-1">There are {{count}} products</div>`
})
export class ProductCountComponent {
    private differ: KeyValueDiffer<any, any>;
    count: number = 0;
    private category: string;

    constructor(private model: ProductoModel,
            private keyValueDiffers: KeyValueDiffers,
            private changeDetector: ChangeDetectorRef,
            activeRoute: ActivatedRoute) {

        activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
            if (params["category"] != null) {
                this.category = params["category"];
                this.updateCount();
            }
        } ) );
    }

    ngOnInit() {
        this.differ = this.keyValueDiffers
            .find(this.model.getDataSet())
            .create();
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getDataSet()) != null) {
            this.updateCount();
        }
    }

    private updateCount() {
        this.count = this.model.getDataSet()
            .filter(p => this.category == null || p.category == this.category)
            .length;
    }
}