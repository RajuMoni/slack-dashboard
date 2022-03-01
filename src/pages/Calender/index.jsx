import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calender.css"
function Index() {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          start: 'title',
          center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          end: 'today prev,next'
        }}
        // navLinks='true' // can click day/week names to navigate views
        // businessHours='true' // display business hours
        // editable='true'
        // selectable='true'
        events={[
          {
            title: "is",
            start: "2022-02-28T12:45:00",
            className: "dialogbox",
            textColor: "#007200",
            description:"yo"
          },
          {
            title: "is",
            start: "2022-02-28T11:25:00",
            className: "dialogbox",
            textColor: "#007200",
            description: "yo"

          },
          {
            title: "HOME",
            start: "2022-02-28T13:45:00",
            className: "dialogbox",
            textColor: "#007200",
            description: "yo"

          }
        ]}

        // eventOrderStrict='true'
        // eventTimeFormat={
        //   {
        //     hour: 'numeric',
        //     minute: '2-digit',
        //     meridiem: 'short'
        //   }
        // }
        eventContent={
          (arg) => (
            <>
              <p>{arg.event._def.title}
              {arg.timeText}</p>
            </>
          )
        }
        titleFormat={{ year: 'numeric', month: 'long', day: 'numeric' }}
        dayHeaderFormat={{ day: 'numeric', weekday: 'long' }}
        customButtons={{
          new: {
            text: 'new',
            click: () => console.log('new event'),
          },
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: false,
          hour12: false
        }}
        nowIndicator
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
      />
    </>
  )
}

export default Index