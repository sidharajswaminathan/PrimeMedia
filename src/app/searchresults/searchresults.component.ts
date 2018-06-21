import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../service-call.service';
import {Config} from '../config';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  sub: any;
  constructor(private loaclCall: ServiceCallService) { }
  arrBooks: any = [];

  ngOnInit() {
    this.loaclCall.localService('book-list.json').subscribe((data: any) => {
      this.arrBooks = data.searchResults;
       console.log(this.arrBooks);
    });
  }

}
