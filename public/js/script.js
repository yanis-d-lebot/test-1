// CONSTANCE
let container_head_bar = document.querySelector(".container_head_bar")
let button_profite = document.getElementById("button_profite")
let button_soundboard = document.getElementById("button_soundboard")
let button_memorygame = document.getElementById("button_memorygame")
let button_azertype = document.getElementById("button_azertype")
let button_todolist = document.getElementById("button_todolist")
let button_calculator = document.getElementById("button_calculator")
let button_quiz = document.getElementById("button_quiz")
let button_head_bar = document.getElementById("button_meteo")
let button_miniescapegame = document.getElementById("button_miniescapegame")

// FUNCTION

// CODE
// ramène vers la partie profite
button_profite.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    container_profite.style.display = "inline-block"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie soundboard
button_soundboard.addEventListener("click", () => {
    if(currentAudio){
        currentAudio.pause()
    }
    container_soundboard.style.display = "inline-block"
    container_profite.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie memorygame
button_memorygame.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_memorygame.style.display = "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie azertype
button_azertype.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_azertype.style.display = "inline-block"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_profite.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie todolist
button_todolist.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_todolist.style.display= "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie calculator
button_calculator.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_calculator.style.display = "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie quiz
button_quiz.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_quiz.style.display = "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_meteo.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie meteo
button_meteo.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_meteo.style.display = "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_miniescapegame.style.display = "none"
})

// ramène vers la partie miniescapegame
button_miniescapegame.addEventListener("click", () => {
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
    if(currentAudio){
        currentAudio.pause()
    }
    container_miniescapegame.style.display = "inline-block"
    container_profite.style.display = "none"
    container_soundboard.style.display = "none"
    container_memorygame.style.display = "none"
    container_azertype.style.display = "none"
    container_todolist.style.display= "none"
    container_calculator.style.display = "none"
    container_quiz.style.display = "none"
    container_meteo.style.display = "none"
})