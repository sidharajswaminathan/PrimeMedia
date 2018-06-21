import { Component, OnInit } from '@angular/core';
import { productAllInfo } from '../mock-appdata';
@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.scss']
})
export class ProdDetailsComponent implements OnInit {
  prodList = productAllInfo;
  constructor() { }

  ngOnInit() {
  }

}
