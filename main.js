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
