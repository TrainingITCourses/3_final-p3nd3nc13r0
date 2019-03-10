import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusesPresenterComponent } from './statuses-presenter.component';

const routes: Routes = [
  {
    path: '',
    component: StatusesPresenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusesRoutingModule {}
