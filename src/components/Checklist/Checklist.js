import React, { useState } from "react";
import "./checklist.css";
import tickmark from "../../assets/images/tick-mark.png";

const checklist = [
  "Leave sheets on the beds unmade",
  "Log out of your smart TV apps",
  "Put towels in any bathroom",
  "Start the dishwasher if there are any dirty dishes",
  "Close the hot tub cover (if not done already)",
  "Make sure the BBQ gas is turned off",
  "Make sure the fireplaces are turned off",
  "Set the alarm to Armed Away (enter code then press Armed Away)",
  "Lock all of the doors",
  "Put the keys back in the garage",
  "Lock the back garage door and close the garage",
];

const Checklist = () => {
  const [checklistItems, setChecklistItems] = useState(checklist);
  return (
    <div className="checklist py-6">
      <h2 className="text-2xl font-bold text-sky-500">Checklist</h2>
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-22">
        <div className="flex flex-wrap -m-1 md:-m-2">
          {checklistItems.map(items => (
            <div className="flex flex-wrap w-2/6 flex-row my-3">
              <img src={tickmark} className="tick-mark" alt="checklist-mark" />
              <p className="ml-px flex-1 px-4">{items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Checklist };
