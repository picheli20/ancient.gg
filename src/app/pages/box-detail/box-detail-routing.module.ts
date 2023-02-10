import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoxDetailComponent } from './components/box-detail.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BoxDetailComponent,
    data: {
      transparentHeader: true,
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxDetailRoutingModule {}
