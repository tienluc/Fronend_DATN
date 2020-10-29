import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//////////////////////////////Admin////////////////////////////////////
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { TablesComponent } from './Admin/tables/tables.component';
import { FormsComponent } from './Admin/forms/forms.component';
import { TypographyComponent } from './Admin/typography/typography.component';
import { MapsComponent } from './Admin/maps/maps.component';
import { NotificationsComponent } from './Admin/notifications/notifications.component';
import { StaffComponent } from './Admin/staff/staff.component';
import { AddStaffComponent } from './Admin/add-staff/add-staff.component';
import { UpdateStaffComponent } from './Admin/update-staff/update-staff.component';
import { CustomerManagerComponent } from './Admin/customer-manager/customer-manager.component';
import { CarManagerComponent } from './Admin/car-manager/car-manager.component';
import { CarAddComponent } from './Admin/car-add/car-add.component';
import { CarUpdateComponent } from './Admin/car-update/car-update.component';
import { BrandManagerComponent } from './Admin/brand-manager/brand-manager.component';
import { BrandAddComponent } from './Admin/brand-add/brand-add.component';
import { BrandUpdateComponent } from './Admin/brand-update/brand-update.component';
import { FeatureManagerComponent } from './Admin/feature-manager/feature-manager.component';
import { FeatureAddComponent } from './Admin/feature-add/feature-add.component';
import { FeatureUpdateComponent } from './Admin/feature-update/feature-update.component';
import { ModelManagerComponent } from './Admin/model-manager/model-manager.component';
import { ModelAddComponent } from './Admin/model-add/model-add.component';
import { ModelUpdateComponent } from './Admin/model-update/model-update.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';

//////////////////////////////////Log-In & Sign-Up////////////////////////////////
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { RegisterAdminComponent } from './Admin/register-admin/register-admin.component';

////////////////////////////////////Client/////////////////////////////////////////
import { IndexClientComponent } from './Client/index-client/index-client.component';
import { HomeComponent } from './Client/home/home.component';
import { AboutComponent } from './Client/about/about.component';
import { BlogComponent } from './Client/blog/blog.component';
import { BlogDetailComponent } from './Client/blog-detail/blog-detail.component';
import { CarComponent } from './Client/car/car.component';
import { CarDetailComponent } from './Client/car-detail/car-detail.component';
import { ContactComponent } from './Client/contact/contact.component';
import { InformationComponent } from './Client/information/information.component';
import { ServicesComponent } from './Client/services/services.component';



const routes: Routes = [
////////////////////////Log-In & Sign-Up////////////////////////////////

  {path: 'CarRental',   redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginAdminComponent},
  {path: 'register', component: RegisterAdminComponent},

//////////////////////////////Admin////////////////////////////////////
  {path: 'admin',   redirectTo: 'indexAdmin', pathMatch: 'full'},
  {path: 'indexAdmin', component: IndexAdminComponent, children:[
  {path: '',   redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'staffmanager', component: StaffComponent},
  {path: 'addstaff', component: AddStaffComponent},
  {path: 'updatestaff', component: UpdateStaffComponent},
  {path: 'customermanager', component: CustomerManagerComponent},
  {path: 'carmanager', component: CarManagerComponent},
  {path: 'caradd', component: CarAddComponent},
  {path: 'carupdate', component: CarUpdateComponent},
  {path: 'brandmanager', component: BrandManagerComponent, children:[
        {path: 'brandadd', component: BrandAddComponent},
        {path: 'brandupdate', component: BrandUpdateComponent},
      ]},
  {path: 'featuremanager', component: FeatureManagerComponent, children:[
        {path: 'featureadd', component: FeatureAddComponent},
        {path: 'featureupdate', component: FeatureUpdateComponent},
      ]},
  {path: 'modelmanager', component: ModelManagerComponent, children:[
        {path: 'modeladd', component: ModelAddComponent},
        {path: 'modelupdate', component: ModelUpdateComponent},
      ]},
  ]},
  
//////////////////////////////Client////////////////////////////////
  {path: 'client',   redirectTo: 'indexClient', pathMatch: 'full'},
  {path: 'indexClient', component: IndexClientComponent, children:[
  {path: '',   redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blogdetail', component: BlogDetailComponent},
  {path: 'car', component: CarComponent},
  {path: 'detail', component: CarDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'information', component: InformationComponent},
  {path: 'services', component: ServicesComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
