import {Component, DoCheck, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PrimeModalComponent } from '../prime-modal/prime-modal.component';
import {SharedserviceService} from '../sharedservice.service';
import { LocalstorageService } from '../localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductdetailsComponent implements OnInit, OnDestroy {
  showModal: Boolean = false;
  closeResult: string;
  prodDetailLabel: string;
  sub: any;
  curId: any;
  constructor(private sharedObj: SharedserviceService,
              private modalService: NgbModal,
              private localstorage: LocalstorageService,
              private route: ActivatedRoute,
              private router: Router) {
    console.log(this.localstorage.getLocaldata('catId'))
    this.sharedObj.globalObj.breadcrumbList = [
      {'url': '/home', 'statename': 'Home', 'param': ''},
      {'url': '/productlist', 'statename': 'ProductList', 'param': this.localstorage.getLocaldata('catId')},
      {'url': '/productdetails', 'statename': 'ProductDetails', 'param': ''}
    ];
    this.sharedObj.globalObj.showBreadcrumb = true;
  }
  openVerticallyCentered() {
    this.showModal = true;
    const modalRef = this.modalService.open(PrimeModalComponent);
    modalRef.componentInstance.name = this.curId;
  }
  ngOnInit() {
    const prodDetail: any = this.localstorage.getLocaldata('prodDetail') && JSON.parse(this.localstorage.getLocaldata('prodDetail'))
    console.log(prodDetail);

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.curId = params['id'];
      });
    if (prodDetail && prodDetail.is_active) {
      if (prodDetail.is_premium) {
        this.prodDetailLabel = 'Buy Now';
      } else {
        if (!prodDetail.is_premium && !prodDetail.is_featured) {
          this.prodDetailLabel = 'Explore Now';
        } else if (!prodDetail.is_premium && prodDetail.is_featured) {
          this.prodDetailLabel = 'Register Now';
        }
      }
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
