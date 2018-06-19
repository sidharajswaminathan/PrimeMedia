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
import { PaginationComponent } from './pagination/pagination.component';
import { UsercollectionsComponent } from './usercollections/usercollections.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { MycollectionsComponent } from './mycollections/mycollections.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    UsercollectionsComponent,
    HttprequestComponent,
    MycollectionsComponent,
    ProdDetailsComponent,
    PaginationComponent,
    CarouselComponent,
    UsercollectionsComponent,
    CarouselComponent,
    ProductdetailsComponent,
    BreadcrumbComponent
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
