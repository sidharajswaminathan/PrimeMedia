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
<<<<<<< HEAD
  counter: any = 5;
  constructor(private loaclCall: ServiceCallService) { }
=======
  searchResultTxt: string;
  constructor(private loaclCall: ServiceCallService, private sharedObj: SharedserviceService, private localstorage: LocalstorageService) {
    this.sharedObj.globalObj.breadcrumbList = [{'url': '/home', 'statename': 'Home', 'param': ''}];
    this.sharedObj.globalObj.showBreadcrumb = true;
  }
>>>>>>> 466ab8f4377bc0b86109c8845869e8dbe191d2c3
  arrBooks: any = [];

  ngOnInit() {
    this.loaclCall.localService('book-list.json').subscribe((data: any) => {
      this.arrBooks = data.searchResults;
    });
  }
<<<<<<< HEAD
  loadMore() {
    this.counter = this.counter + 5;

=======
  ngDoCheck() {
    if ( this.sharedObj.globalObj.searchTxt ) {
      this.searchResultTxt =  this.sharedObj.globalObj.searchTxt;
    } else {
      this.searchResultTxt = this.localstorage.getLocaldata('searchTxt' );
      this.sharedObj.globalObj.searchTxt = this.searchResultTxt;
    }
>>>>>>> 466ab8f4377bc0b86109c8845869e8dbe191d2c3
  }

}
