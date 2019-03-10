import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusesPresenterComponent } from './statuses-presenter.component';
import { LaunchDetailPresenterComponent } from './launch-detail-presenter.component';
import { LaunchesPresenterComponent } from './launches-presenter.component';
import { BuscadorContainerComponent } from './app-buscador-container.component';
import { LaunchModule } from './launch/launch.module';

const routes: Routes = [
 // { path: '', component: BuscadorContainerComponent },
   { path: '', component: StatusesPresenterComponent },
  /* { path: 'launches/:id', component: LaunchesPresenterComponent },
  {
    path: 'launches/:id/launch/:id',
    loadChildren: './launch/launch.module#LaunchModule'
  }, */
  { path: 'launches/:id', component: LaunchesPresenterComponent,
    children: [
      { path: 'launches/:id', component: LaunchDetailPresenterComponent}
    ]
  },
  //{ path: 'launchdetail/:id', component: LaunchDetailPresenterComponent }
  //,
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
