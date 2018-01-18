import { Component } from "@angular/core";
import { ProductoModel } from '../../model/repositories/producto.repository.model';
import { ExcelService } from "../producto/excel.service";
import { CategoriaModel } from "../../model/repositories/categoria.repository.model";


@Component({
    selector: "caTable",
    moduleId: module.id,
    templateUrl: "table.component.html",
    styleUrls: ['table.component.scss']
})
export class TableComponent {

    constructor(private model: CategoriaModel) {
    }
    columnas: any[] = [{ nombre: '#' },
    { nombre: 'ID', key: 'id' },
    { nombre: 'Nombre', key: 'name' },
    { nombre: '' }
    ];

}