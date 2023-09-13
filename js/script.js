const keys = document.querySelectorAll('.key');
const checkbox = document.querySelector('.checkbox__keys');
const switcher = document.querySelector('.switcher');
const keysSection = document.querySelector('.piano__keys');

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMauseDown = (key) => {
playNote(key.getAttribute('data-note'));

    if (key.className.includes('black')) {
        key.classList.add('black--pressed');
    return;
    }

key.style.background = '#ddd';
}

const handleMauseUp = (key) => {

    if (key.className.includes('black')) {
        key.classList.remove('black--pressed');
        return;
    }

    key.style.background = 'white';
}

keys.forEach ((key) => {
    key.addEventListener('mousedown', () =>  handleMauseDown(key))
    key.addEventListener('mouseup', () =>  handleMauseUp(key))
});

checkbox.addEventListener('change', ({target }) => {
if (target.checked) {
    switcher.classList.add('switcher--active');
    keysSection.classList.remove('disabled--keys');
    return;
}

switcher.classList.remove('switcher--active');
keysSection.classList.add('disabled--keys');
});

const  keyDownMapper = {
    "Tab": () => handleMauseDown(keys[0]),
    "1": () => handleMauseDown(keys[1]),
    "2": () => handleMauseDown(keys[2]),
    "3": () => handleMauseDown(keys[3]),
    "4": () => handleMauseDown(keys[4]),
    "5": () => handleMauseDown(keys[5]),
    "6": () => handleMauseDown(keys[6]),
    "7": () => handleMauseDown(keys[7]),
    "8": () => handleMauseDown(keys[8]),
    "9": () => handleMauseDown(keys[9]),
    "0": () => handleMauseDown(keys[10]),
    "a": () => handleMauseDown(keys[11]),
    "s": () => handleMauseDown(keys[12]),
    "d": () => handleMauseDown(keys[13]),
    "f": () => handleMauseDown(keys[14]),
    "g": () => handleMauseDown(keys[15]),
    "h": () => handleMauseDown(keys[16]),
    "j": () => handleMauseDown(keys[17]),
    "k": () => handleMauseDown(keys[18]),
    "l": () => handleMauseDown(keys[19]),
    "z": () => handleMauseDown(keys[20]),
    "x": () => handleMauseDown(keys[21]),
    "c": () => handleMauseDown(keys[22]),
    "v": () => handleMauseDown(keys[23]),
    "b": () => handleMauseDown(keys[24]),
}

const  keyUpMapper = {
    "Tab": () => handleMauseUp(keys[0]),
    "1": () => handleMauseUp(keys[1]),
    "2": () => handleMauseUp(keys[2]),
    "3": () => handleMauseUp(keys[3]),
    "4": () => handleMauseUp(keys[4]),
    "5": () => handleMauseUp(keys[5]),
    "6": () => handleMauseUp(keys[6]),
    "7": () => handleMauseUp(keys[7]),
    "8": () => handleMauseUp(keys[8]),
    "9": () => handleMauseUp(keys[9]),
    "0": () => handleMauseUp(keys[10]),
    "a": () => handleMauseUp(keys[11]),
    "s": () => handleMauseUp(keys[12]),
    "d": () => handleMauseUp(keys[13]),
    "f": () => handleMauseUp(keys[14]),
    "g": () => handleMauseUp(keys[15]),
    "h": () => handleMauseUp(keys[16]),
    "j": () => handleMauseUp(keys[17]),
    "k": () => handleMauseUp(keys[18]),
    "l": () => handleMauseUp(keys[19]),
    "z": () => handleMauseUp(keys[20]),
    "x": () => handleMauseUp(keys[21]),
    "c": () => handleMauseUp(keys[22]),
    "v": () => handleMauseUp(keys[23]),
    "b": () => handleMauseUp(keys[24]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    keyDownMapper[event.key]()
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    keyUpMapper[event.key]()
});
