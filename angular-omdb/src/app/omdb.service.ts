import { Injectable } from '@angular/core';
import {HttpClient, HttpParams}  from '@angular/common/http';
import { Observable } from 'rxjs';

import {IOmdbItem, IOmdbItemDetails, } from './omdb-item/omdb-item.component';
import {OmdbSearchData} from './app.component';

export interface OmdbResponseData{
  Response: string;
  Search: IOmdbItem[];
  totalResults: string;
  Error: string;
}

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  readonly url: string = 'https://www.omdbapi.com';
  readonly apikey: string = '32cd6fc';

  constructor(private httpClient: HttpClient){}

  getItems(searchData : OmdbSearchData) : Observable<OmdbResponseData>{
    let params = new HttpParams()
      .set('apikey', this.apikey);

    for (const key in searchData) {
      if (searchData.hasOwnProperty(key)) {
        params = params.set(key, searchData[key]);
      }
    }

    return this.httpClient.get<OmdbResponseData>(this.url, {params});
  }

  getItemDetails(omdbItemId : string) : Observable<IOmdbItemDetails>{
    let params = new HttpParams()
      .set('apikey', this.apikey)
      .set('i', omdbItemId)
      .set('plot', 'full');

    return this.httpClient.get<IOmdbItemDetails>(this.url, {params});
  }
}
