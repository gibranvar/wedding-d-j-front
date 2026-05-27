import React from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import "./styles.css"
interface Event {
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: string;
}

interface iCalendarButtonProps {
  buttonText: string;
}
const iCalendarButton: React.FC<iCalendarButtonProps> = () => {
  return (
    <div className="customButtonContainer"><AddToCalendarButton
  name="Our Wedding: Daniel & Jasmine"
  description="Join us in Mallorca, Spain for an unforgettable evening filled with love, joy, and beautiful memories. What began as a friendship during an unexpected season of life has grown into a love story rooted in laughter, adventure, and unwavering support. We can’t wait to celebrate this special chapter surrounded by the people we love most."
  startDate="2026-09-28"
  startTime="17:00"
  endDate="2026-09-29"
  endTime="02:00"
  timeZone="America/Los_Angeles"
  location="Eglesia Nova https://maps.app.goo.gl/ACDgcFYTNNFZG7G76, Son Doblons https://maps.app.goo.gl/FdtYcQD8aTGmoLhv6"
  options={['Google','Apple', 'Outlook.com']}
  buttonStyle="3d"
  hideBackground
  hideCheckmark
  size="2"
  lightMode="light"
  language="es"
  label="ADD TO CALENDAR"
  hideBranding
/></div>
    
  );
};

export default iCalendarButton;
