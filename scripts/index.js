console.log("yep, I am here");
//Classes are for CSS styling  and "data-attributes" are for JS

// ********************************************************************
//#1 Make some code run when I click the button
//data attributes go inside of of square brackets
const triggerElement = document.querySelector("[data-trigger]");
const outputElement = document.querySelector("[data-output]");
// ****************************************************************************
// function hello() {
//   console.log("Hello addEventListener");
// }
// *****************************************************************************
//addEventListener accepts 2 arguments:
//- a string that identifies the kind of event to listen for
//- a function that says what to do when the event happens
triggerElement.addEventListener("click", function() {
  console.log("Hello addEventListener");
  outputElement.textContent = "kakakaka";
});

// *****************************************************************************
//#2 Write some text to the page on button click


//#3 Pull text from an array of text to write to the page
