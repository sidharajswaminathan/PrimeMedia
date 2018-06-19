import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import { UsercollectionsComponent } from './usercollections/usercollections.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'productdetail', component: ProdDetailsComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'myColection', component: UsercollectionsComponent }
]
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
