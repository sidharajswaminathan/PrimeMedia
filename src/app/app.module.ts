import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { UsercollectionsComponent } from './usercollections/usercollections.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { DraggingslideComponent } from './draggingslide/draggingslide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ProdDetailsComponent,
    CarouselComponent,
    UsercollectionsComponent,
    CarouselComponent,
    ProductdetailsComponent,
    DraggingslideComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
