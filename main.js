"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const cursor = document.querySelector(".cursor");
const text = document.querySelector(".text");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  text.innerHTML = `${x}, ${y}`;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
  text.style.left = `${x}px`;
  text.style.top = `${y}px`;
});
