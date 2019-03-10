import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './launch/launch.component';

@NgModule({
  imports: [CommonModule, LaunchRoutingModule],
  declarations: [LaunchComponent]
})
export class LaunchModule {}
