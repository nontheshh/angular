import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Thing} from '../thing/thing.component';
import {ThingService} from '../thing.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
things :Thing[];
searchtext :string;
  constructor(private activatedRoute: ActivatedRoute,
  private thingService: ThingService) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
        this.searchtext = params['search'];

        this.things = this.thingService.getThings().filter(
          t => t.name.toLowerCase().indexOf(this.searchtext.toLowerCase()) != -1
        );
    });
  }
}
