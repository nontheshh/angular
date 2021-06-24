import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OmdbSearchData } from '../app.component';
import {OmdbItemComponent, IOmdbItem} from '../omdb-item/omdb-item.component';
import {OmdbService, OmdbResponseData} from '../omdb.service';

@Component({
  selector: 'app-omdb-item-list',
  templateUrl: './omdb-item-list.component.html',
  styleUrls: ['./omdb-item-list.component.css']
})
export class OmdbItemListComponent implements OnInit {
  responseData: OmdbResponseData;
  currentSearchData: OmdbSearchData;

  constructor(
    private omdbService: OmdbService,
    private activatedRoute: ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(
        (searchData : OmdbSearchData ) => {
          this.currentSearchData = searchData;
          this.omdbService.getItems(searchData)
          .subscribe((data : OmdbResponseData) => {
              this.responseData = data;
            })
      });
  }

  goToPage(newpage : number) :void{
    const newSearchData : OmdbSearchData = {
      s: this.currentSearchData.s,
      type: this.currentSearchData.type,
      page: newpage.toString()
    }
    this.router.navigate(['/omdb'],{queryParams: {...newSearchData}});
  }
}
