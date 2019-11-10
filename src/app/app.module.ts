//This page is the modules used throughout my website. I had to declare everything below-
//components, modules, and providers and then import in the respective libraries.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'; 
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { DataRepositoryService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ShopComponent } from './views/shop/shop.component';
import { NewsletterComponent } from './views/newsletter/newsletter.component';
import { IAppState, rootReducer, InitialState } from './store/store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { AppService } from './service/app.service';
import { AppGuard } from './guards/app.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    ProductDisplayComponent,
    AboutMeComponent,
    ShopComponent,
    NewsletterComponent,
    ShoppingCartComponent,
    RegistrationComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    NgReduxModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    LightboxModule
  ],
  providers: [
    AppGuard,
    AppService,
    DataRepositoryService,
    AngularFirestore,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public ngRedux: NgRedux<IAppState>){
    let logger = [createLogger()];
    ngRedux.configureStore(rootReducer, InitialState, logger);
  }
}
