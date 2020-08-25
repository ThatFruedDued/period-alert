let dateArr,
    nameArr;

if (localStorage.getItem("times") !== undefined) {
  dateArr = localStorage.getItem("times").split("spl");
  nameArr = localStorage.getItem("times").split("spl");
}

get("#add").addEventListener("click", e => {
  function type() {
    let result = window.prompt("Period or Event?");
    if (result.toLowerCase() === "period") {
      period();
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
    }
  }
});

function get(selector) {
  if (selector.startsWith("#")) {
    return document.getElementById(selector.subString(1));
  }
  else if (selector.startsWith(".")) {
    return document.getElementsByClassName(selector.subString(1));
  }
  else {
    return document.getElementsByTagName(selector);
  }
}
