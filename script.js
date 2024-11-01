const inputYourNameEl = document.getElementById('inputYourName')
const inputArtistNameEl = document.getElementById('inputArtistName')
const calculatorBtnEl = document.getElementById('percentBtn')
const modal = document.getElementById('modal')
const percent = document.getElementById('percent')

function click() {
    const randomNumber = Math.floor(Math.random() * 100)
    modal.classList.remove('hidden')
    percent.innerText = randomNumber
}

calculatorBtnEl.addEventListener('click', click)