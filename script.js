"use strict";

//select dom elements
const BGreading = document.getElementById("bgValue");
const TrendArrow = document.getElementById("trend");
const newBgBtn = document.getElementById("NewBgBtn");

//define variables
class NewBgReading {
  constructor(reading, trend) {
    this.reading = reading;
    this.trend = trend;
  }
}

const Reading1 = new NewBgReading();
//grab reading function
async function grabReading() {
  const response = await fetch(
    "https://33002.cgm.bcdiabetes.ca/api/v1/entries/current.json"
  );
  const jsonData = await response.json();

  //const readingNew = NewBgReading();
  console.log(jsonData);
  //grab bg reading from json object converted from mg/dl to mmol/L
  const bgReading = Math.round(jsonData[0].sgv / 18);
  console.log(Math.round(jsonData[0].sgv / 18));
  //grab trend and store in vairbale
  const trendReading = String(jsonData[0].trend);
  console.log(jsonData[0].trend);

  //create new object instance for this reading
  Reading1.reading = bgReading;
  Reading1.trend = trendReading;
  BGreading.textContent = Reading1.reading;
  TrendArrow.textContent = Reading1.trend;
}

//add event listener to button
//when clicked, call grab reading function
newBgBtn.addEventListener("click", grabReading);

//show new values on the screen
