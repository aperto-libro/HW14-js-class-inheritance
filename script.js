const currentTime = document.getElementById('clock');
let isFullFormat = true;

function Clock(element) {
  this.el = element;
}

Clock.prototype.render = function () {
  let now = new Date();
  let year = correctTime(now.getFullYear());
  let month = correctTime(now.getMonth());
  let date = correctTime(now.getDate());
  let hours = correctTime(now.getHours());
  let minutes = correctTime(now.getMinutes());
  this.el.innerHTML = `${year}-${month}-${date}, ${hours} : ${minutes}`;
};

function FullTime() {
  Clock.call(this, currentTime);
}

FullTime.prototype = Object.create(Clock.prototype);

FullTime.prototype.render = function () {
  let now = new Date();
  let hours = correctTime(now.getHours());
  let minutes = correctTime(now.getMinutes());
  let seconds = correctTime(now.getSeconds());
  this.el.innerHTML = `${hours}:${minutes}:${seconds}`;
};

function ShortTime() {
  Clock.call(this, currentTime);
}

ShortTime.prototype = Object.create(Clock.prototype);

ShortTime.prototype.render = function () {
  let now = new Date();
  let hours = correctTime(now.getHours());
  let minutes = correctTime(now.getMinutes());
  this.el.innerHTML = `${hours}:${minutes}`;
};

function correctTime(value) {
  return value < 10 ? '0' + value : value;
}

function toggle() {
  isFullFormat = !isFullFormat;
}

function changeFormat() {
  clock = isFullFormat === false ? shortClock : fullClock;
}

let clock = new Clock(currentTime);
const shortClock = new ShortTime(currentTime);
const fullClock = new FullTime(currentTime);

setInterval(() => clock.render(), 250);

currentTime.addEventListener('click', () => {
  toggle();
  changeFormat();
});
