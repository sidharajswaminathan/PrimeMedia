import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Config} from './config';
@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {
  APIurl: any = '';

  getConfig(url): Observable<Config> {
    // now returns an Observable of Config
    this.APIurl = 'https://www.advancepublishing-testing.com/sommer_learning/index.php?option=com_sommer&task=' + url;
    console.log(url);
    return this.http.get<Config>(this.APIurl);
  }
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.APIurl, { observe: 'response' });
  }
  constructor(private http: HttpClient) { }
}
