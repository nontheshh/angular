import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ThingComponent} from './thing/thing.component';
import {LayoutComponent} from './layout/layout.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SearchResultComponent} from './search-result/search-result.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'smallest-things', component: LayoutComponent,
  children: [
    { path: ':id',
    component: ThingComponent,
    pathMatch: 'full',
    data: {name: 'smallest'}
  }]},
  {path: 'largest-things', component: LayoutComponent,
  children: [
    { path: ':id',
    component: ThingComponent,
    pathMatch: 'full',
    data: {name: 'largests'}
  }]},
  {path: 'search-result', component: SearchResultComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
