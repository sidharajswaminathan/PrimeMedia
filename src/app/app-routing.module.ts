import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'productdetails', component: ProductdetailsComponent }

]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
