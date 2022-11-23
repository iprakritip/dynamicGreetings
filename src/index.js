import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date().getHours();
let textColor;

if (currentDate > 18) {
  message = "Evening";
  textColor = "blue";
} else if (currentDate < 18 && currentDate > 12) {
  message = "Afternoon";
  textColor = "green";
} else {
  message = "Morning";
  textColor = "red";
}

ReactDOM.render(
  <h1 class="heading" style={{ color: textColor }}>
    Good {" " + message}!
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
