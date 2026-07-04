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


/*
 *
 NOTE : few other examples of event
 input  — similar to the  change  event, 
 the  input  event is emitted every time the user changes the input in a text field, 
 and the  $event.target.value  property contains the current content of the text field

 focus  /  blur  — when a user clicks or tabs to a form control and it becomes the active control, 
 its  focus  event is emitted; when a user clicks or tabs away from a form control and it is no longer the active control, 
 its  blur  event is emitted
 */