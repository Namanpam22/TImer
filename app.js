/// ham menu
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const header = document.getElementById("header");
open.addEventListener("click", () => {
  open.style.display = "none";
  close.style.display = "block";
  header.className = "header active";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  header.className = "header";
});

const ist = document.getElementById("ist");
const ast = document.getElementById("ast");
const pdate = document.getElementById("pdate");
// ---------------------------------
const india = document.getElementById("india");
const america = document.getElementById("america");
// -----------------------------
function showIST() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  let pre;
  hours = update(hours);
  mins = update(mins);
  sec = update(sec);
  if (hours < 12) {
    hours = hours;
    pre = "AM";
  } else {
    hours = hours - 12;
    pre = "PM";
  }
  let time = `${hours}:${mins}:${sec} ${pre}`;
  india.innerHTML = time;
}
function showAST() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();
  hours = update(hours);
  mins = update(mins);
  sec = update(sec);
  let time = `${hours}:${mins}:${sec}`;
  america.innerHTML = time;
}
setInterval(showIST,1000);
ist.addEventListener("click", () => {
  india.style.display = "block";
  america.style.display = "none";
  showIST();
  setInterval(showIST, 1000);
});
ast.addEventListener("click", () => {
  india.style.display = "none";
  america.style.display = "block";
  showAST();
  setInterval(showAST, 1000);
});

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
let date = new Date();
let today = `Date : ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
console.log(today);
pdate.innerText = today;
