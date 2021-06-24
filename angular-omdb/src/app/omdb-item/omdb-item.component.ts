import { Component, OnInit, Input } from '@angular/core';
import {OmdbService} from '../omdb.service';

export interface Rating{
  Source: string;
  Value: string;
}

export interface IOmdbItemDetails{
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  Imdbrating: string;
  ImdbVotes: string;
  ImdbId: string;
  Dvd: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

export interface IOmdbItem{
  Title: string;
  Poster: string;
  Type: string;
  Response: string;
  details: IOmdbItemDetails;
}

@Component({
  selector: 'app-omdb-item',
  templateUrl: './omdb-item.component.html',
  styleUrls: ['./omdb-item.component.css']
})
export class OmdbItemComponent implements OnInit {
  detailsAreShowed : boolean = false;
  @Input() omdbItem;

  constructor(private omdbService : OmdbService) { }
  ngOnInit(): void {}

  moreDetails(omdbItemId : string) : void{
    this.detailsAreShowed = true;
    if (this.omdbItem.details) return;

    this.omdbService.getItemDetails(omdbItemId)
      .subscribe((data : IOmdbItemDetails) => {
        this.omdbItem.details = data;
      });
  }

  lessDetails() :void{
    this.detailsAreShowed = false;
  }
}
