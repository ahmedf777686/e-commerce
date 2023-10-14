import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbaroneComponent } from './components/navbarone/navbarone.component';
import { NavbartwoComponent } from './components/navbartwo/navbartwo.component';
import { NotfountComponent } from './components/notfound/notfount.component';
import { AuthLayoutsComponent } from './layouts/auth-layouts/auth-layouts.component';
import { BlankLayoutsComponent } from './layouts/blank-layouts/blank-layouts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PipeonePipe } from './pipeone.pipe';
import { DetailsComponent } from './components/details/details.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './payment/payment.component';

import { AllordComponent } from './components/allord/allord.component';
import { SearchPipe } from './search.pipe';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SendcodeComponent } from './components/sendcode/sendcode.component';
import { UpdatapaswordComponent } from './components/updatapasword/updatapasword.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LoadingInterceptor } from './loading.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbaroneComponent,
    NavbartwoComponent,
    NotfountComponent,
    AuthLayoutsComponent,
    BlankLayoutsComponent,
  
    PipeonePipe,
        DetailsComponent,
        SliderComponent,
        PaymentComponent,
      
        AllordComponent,
               SearchPipe,
               ForgotpasswordComponent,
               SendcodeComponent,
               UpdatapaswordComponent,
               WishlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,     
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
