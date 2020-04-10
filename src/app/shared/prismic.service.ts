import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
// import {Feed} from './feed';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PrismicService {

   private _getUrl = 'api/prismic/get/all';

  constructor(private _http:HttpClient) { }


  getFeed(type, page): Observable<any> {
    return this._http.get(this._getUrl+'?page='+page+'&type='+type);
  }

  getSingle(type, uid): Observable<any> {
    return this._http.get('api/prismic/get/single?type='+type+'&uid='+uid);
  }

//
// getFeed(type, page): Observable<any> {
//     console.log(type, page)
//    return this._http.get(this._getUrl+'?page='+page+'&type='+type)
//      .map((response: Response)=> <any> response.json())
//      .do(data => console.log("prismic",data))
//      .catch(this.handleError);
//  }

//  getSingle(type, uid): Observable<any> {
//   return this._http.get('api/prismic/get/single?type='+type+'&uid='+uid)
//     .map((response: Response)=> <any> response.json())
//     .do(data => console.log(data))
//     .catch(this.handleError);
// }

 private handleError(error: Response){
  console.log("error", error);
  return Observable.throw(error.json().error || 'Server error');
}

// this.configService.getConfig()
//   .subscribe((data: Config) => this.config = {
//       heroesUrl: data['heroesUrl'],
//       textfile:  data['textfile']
//   });

}
