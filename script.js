const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you serious?",
    "Thoi mò kẹo bông mềm mịn ngọt ngào của bé... please...",
    "Cmon, think about it!",
    "Ui chạ thưn emm",
    "I will be very sad...",
    "I will be very very very sad...",
    "Hong thì thoi, bé hong thèm nụaa",
    "Jon hoy, giờ say yes hoặc chếc❤️"
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
    window.location.href = "yes_page.html";
}