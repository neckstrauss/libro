import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { ModelModule } from './model/model.module';
import { routing } from "./app.routing";
import { TermsGuard } from './core/terms.guard';
import { LoadGuard } from './load.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, CoreModule, MessageModule, routing
  ],
  providers: [TermsGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
