import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-item/product-item.component';
import { PersonsComponent } from './persons/persons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderFormComponent } from './order-form/order-form.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { EditProductComponent } from './edit-product/edit-product.component';



const routes: Routes = [
  {path:'order',component:OrderComponent},
  {path:'product-item',component:ProductComponent},
  {path:'persons',component:PersonsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    ProductComponent,
    PersonsComponent,
    EditOrdersComponent,
    OrderFormComponent,
    EditPersonComponent,
    EditProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CommonModule,
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [OrderFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
