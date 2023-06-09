import React from "react";

function FormattDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let mints = props.date.getMinutes();
  if (mints < 10) {
    mints = `0${mints}`;
  }
  return (
    <div>
      {day} {hours}:{mints}
    </div>
  );
}
export default FormattDate;
