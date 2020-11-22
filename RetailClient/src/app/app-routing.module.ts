import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'company',
    component: CompanyComponent
  },
  {
    path:'purchase',
    component: PurchaseComponent
  },
  {
    path:'departments',
    component: DepartmentListComponent
  },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailComponent
  },
  {
    path:'companies',
    component: CompanyListComponent
  },
  { 
    path: 'companies/:id', 
    component: CompanyDetailComponent
  },
  { 
    path: 'purchases/edit/:id', 
    component: EditPurchaseComponent
  }
  //,{ path: '', redirectTo: '/departments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
