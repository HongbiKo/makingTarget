"use strict";

const button = document.querySelector(".title");
const rabbit = document.querySelector(".rabbit");

button.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
