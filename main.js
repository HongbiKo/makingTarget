"use strict";

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const cursor = document.querySelector(".cursor");
const text = document.querySelector(".text");
const cursorRect = cursor.getBoundingClientRect();

console.log(cursorRect);
const cursorHalfWidth = cursorRect.width / 2;
const cursorHalfHeight = cursorRect.height / 2;

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  text.innerHTML = `${x}, ${y}`;

  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${
    y - cursorHalfHeight
  }px)`;
  text.style.transform = `translate(${x + 20}px, ${y + 20}px)`;

  // vertical.style.left = `${x}px`;
  // horizontal.style.top = `${y}px`;
  // cursor.style.left = `${x}px`;
  // cursor.style.top = `${y}px`;
  // text.style.left = `${x}px`;
  // text.style.top = `${y}px`;
});
