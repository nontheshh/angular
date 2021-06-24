import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { OmdbItemComponent } from './omdb-item/omdb-item.component';
import { OmdbItemListComponent } from './omdb-item-list/omdb-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OmdbItemComponent,
    OmdbItemListComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
