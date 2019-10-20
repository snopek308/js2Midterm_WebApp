import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ErrorComponent } from './views/error/error.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { NewsletterComponent } from './views/newsletter/newsletter.component';
import { ShopComponent } from './views/shop/shop.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'shop', component: ShopComponent},


  //
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
