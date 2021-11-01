/**
 * Brandon Ta
 * INFO 441
 * Lecture Exercise 3
 */

const URL = "http://localhost:3000/";

function fetchNumAltTags() {
  const website = id("url").value;
  console.log("WEBSITE: " + website);
  fetch(URL + "api/alts?url=" + website)
    .then(resp => resp.text())
    .then(text => {
      console.log(text);
      id("alts").innerHTML = "Number of images with alt text: " + text.toString();
    });
}

const id = (id) => {
  return document.getElementById(id);
}
