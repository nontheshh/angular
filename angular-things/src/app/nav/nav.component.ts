import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchtext :string;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  inputHandler(event){
    this.searchtext = event.target.value;
  }

  buttonHandler(event){
    this.router.navigate(['search-result/'],
      {queryParams: {'search' :this.searchtext}});
  }
}
