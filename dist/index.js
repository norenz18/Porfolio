const btn = document.querySelector("#btn");
const nav = document.querySelector("#navbarNav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");

  if (btn.innerHTML === "✖") {
    btn.innerHTML = "☰";
    btn.style.color = "#5199e4";
  } else {
    btn.innerHTML = "✖";
    btn.style.color = "red";
  }
});

const box = document.querySelector(".up-arrow");
// const rect = box.getBoundingClientRect();

// console.log(rect);

window.addEventListener("scroll", () => {
  // console.log(window.innerHeight);
  // console.log(box.getBoundingClientRect().top);

  if (box.getBoundingClientRect().top < window.innerHeight) {
    box.style.opacity = 1;
    box.style.transition = ".3s ease-in-out";
  } else {
    box.style.opacity = 0;
  }
});

// alert("Welcome to my Website");

//
// function greet() {
//   let name = document.querySelector("#name").value;
//   if (name === "") {
//     name = "Required fields";
//   }
//   document.querySelector("").innerHTML = `welcome ${name}`;
// }

// const text = "I build websites and systems.";

// let index = 0;

// function writeText() {
//   document.querySelector("#text").innerText = text.slice(0, index);

//   index++;

//   if (index > text.length - 1) {
//     index = 0;
//   }
// }

// setInterval(writeText, 200);

// function greet() {
//   let name = document.querySelector("#name").value;
//   if (name === "") {
//     // document.write(`Required field`);
//     //  document.write(`Hello, ${name}!`);
//     name = "Required fields";
//   }
//   document.querySelector("#field").innerHTML = `Welcome, ${name}`;
// }
