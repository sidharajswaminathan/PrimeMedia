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
<<<<<<< Updated upstream
import { UsercollectionsComponent } from './usercollections/usercollections.component';
=======
import { ProductdetailPageComponent } from './productdetail-page/productdetail-page.component';
>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< Updated upstream
    CarouselComponent,
    UsercollectionsComponent
=======
    HomePageComponent,
    CarouselComponent,
    ProductdetailPageComponent
>>>>>>> Stashed changes
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
