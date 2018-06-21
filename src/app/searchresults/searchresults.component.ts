import {Component, DoCheck, OnInit} from '@angular/core';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';
import {SharedserviceService} from '../sharedservice.service';
import {LocalstorageService} from '../localstorage.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit, DoCheck{
  sub: any;
  searchResultTxt: string;
  constructor(private loaclCall: ServiceCallService, private sharedObj: SharedserviceService, private localstorage: LocalstorageService) {
    this.sharedObj.globalObj.breadcrumbList = [{'url': '/home', 'statename': 'Home', 'param': ''}];
    this.sharedObj.globalObj.showBreadcrumb = true;
  }
  arrBooks: any = [];

  ngOnInit() {
    this.loaclCall.localService('book-list.json').subscribe((data: any) => {
      this.arrBooks = data.searchResults;
       console.log(this.arrBooks);
    });
  }
  ngDoCheck() {
    if ( this.sharedObj.globalObj.searchTxt ) {
      this.searchResultTxt =  this.sharedObj.globalObj.searchTxt;
    } else {
      this.searchResultTxt = this.localstorage.getLocaldata('searchTxt' );
      this.sharedObj.globalObj.searchTxt = this.searchResultTxt;
    }
  }

}
