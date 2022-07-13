import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {}
  calendarEvents: any[] = [
    {
      title: 'Event Now',
      date: '2022-07-15',
    },
    {
      title: 'Event Later',
      date: '2022-07-21',
    }
  ];
  eventForm: any = {};
  selectedDate = {
    currentDate: new Date(),

  }
  @ViewChild('modalButton', { static: true }) modalButton!: ElementRef;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false, // initial value
    selectable: true,
    dateClick: this.handleDateClickEvent.bind(this),
    events: this.calendarEvents,
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  addEvent(dateStr: any) {
    console.log(dateStr);
    this.calendarEvents.push(
      {
        title: 'New Event',
        date: dateStr,
      }
    )
  }

  handleDateClickEvent (event: any) {
    this.selectedDate = event.date;
    this.modalButton.nativeElement.click();
    this.addEvent(event.dateStr);
    console.log(event);
  }

  onSubmit(form: any) {
    console.log(this.eventForm, form);  // eventForm is the form object
    // Send to backend server
    this.httpClient.post('/api/events', this.eventForm).subscribe( (res) => {
      console.log('Event added', res);
    } );
  }
}
