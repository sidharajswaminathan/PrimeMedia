import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() shareData: any;
  routUrl: Array<any> = ['/searchresults'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  searchInput(event) {
    if ( event.keyCode === 13) {
      this.routUrl = ['/searchresults'];
      this.router.navigate(this.routUrl);
    }
  }

  searchResult(event) {
    var searchVal = $('#search').val().length;
    if ( searchVal > 0 ) {
      this.routUrl = ['/searchresults'];
      this.router.navigate(this.routUrl);
    }else {
      this.routUrl = ['/home'];
      this.router.navigate(this.routUrl);
    }
  }

}
