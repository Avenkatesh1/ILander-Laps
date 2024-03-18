import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ProductsComponent } from './Pages/products/products.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/Home",
    pathMatch:"full"
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"About",
    component:AboutComponent
  },
  {
    path:"Products",
    component:ProductsComponent
  },
  {
    path:"Admin",
    component:AdminComponent
  },
  {
    path:"Contact",
    component:ContactComponent
  },
  {
    path:"Register",
    component:RegisterComponent
  },
  {
    path:"Login",
    component:LoginComponent
  },
  {
    path:"Blog",
    component:BlogComponent
  },
  {
    path:"Dashboard",
    component:DashboardComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
