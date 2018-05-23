import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverStandingsComponent } from './components/driver-standings/driver-standings.component';
import { HomeComponent } from './components/home/home.component';
import { ConstructorStandingsComponent } from './components/constructor-standings/constructor-standings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';

import { QueryService } from './services/query.service';

import {
  MatToolbarModule,
   MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule,
   MatCardModule,
   MatTableModule,
   MatFormFieldModule,
   MatInputModule,
   MatOptionModule,
   MatSelectModule,
} from '@angular/material';
import { CustomComponent } from './components/custom/custom.component';

export function startupServiceFactory(query: QueryService): Function {
  return () => query.load();
}

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    DriverStandingsComponent,
    HomeComponent,
    ConstructorStandingsComponent,
    NavbarComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [ QueryService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [QueryService],
        multi: true
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
