import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
]); // register FullCalendar plugins

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AppModule { }
