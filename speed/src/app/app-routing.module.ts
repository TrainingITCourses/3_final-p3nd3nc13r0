import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusesPresenterComponent } from './statuses-presenter.component';
import { LaunchDetailPresenterComponent } from './launch-detail-presenter.component';
import { LaunchesPresenterComponent } from './launches-presenter.component';
import { BuscadorContainerComponent } from './app-buscador-container.component';

const routes: Routes = [
   { path: '', component: StatusesPresenterComponent },
   { path: 'launches/:id', component: LaunchesPresenterComponent },
   { path: 'launch/:id', component: LaunchDetailPresenterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
