import {Component, DoCheck, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedserviceService} from '../sharedservice.service';
import {LocalstorageService} from '../localstorage.service';
import { ServiceCallService } from '../service-call.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { _ } from 'underscore';
import {Config} from '../config';
import {PrimeModalComponent} from "../prime-modal/prime-modal.component";
import {LoginModalComponent} from "../login-modal/login-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  @Input() shareData: any;
  showModal: Boolean = false;
  routUrl: Array<any> = ['/productlist'];
  searchText: string;
  contentData: any;
  constructor(
    private serviceCall: ServiceCallService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private sharedObj: SharedserviceService,
    private localstorage: LocalstorageService
  ) { }

  ngOnInit() {
    this.serviceCall.getConfig('medialibv2.productcategories')
      .subscribe((data: Config) => {
        this.sharedObj.globalObj.headerTabdata = data['data'];
        this.contentData = this.sharedObj.globalObj.headerTabdata;
        this.sharedObj.resetTabs(this.contentData,false);
      });
  }
  openVerticallyCentered() {
    this.showModal = true;
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.name = 'login modal';
  }
  ngDoCheck() {
    this.contentData = this.sharedObj.globalObj.headerTabdata;
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
    this.routUrl = ['/productlist'];
    /*[routerLink]="['/productlist']" [queryParams]="{ id: cnt.id}";*/
    if (headerItem.name === 'Number success') {
      window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');
    } else {
      this.router.navigate(this.routUrl, {queryParams: {id: headerItem.id}});
      this.localstorage.setLocaldata('currentCategory', headerItem.name);
      this.sharedObj.resetTabs(this.contentData,false);
      /*headerItem.isSelected = true;*/
    }
  }
}
