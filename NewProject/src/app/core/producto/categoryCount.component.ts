import { ProductoModel } from '../../model/repositories/producto.repository.model';
import {
    Component, KeyValueDiffer,
    KeyValueDiffers, ChangeDetectorRef
} from "@angular/core";
import { Model } from "../../model/repositories/repository.model";

@Component({
    selector: "paCategoryCount",
    template: `<div class="bg-primary p-a-1">There are {{count}} categories</div>`
})
export class CategoryCountComponent {
    private differ: KeyValueDiffer<any, any>;
    count: number = 0;

    constructor(private model: ProductoModel,
        private keyValueDiffers: KeyValueDiffers,
        private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.differ = this.keyValueDiffers
            .find(this.model.getDataSet())
            .create();
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getDataSet()) != null) {
            this.count = this.model.getDataSet()
                .map(p => p.category)
                .filter((category, index, array) => array.indexOf(category) == index)
                .length;
        }
    }
}