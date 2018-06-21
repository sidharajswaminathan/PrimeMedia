import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PrimeModalComponent } from '../prime-modal/prime-modal.component';
import {SharedserviceService} from '../sharedservice.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductdetailsComponent implements OnInit {
  showModal: Boolean = false;
  closeResult: string;
  constructor(private sharedObj: SharedserviceService, private modalService: NgbModal) {
    this.sharedObj.globalObj.breadcrumbList = [
      {'url': '/home', 'statename': 'Home'},
      {'url': '/productdetails', 'statename': 'ProductDetails'}
    ];
    this.sharedObj.globalObj.showBreadcrumb = true;
  }
  openVerticallyCentered() {
    this.showModal = true;
    const modalRef = this.modalService.open(PrimeModalComponent);
    modalRef.componentInstance.name = 'World';
  }
ngOnInit() {
  }
}
