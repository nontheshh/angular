import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import {ThingService} from '../thing.service';

export interface Thing{
  url: string;
  typeUrl: string;
  name: string;
  about: string;
  imageUrl: string;
}

@Component({
  selector: 'app-thing',
  templateUrl: './thing.component.html',
  styleUrls: ['./thing.component.css']
})
export class ThingComponent implements OnInit {
  url: string;
  typeUrl: string;
  name: string = 'largestthingname';
  about: string = 'about';
  imageUrl: string = 'url';

  constructor(
    private activatedRoute: ActivatedRoute,
    private thingService: ThingService,
    private router : Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.url = params.get('id');

      let thing = this.thingService.getThingByName(this.url);
      if (!thing){
        this.router.navigate(
          [this.router.url, 'notfound'],
          {skipLocationChange:true}
      );
        return;
      }

      this.typeUrl = thing.typeUrl;
      this.name = thing.name;
      this.about = thing.about;
      this.imageUrl = thing.imageUrl;
    });
  }

}
