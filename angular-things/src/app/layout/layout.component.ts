import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ThingComponent, Thing} from '../thing/thing.component';
import {ThingService} from '../thing.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  things: Thing[];

  constructor(
    private activateRoute: ActivatedRoute,
    private thingService: ThingService) {}

  ngOnInit(): void {
    let type = this.activateRoute.snapshot.routeConfig.path;
    this.things = this.thingService.getThings().filter(
          t => t.typeUrl == type
        );
  }
}
