import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prime-modal',
  templateUrl: './prime-modal.component.html'
})
export class PrimeModalComponent implements OnInit {
  @Input() name;
  showAdd: boolean = false;
  closeResult: string;
  checkData: Array<any>;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {

    this.checkData = [{'name':'check1', 'id':'check1'},
    {'name':'check2', 'id':'check2'},
    {'name':'check3', 'id':'check3'},
    {'name':'check4', 'id':'check4'},
    {'name':'check5', 'id':'check5'},
    {'name':'check6', 'id':'check6'}];

 }


}
