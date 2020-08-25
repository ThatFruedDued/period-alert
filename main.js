let dateArr = [],
    nameArr = [];

if (localStorage.getItem("times") !== null) {
  dateArr = localStorage.getItem("times").split("spl");
  nameArr = localStorage.getItem("names").split("\u0000");
}

get("#add").addEventListener("click", e => {
  period();
    
  function type() {
    let result = window.prompt("Period or Event?");
    if (result.toLowerCase() === "period") {
      period();
    }
    else if (result.toLowerCase() === "event") {
      event();
    }
    else {
      type();
    }
  }
  function period() {
    let name = window.prompt("Enter period name");
    let start = window.prompt("Enter period start time (HH:MM in 24 hour time)");
    let end = window.prompt("Enter period end time (HH:MM in 24 hour time)");
    if (start.indexOf(":") === -1 || end.indexOf(":") === -1) {
      period();
    }
    else {
      dateArr.push(start, end);
      nameArr.push(name + "Starts", name + "Ends");
      storeArrays();
    }
  }
  function event() {
    let name = window.prompt("Enter event name");
    let time = window.prompt("Enter event time (HH:MM in 24 hour time)");
    if (time.indexOf(":") === -1) {
      event();
    }
    else {
      dateArr.push(time);
      nameArr.push(name);
      storeArrays();
    }
  }
});

function storeArrays() {
  localStorage.setItem("times", dateArr.join("spl"));
  localStorage.setItem("names", nameArr.join("\u0000"));
}

function get(selector) {
  if (selector.startsWith("#")) {
    return document.getElementById(selector.substring(1));
  }
  else if (selector.startsWith(".")) {
    return document.getElementsByClassName(selector.substring(1));
  }
  else {
    return document.getElementsByTagName(selector);
  }
}
