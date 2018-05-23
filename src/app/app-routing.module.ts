import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { CustomComponent } from './components/custom/custom.component';

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
