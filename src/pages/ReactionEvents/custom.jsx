import React from 'react';
import { sliceEvents, createPlugin } from '@fullcalendar/react';

const CustomView = (props) => {
    let segs = sliceEvents(props, true); // allDay=true
    return (
        <>
            <div class='view-title'>
                {props.dateProfile.currentRange.start.toUTCString()}
            </div>
            <div class='view-events'>
                {segs.length} events
            </div>
        </>
    );
}

export default createPlugin({
    views: {
        custom: CustomView
    }
});