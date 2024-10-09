function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let londanElement = document.querySelector("#londan");
  let londanDateElement = londanElement.querySelector(".date");
  let londanTimeElement = londanElement.querySelector(".time");
  let londanTime = moment().tz("Europe/London");
  londanDateElement.innerHTML = londanTime.format("MMMM Do YYYY");
  londanTimeElement.innerHTML = londanTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let japanElement = document.querySelector("#japan");
  let japanDateElement = japanElement.querySelector(".date");
  let japanTimeElement = japanElement.querySelector(".time");
  let japanTime = moment().tz("Japan");
  japanDateElement.innerHTML = japanTime.format("MMMM Do YYYY");
  japanTimeElement.innerHTML = japanTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
