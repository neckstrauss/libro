import { Categoria } from "../../model/entities/categoria.model";
import { CategoriaModel } from "../../model/repositories/categoria.repository.model";
import { ProductoModel } from "../../model/repositories/producto.repository.model";
import { Component } from "@angular/core";

@Component({
    selector: "modal-formCa",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls: ["form.component.scss"]
})
export class FormComponent {



    constructor(private model: CategoriaModel) {

    }


}
