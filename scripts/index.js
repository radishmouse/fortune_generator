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
let index = 0;

function createFortuneButton() {
    const theButton = document.createElement('button');
    theButton.textContent = 'Click here for a fortune';
    theButton.setAttribute('data-trigger', '');
    return theButton;
}

function createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // const theButton = createFortuneButton();
    // buttonContainer.appendChild(theButton);
    buttonContainer.appendChild(createFortuneButton());

    return buttonContainer;
}


// function hello() {
//     console.log('Hello addEventListener!');
// }

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    // const newFortune = fortunes.pop();
    const newFortune = fortunes[index];
    outputElement.textContent = newFortune;
    index++;
    if (index > fortunes.length - 1) {
        index = 0;
    }
    // index = index + 1;
});
