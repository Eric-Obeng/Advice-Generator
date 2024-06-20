"use strict";

const adviceNumber = document.getElementById("advice-number");
const advice = document.getElementById("advice-text");
const adviceGenerator = document.getElementById("advice-button");

const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceSlip = data.slip;
    const adviceNum = `Advice #${adviceSlip.id}`;
    const adviceText = `"${adviceSlip.advice}"`;
    adviceNumber.innerText = adviceNum;
    advice.innerText = adviceText;
  } catch (error) {
    console.error("Error fetching advice:", error);
    advice.innerText = "Failed to fetch advice. Please try again later.";
  }
};

fetchAdvice();

adviceGenerator.addEventListener("click", fetchAdvice);
