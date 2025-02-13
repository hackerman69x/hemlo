const messages = [
    "are you sure?",
    "really sure??",
    "really really sure???",
    "please po baby boo...",
    "think wisely po🦖",
    "if you say no i will be samd...",
    "i will be very samnd na talaga...",
    "i will be very very very samnd...",
    "K YAW KO NA DI NA TO AMSK...",
    "hem jomk! yems ka na pls pom ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "nothis.html";
}