import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { SayLightComponent } from './components/say-light/say-light.component';
import { SayDynamicBoldComponent } from './components/say-dynamic-bold/say-dynamic-bold.component';


import { AppComponent } from './app.component';

const myRoutes : Routes = [
  { path : 'main' , component : AppComponent },
  {path : '', redirectTo: '/auth', pathMatch: 'full'},
  { path : 'saylight' , component : SayLightComponent },
  { path : 'saydynamic/:id' , component : SayDynamicBoldComponent },

  {path : '**', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SayLightComponent,
    SayDynamicBoldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
