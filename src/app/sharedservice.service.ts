import {Injectable, OnInit} from '@angular/core';
import {breadCrumbObj, sharedValues, Bookdetail} from './usertype';
import { LocalstorageService } from './localstorage.service';
import { _ } from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  globalObj: sharedValues = {'showBanner': true, 'breadcrumbList': [] , 'showBreadcrumb': false, 'searchTxt': '', 'headerTabdata': []};
  constructor(private localstorage: LocalstorageService) { }

  /*Funtion to reset the collection property*/
  resetTabs(tabCollection, isReset) {
      const localRefTothis = this;
      _.each(tabCollection.mediaType, function(item) {
        item.isSelected = false;
        if (!isReset) {
          if ((localRefTothis.localstorage.getLocaldata('currentCategory') && localRefTothis.localstorage.getLocaldata('currentCategory').toLocaleLowerCase()) === item.name.toLocaleLowerCase()) {
            item.isSelected = true;
          }
        }
      });
      console.log(this.globalObj.headerTabdata['mediaType'],  '  -> check the header data   ' , tabCollection.mediaType);
    }
}
