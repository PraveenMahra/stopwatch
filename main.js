import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const stopwatch = document.getElementById("stopwatch");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let startTime; // Variable to store the start time
let stopwatchInterval; // Variable to store the interval ID
let elapsedTime = 0; // Variable to store the elapsed time

// Function to start the stopwatch
function startStopwatch() {
  // Store the current time as the start time
  startTime = new Date().getTime() - elapsedTime;

  // Update the stopwatch every 10 milliseconds
  stopwatchInterval = setInterval(updateStopwatch, 10);

  // Disable the start button
  startButton.disabled = true;
}

// Function to update the stopwatch display
function updateStopwatch() {
  // Calculate the elapsed time in milliseconds
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;

  // Format the elapsed time as HH:MM:SS
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  // Update the stopwatch display
  stopwatch.textContent = `${padNumber(hours)}:${padNumber(
    minutes
  )}:${padNumber(seconds)}.${padNumber(milliseconds)}`;
}

// Function to stop the stopwatch
function stopStopwatch() {
  // Clear the interval
  clearInterval(stopwatchInterval);

  // Enable the start button
  startButton.disabled = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  // Clear the interval
  clearInterval(stopwatchInterval);

  // Reset the stopwatch display and elapsed time
  stopwatch.textContent = "00:00:00";
  elapsedTime = 0;

  // Enable the start button
  startButton.disabled = false;
}

// Utility function to pad single-digit numbers with leading zeros
function padNumber(number) {
  return number.toString().padStart(2, "0");
}

// Add event listeners to the buttons
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);
