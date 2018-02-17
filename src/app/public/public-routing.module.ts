import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent,
    children: [
      { path: '',
        children: [
          { path: 'not-found', component: PageNotFoundComponent },
          { path: '**', component: PageNotFoundComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
