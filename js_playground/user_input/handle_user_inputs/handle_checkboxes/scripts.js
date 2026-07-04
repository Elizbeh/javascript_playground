// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');
const radioButtons = document.getElementsByName('transport-method')
const musicDropDown = document.getElementById('music-preference')

musicResult.textContent = musicDropDown.value

document.getElementById('sports-checkbox').addEventListener('change', (e) => {
    if(e.target.checked) {
        hobbiesResult.children[0].classList.remove('text-secondary')
    } else {  
        hobbiesResult.children[0].classList.add('text-secondary')
    }
})

document.getElementById('games-checkbox').addEventListener('change', (e) => {
    if(e.target.checked) {
        hobbiesResult.children[1].classList.remove('text-secondary')
    } else {  
        hobbiesResult.children[1].classList.add('text-secondary')
    }
}) 

document.getElementById('music-checkbox').addEventListener('change', (e) => {
    if (e.target.checked) {
        hobbiesResult.children[2].classList.remove('text-secondary')
    } else {  
        hobbiesResult.children[2].classList.add('text-secondary')
    }
})

/*
 * RADIO BUTTON EVENT LISTENER
 */
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', (e) => {
        transportResult.textContent = e.target.value
    })
}

/*
 * DROPDOWN EVENT LISTENER
 */
musicDropDown.addEventListener('change', (e) => {
    musicResult.textContent = e.target.value
})