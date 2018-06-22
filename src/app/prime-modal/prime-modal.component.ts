import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceCallService} from '../service-call.service';
import { CollectionList} from '../usertype';

@Component({
  selector: 'app-prime-modal',
  templateUrl: './prime-modal.component.html'
})
export class PrimeModalComponent implements OnInit {
  @Input() name;
   showAdd: boolean = false;
  collectName: string;
  closeResult: string;
  colDAta: string;
  checkData: any;
  currentUser: Array<any>;
  colName: any;
  constructor(public activeModal: NgbActiveModal, private serviceCall: ServiceCallService) {
  }

  ngOnInit() {
  this.serviceCall.getConfig('medialibv2.getMyCollections').subscribe((data: CollectionList) => {
    console.log(data);
    this.checkData = data.data.collections;
  });

 }

 saveCollection() {
     this.checkData.push({'name': this.colName, 'id': this.colName });
     this.showAdd = false;
     localStorage.setItem('this.currentUser', this.checkData);
 }


}
