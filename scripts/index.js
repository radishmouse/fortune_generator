console.log('yep i am here');
// Classes are for CSS Styling
// "data attributes" are for JS


// #1 Make some code run
// when I click the button
const triggerElement = document.querySelector('[data-trigger]');

function hello() {
    console.log('Hello addEventListener!');
}

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
triggerElement.addEventListener('click', hello);

// This works, but is not the most modular approach.
// triggerElement.onclick = function () {
//     // all right here in this function
//     doThing1();
//     doThing2();
//     doThing3();
// }

// #2 Write some text to the
// page on button click


// #3 Pull text from an array
// of text to write to the
// page.