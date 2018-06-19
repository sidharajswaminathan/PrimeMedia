import { Injectable } from '@angular/core';
import { sharedValues } from './usertype';
@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  globalObj: sharedValues = {'showBanner': false};
  constructor() { }
}
