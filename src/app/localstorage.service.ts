import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setLocaldata( key, val ) {
    localStorage.setItem( key, val );
  }
  getLocaldata(key) {
    return localStorage.getItem(key);
  }
  removeLocaldata(key) {
    return localStorage.removeItem(key);
  }


}
