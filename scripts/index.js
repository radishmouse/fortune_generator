console.log('yep i am here');
// Classes are for CSS Styling
// "data attributes" are for JS


// #1 Make some code run
// when I click the button
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

const fortunes = [
    "You laugh now, wait til you get home.",
    "Fortune not found: Abort, Retry, Ignore?",
    "About time I got out of that cookie.",
    "Your resemblance to a muppet will prevent the world from taking you seriously",
    "You will be hungry again in one hour."
];

// function hello() {
//     console.log('Hello addEventListener!');
// }

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    const newFortune = fortunes.pop();
    outputElement.textContent = newFortune;
});

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

