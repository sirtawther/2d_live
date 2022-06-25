
const header = document.getElementById("header")
const header2 = document.getElementById("header2")
const value_11am = document.getElementById("value_11am")
const time_11am = document.getElementById("time_11am")
const value_12pm = document.getElementById("value_12pm")
const time_12pm = document.getElementById("time_12pm")
const value_3pm = document.getElementById("value_3pm")
const time_3pm = document.getElementById("time_3pm")
const value_430pm = document.getElementById("value_430pm")
const time_430pm = document.getElementById("time_430pm")


const live = (data) => {
header.innerHTML = `${data.live.twod}`;
header2.innerHTML = `${data.live.time}`;
value_11am.innerHTML = `${data.result[0].twod}`;
time_11am.innerHTML = `${data.result[0].stock_datetime}`;
value_12pm.innerHTML = `${data.result[1].twod}`;
time_12pm.innerHTML = `${data.result[1].stock_datetime}`;
value_3pm.innerHTML = `${data.result[2].twod}`;
time_3pm.innerHTML = `${data.result[2].stock_datetime}`;
value_430pm.innerHTML = `${data.result[3].twod}`;
time_430pm.innerHTML = `${data.result[3].stock_datetime}`
}
setInterval(() => {
  const data = fetch('https://api.thaistock2d.com/live')
    .then(response => response.json())
    .then(data => live(data))
    .catch(error => error);

}, 1000);


