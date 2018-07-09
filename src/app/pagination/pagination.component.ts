import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() Shareddata;
  @Output() pageNation: EventEmitter<any>;
  page = 1;

  constructor() { }
pageChange() {

  }
  ngOnInit() {
    console.log(this.Shareddata, 'data');
  }

}
