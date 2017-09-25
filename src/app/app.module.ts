import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {RouterModule} from "@angular/router";
import { SearchComponent } from './components/search/search.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { WorkersComponent } from './components/workers/workers.component';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {CORSInterceptor} from "./utils/cors-interceptor";
import { AddItemComponent } from './components/add-item/add-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    RegisterFormComponent,
    SearchComponent,
    DataGridComponent,
    WorkersComponent,
    AuthComponent,
    AddItemComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'items', component: ItemsComponent},
      {path: 'register-form', component: RegisterFormComponent},
      {path: 'workers', component: WorkersComponent}
    ])
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CORSInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
