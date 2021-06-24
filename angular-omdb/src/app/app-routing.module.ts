import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OmdbItemListComponent} from './omdb-item-list/omdb-item-list.component';

const routes: Routes = [
  {path: 'omdb', component: OmdbItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
