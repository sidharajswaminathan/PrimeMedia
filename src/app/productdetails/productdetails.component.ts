import {Component, DoCheck, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PrimeModalComponent } from '../prime-modal/prime-modal.component';
import {SharedserviceService} from '../sharedservice.service';
import { LocalstorageService } from '../localstorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';

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
  prodDetails: any;
  sub: any;
  curId: any;
  public repoUrl = 'https://www.advancepublishing-dev.com/ereadermedialibrary/#/eReaderPlayer?url=https://apmedialibrary.s3-accelerate.amazonaws.com/Media%20Library/ebooks/Companion%20Reader/The_Rock_1_1';
  public imageUrl = 'http://apcourseplayer.s3-accelerate.amazonaws.com/phonicadventure/textbook1/images/apple.png';
  loggedIn: any;
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
    this.prodDetails = this.localstorage.getLocaldata('prodDetail') && JSON.parse(this.localstorage.getLocaldata('prodDetail'))
    console.log(this.prodDetails);
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.curId = params['id'];
      });
    this.authenticate();
  }

  authenticatePlayer() {
    if (this.prodDetailLabel === 'Buy Now') {
      if (!this.loggedIn) {
        alert('you have to login first to continue further!');
      } else {
        if (this.prodDetails.is_purchased) {
          this.launchPlayer();
        }
      }
    } else if (this.prodDetailLabel === 'Explore Now' || this.prodDetailLabel === 'Play Now' || this.prodDetailLabel === 'Download Now') {
      this.launchPlayer();
    } else if (this.prodDetailLabel === 'Register Now') {
      if (!this.loggedIn) {
        alert('you have to login first to continue further!');
      } else {
        if (this.prodDetails.is_purchased) {
          this.launchPlayer();
        }
      }
    }
  }

  launchPlayer () {
    let mediaurl: any = '';
    const currentCategory: any = this.localstorage.getLocaldata('currentCategory');
    if (this.prodDetails.book_type.toLocaleLowerCase() === 'ebooks') {
      if (currentCategory === 'Sommer time stories') {
        mediaurl = 'http://sommerlearning.com/books/androcles-and-the-lion/';
        window.open(mediaurl);
      } else {
        mediaurl = 'https://www.advancepublishing-dev.com/ereadermedialibrary/#/eReaderPlayer';
        this.localstorage.setLocaldata('coursename', this.prodDetails.coursename);
        this.localstorage.setLocaldata('category_name', this.prodDetails.category_name);
        this.localstorage.setLocaldata('book_url', this.prodDetails.book_url);
        /* this.localstorage.setLocaldata('mediaUserid',this.prodDetails.mediaUserid);*/
        window.open(mediaurl + '/ereadermedialibrary/#/eReaderPlayer');
      }
    } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'videos' || this.prodDetails.book_type.toLocaleLowerCase() === 'songs') {
      alert('Video/audio player will be launched!');
    } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'worksheets') {
      /*alert('Worksheet will be donwloaded!');*/
      window.open('http://spiglobaltestingbucket.s3.amazonaws.com/Testing/assets/unit1/documents/B10U1P10.pdf');
    } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'games') {
      /*alert('games page will be lauched!');*/
      const gamesObj: any = {
        'activity': {'isPreview': true, 'id': 2},
        'data':
          {
            'name': 'Connect the Dots A-E',
            'isActive': false,
            'url': 'Data to come',
            'scormurl': 'https://www.advancepublishing-dev.com/lms/lms/mod/scorm/player.php?scoid=3972&cm=36',
            'section': 1,
            'lesson': '1B',
            'sectionname': 'Section1AlphabetAtoE',
            'lessonname': 'lesson1',
            'text': 'Data to come',
            'scormstatus': 'not attempted',
            'activityType': 'game',
            'activityid': 2,
            'bookclass': 'text-book1',
            'bookname': 'textbook1',
            'isadded': true,
            'directive': [
              {
                'url': 'connectthedots',
                'json': 'PA_UI/courseJson/JsonFiles/textbook1/Section1AlphabetAtoE/lesson1/connectthedotsgame-ae'
              }
            ],
            'bookLevel': 0,
            'sectLevel': 0,
            'lessLevel': 0,
            '$$hashKey': 'object:32'
          }
      }
      this.localstorage.setLocaldata('mlGames',JSON.stringify(gamesObj));
      window.open('https://www.advancepublishing-dev.com/courseplayer');
    }
  }

  authenticate() {
    if (this.prodDetails && this.prodDetails.is_active) {
      if (this.prodDetails.is_premium) {
        this.prodDetailLabel = 'Buy Now';
      } else {
        if (!this.prodDetails.is_premium && !this.prodDetails.is_featured) {
          if (this.prodDetails.book_type.toLocaleLowerCase() === 'ebooks') {
            this.prodDetailLabel = 'Explore Now';
          } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'videos') {
            this.prodDetailLabel = 'Play Now';
          } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'songs') {
            this.prodDetailLabel = 'Play Now';
          } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'worksheets') {
            this.prodDetailLabel = 'Download Now';
          } else if (this.prodDetails.book_type.toLocaleLowerCase() === 'games') {
            this.prodDetailLabel = 'Play Now';
          } else {
            this.prodDetailLabel = 'Explore Now';
          }
        } else if (!this.prodDetails.is_premium && this.prodDetails.is_featured) {
          this.prodDetailLabel = 'Register Now';
        }
      }
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
