import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false, // initial value
    selectable: true,
    dateClick: this.handleDateClickEvent.bind(this),
    events: [
      {
        title: 'Event Now',
        start: '2022-07-15',
        end: '2022-07-16'
      }
    ]
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  addEvent(dateStr: any) {
    if (this.calendarOptions?.events) {
      (this.calendarOptions.events as any).push({
        title: 'New Event',
        start: dateStr,
        end: dateStr
      })
    }
  }

  handleDateClickEvent (event: any) {
    this.addEvent(event.dateStr);
    console.log(event);
  }
}
