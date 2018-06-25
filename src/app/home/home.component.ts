import { Component, OnInit } from '@angular/core';
import { carouselData } from '../mock-appdata';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';
import {SharedserviceService} from '../sharedservice.service';
import {Router} from '@angular/router';
import {LocalstorageService} from '../localstorage.service';
import { _ } from 'underscore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: Config;
  contentData: any;
  routUrl: Array<any> = ['/productlist'];
  constructor(
          private serviceCall: ServiceCallService,
          private sharedObj: SharedserviceService,
          private router: Router,
          private localstorage: LocalstorageService) {
    this.sharedObj.globalObj.showBreadcrumb = false;
  }
  data: any = JSON.stringify(carouselData);

  ngOnInit() {
    this.serviceCall.getConfig('medialibv2.productcategories')
      .subscribe((data: Config) => {
        this.sharedObj.globalObj.headerTabdata = data['data'];
        this.config = data['data'];
        this.contentData = this.sharedObj.globalObj.headerTabdata;
        this.localstorage.removeLocaldata('currentCategory');
        this.resetCols();
      });
  }

  /*Funtion to reset the collection property*/
  resetCols() {
    const localRefTothis = this;
    _.each(this.contentData.mediaType, function(item) {
      item.isSelected = false;
      if ((localRefTothis.localstorage.getLocaldata('currentCategory') && localRefTothis.localstorage.getLocaldata('currentCategory').toLocaleLowerCase()) === item.name.toLocaleLowerCase()) {
        item.isSelected =  true;
      }
    });
    console.log(this.sharedObj.globalObj.headerTabdata['mediaType'],  '  -> check the header data   ' , this.contentData);
  }

  headerNavigation(headerItem) {
    /*[routerLink]="['/productlist']" [queryParams]="{ id: cnt.id}";*/
    if (headerItem.name === 'Number success') {
      window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');
    } else {
      this.router.navigate(this.routUrl, {queryParams: {id: headerItem.id}});
      this.localstorage.setLocaldata('currentCategory', headerItem.name);
      this.resetCols();
    }
  }
}
