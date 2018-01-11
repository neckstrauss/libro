import {Component, OnInit, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
  selector: 'tabla-generica',
  styleUrls: ['./tabla-generica.component.scss'],  
  templateUrl: './tabla-generica.component.html'
})
export class TablaGenericaComponent {

  @Input('titulo') titulo = 'defaultTitle';
  @Input('nombreModal') nombreModal = '#exampleModal';
  @Input('click-crear') clickCrear(){};
  @Input('click-actualizar') clickActualizar(){};
  @Input('model') model: any[] = [];
  
   @ContentChild(TemplateRef) public filaTmpl: TemplateRef<Element>;
  
  key: string = 'name'; //set default  
  reverse: boolean = false;
  
  public productsPerPage = 15;
  public selectedPage = 1;
  
  

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
  }
  
  
}