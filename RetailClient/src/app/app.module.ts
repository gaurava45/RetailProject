import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UsersModule } from './users/users.module';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyComponent } from './company/company.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
import { MyNgbDateParserFormatter } from './myNgbDateParserFormatter'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AdminComponent,
    CompanyComponent,
    PurchaseComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    EditPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  //providers: [{provide: NgbDateParserFormatter, useFactory: () => new MyNgbDateParserFormatter('longDate')}],
  bootstrap: [AppComponent]
})
export class AppModule { }
