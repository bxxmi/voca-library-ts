import data from "../database/data.json";
import React from "react";
import { Link } from "react-router-dom";

const DayList = () => {
  return (
    <ul className="list_day">
      {data.days.map((day) => {
        return (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DayList;
