import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverStandingsComponent } from './driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './constructor-standings/constructor-standings.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'driverStandings',
    component: DriverStandingsComponent,
  },
  {
    path: 'constructorStandings',
    component: ConstructorStandingsComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
