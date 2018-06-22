import {Component, DoCheck, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PrimeModalComponent } from '../prime-modal/prime-modal.component';
import {SharedserviceService} from '../sharedservice.service';
import { LocalstorageService } from '../localstorage.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductdetailsComponent implements OnInit {
  showModal: Boolean = false;
  closeResult: string;
  prodDetailLabel: string;
  prodDetails: any;
  constructor(private sharedObj: SharedserviceService, private modalService: NgbModal, private localstorage: LocalstorageService ) {
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
    modalRef.componentInstance.name = 'World';
  }
  ngOnInit() {
    this.prodDetails = this.localstorage.getLocaldata('prodDetail') && JSON.parse(this.localstorage.getLocaldata('prodDetail'))
    console.log(this.prodDetails);
    if (this.prodDetails && this.prodDetails.is_active) {
      if (this.prodDetails.is_premium) {
        this.prodDetailLabel = 'Buy Now';
      } else {
        if (!this.prodDetails.is_premium && !this.prodDetails.is_featured) {
          this.prodDetailLabel = 'Explore Now';
        } else if (!this.prodDetails.is_premium && this.prodDetails.is_featured) {
          this.prodDetailLabel = 'Register Now';
        }
      }
    }
  }

  launchPlayer() {
    let mediaurl: any = '';
    const currentCategory: any = this.localstorage.getLocaldata('currentCategory');
    if (currentCategory === 'Sommer time stories') {
      mediaurl = 'http://sommerlearning.com/books/androcles-and-the-lion/';
      window.open(mediaurl);
    } else if (currentCategory === 'Phonics Adventure') {
      if (this.prodDetails.category_name === 'eBooks' && this.prodDetailLabel === 'Explore Now') {
        mediaurl = 'https://www.advancepublishing-dev.com/ereadermedialibrary/#/eReaderPlayer';
        this.localstorage.setLocaldata('coursename', this.prodDetails.coursename);
        this.localstorage.setLocaldata('category_name', this.prodDetails.category_name);
        this.localstorage.setLocaldata('book_url', this.prodDetails.book_url);
        /* this.localstorage.setLocaldata('mediaUserid',this.prodDetails.mediaUserid);*/
        window.open(mediaurl + '/ereadermedialibrary/#/eReaderPlayer');
      } else {
        alert ('This is different type of product');
      }
    } else if (currentCategory === 'Number success') {
        alert('Page needs to be developed');
        /*window.open('https://www.advancepublishing-dev.com/sommer_learning/publicsite/numbersuccess');*/
    }
  }
}
