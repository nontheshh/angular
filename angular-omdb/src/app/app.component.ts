import { Component , Input} from '@angular/core';
import {Router} from '@angular/router';

export interface OmdbSearchData{
  s: string;
  type: string;
  page: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router
  ){}

  searchData: OmdbSearchData = {
    s: '',
    type: 'movie',
    page: '1'
  };

  handleTypeSelect(e) :void{
    this.searchData.type = e.target.value;
  }

  onSearch() : void{
   this.router.navigate(['omdb'],{queryParams: {...this.searchData}});
  }
}
