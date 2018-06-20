import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prime-modal',
  templateUrl: './prime-modal.component.html'
})
export class PrimeModalComponent {
  @Input() name;
  closeResult: string;
  constructor(public activeModal: NgbActiveModal) {
  }

}
