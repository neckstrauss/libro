import { NotFoundComponent } from './notFound.component';
import {NgModule} from "@angular/core";

import { ProductoModule } from './producto/producto.module';
import { SharedState } from "./sharedState.model";
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  //providers: [ SharedState]
 // imports: [ProductoModule],
//  declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
//  exports: [ModelModule, TableComponent, FormComponent],
//  providers: [UnsavedGuard],
  //providers: [{ provide: SHARED_STATE, useValue: new Subject<SharedState>() }]

//  providers: [{
//    provide: SHARED_STATE,
//    deps: [MessageService, Model],
//    useFactory: (messageService, model) => {
//      return new Subject<SharedState>();
////      let subject = new Subject<SharedState>();
////      subject.subscribe(m => messageService.reportMessage(
////        new Message(MODES[m.mode] + (m.id != undefined
////          ? ` ${model.getProduct(m.id).name}` : "")))
////      );
////      return subject;
//    }
//  }]
})
export class CoreModule {}