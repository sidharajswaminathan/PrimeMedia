import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceCallService} from '../service-call.service';
import { _ } from 'underscore';
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
  collectionIds: any = [];
  constructor(public activeModal: NgbActiveModal, private serviceCall: ServiceCallService) {
  }

  ngOnInit() {
    console.log(this.name);
    this.serviceCall.getConfig('medialibv2.getMyCollections').subscribe((data: CollectionList) => {
      console.log(data);
      this.checkData = data.data.collections;
    });

 }


 saveCollection() {
    console.log('lew')
    this.serviceCall.postMethod('medialibv2.addCollection', { name: this.colName}).subscribe((data: CollectionList) => {
      this.checkData = data.data.collections;
    });
     this.checkData.push({'name': this.colName, 'id': this.colName });
     this.showAdd = false;
     localStorage.setItem('this.currentUser', this.checkData);
 }
  addCollection(id) {
  if (this.collectionIds.length > 0) {
      this.serviceCall.postMethod('medialibv2.addCollectionItems', {
        'collection': this.collectionIds,
        'bookDetails': {'name': 'ebook1', 'id': this.name, 'img': 'program1'}
      }).subscribe((data: CollectionList) => {
        this.checkData = data.data.collections;
      });
     this.activeModal.close('Close click');
  }
  }
  checkboxChecked(event) {
    if (event.target.checked) {
        this.collectionIds.push(event.target.id);
        console.log(this.collectionIds);
    } else {
      this.collectionIds = _.without(this.collectionIds, event.target.id)
      console.log(this.collectionIds);
    }
  }
}


