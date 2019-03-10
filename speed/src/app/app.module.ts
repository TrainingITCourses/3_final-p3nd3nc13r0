import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorContainerComponent } from './app-buscador-container.component';
import { BusquedaCriteriosPresenterComponent } from './busqueda-criterios-presenter';
import { ResultadoBusquedaPresenterComponent } from './resultado-busqueda-presenter';
import { ContadorPresenterComponent } from './contador-presenter.component';

import { BuscadorService } from './store/buscador.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TipoEffects } from './store/tipo/tipo.effects';
import { StatusEffects } from './store/status/status.effect';
import { LaunchEffects } from './store/launch/launch.effects';
import { AgenciaEffects } from './store/agencia/agencia.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EncabezadoPresenterComponent } from './encabezado-presenter.component';
import { StatusesPresenterComponent } from './statuses-presenter.component';
import { LaunchDetailPresenterComponent } from './launch-detail-presenter.component';
import { LaunchesPresenterComponent } from './launches-presenter.component';
import { BotoneraLanzamientosPresenterComponent } from './botonera-lanzamientos-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorContainerComponent,
    BusquedaCriteriosPresenterComponent,
    ResultadoBusquedaPresenterComponent,
    ContadorPresenterComponent,
    EncabezadoPresenterComponent,
    StatusesPresenterComponent,
    LaunchDetailPresenterComponent,
    LaunchesPresenterComponent,
    BotoneraLanzamientosPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, StatusEffects, TipoEffects, AgenciaEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BuscadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
