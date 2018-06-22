import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedserviceService} from '../sharedservice.service';
import {LocalstorageService} from '../localstorage.service';
import { ServiceCallService } from '../service-call.service';
import * as $ from 'jquery';
import {Config} from '../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() shareData: any;
  routUrl: Array<any> = ['/productlist'];
  searchText: string;
  contentData: any;
  constructor(
    private serviceCall: ServiceCallService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedObj: SharedserviceService,
    private localstorage: LocalstorageService
  ) { }

  ngOnInit() {
    this.serviceCall.getConfig('medialibv2.productcategories')
      .subscribe((data: Config) => {
        console.log( data['data'] );
        this.contentData = data['data'];
      });
  }

  searchInput(event) {
    if ( event.keyCode === 13) {
      this.routUrl = ['/searchresults'];
      this.router.navigate(this.routUrl);
      this.sharedObj.globalObj.searchTxt = this.searchText;
      this.localstorage.setLocaldata('searchTxt', this.searchText);
    }
  }

  searchResult(event) {
    if ( this.searchText ) {
      this.routUrl = ['/searchresults'];
      this.router.navigate(this.routUrl);
      this.sharedObj.globalObj.searchTxt = this.searchText;
      this.localstorage.setLocaldata('searchTxt', this.searchText);
    }
  }

  headerNavigation(headerItem) {
    /*[routerLink]="['/productlist']" [queryParams]="{ id: cnt.id}";*/
    this.router.navigate(this.routUrl,{ queryParams: { id: headerItem.id } });
    this.localstorage.setLocaldata('currentCategory', headerItem.name);
    if (headerItem.name === 'Number success') {
      window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');
    }
  }
}
