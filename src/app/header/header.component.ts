import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedserviceService} from '../sharedservice.service';
import {LocalstorageService} from '../localstorage.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() shareData: any;
  routUrl: Array<any> = ['/searchresults'];
  searchText: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedObj: SharedserviceService,
    private localstorage: LocalstorageService
  ) { }

  ngOnInit() {
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
      this.sharedObj.globalObj.searchTxt = this.searchText;
      this.localstorage.setLocaldata('searchTxt', this.searchText);
      this.routUrl = ['/searchresults'];
      this.router.navigate(this.routUrl);
    }
  }

}
