import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import "./styles.css";

interface CalendarButtonProps {
  name: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  label?: string;
  timeZone?: string;
  options?: ("Google" | "Apple" | "Outlook.com")[];
}

const CalendarButtonEvent: React.FC<CalendarButtonProps> = ({
  name,
  description,
  startDate,
  startTime,
  endDate,
  endTime,
  location,
  label = "ADD TO CALENDAR",
  timeZone = "America/Los_Angeles",
  options = ["Google", "Apple", "Outlook.com"],
}) => {
  return (
    <div className="customButtonContainer">
      <AddToCalendarButton
        name={name}
        description={description}
        startDate={startDate}
        startTime={startTime}
        endDate={endDate}
        endTime={endTime}
        timeZone={timeZone}
        location={location}
        options={options}
        buttonStyle="3d"
        hideBackground
        hideCheckmark
        size="2"
        lightMode="light"
        language="en"
        label={label}
        hideBranding
      />
    </div>
  );
};

export default CalendarButtonEvent;