
import { CategoriesComponent } from './components/categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NotfountComponent } from './components/notfound/notfount.component';
import { BlankLayoutsComponent } from './layouts/blank-layouts/blank-layouts.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { PaymentComponent } from './payment/payment.component';
import { AllordComponent } from './components/allord/allord.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SendcodeComponent } from './components/sendcode/sendcode.component';
import { UpdatapaswordComponent } from './components/updatapasword/updatapasword.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';




const routes: Routes = [

  {path:'',component:BlankLayoutsComponent,children:[
    
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'cart', canActivate:[authGuard],component:CartComponent},
  {path:'details/:id', canActivate:[authGuard],component:DetailsComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent},

  {path:'allorders',canActivate:[authGuard],component:AllordComponent},
 

  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'payment/:id',canActivate:[authGuard],component:PaymentComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  ]},
{path:'',component:AuthLayoutsComponent,children:[
  {path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
  {path:'forgetpasaword',component:ForgotpasswordComponent},
{path:'code',component:SendcodeComponent},
{path:'update',component:UpdatapaswordComponent},
]},

{path:'**',component:NotfountComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
