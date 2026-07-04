console.log("soundboard.js fonctionne")

// CONSTANCE
// HTML
let container_soundboard = document.querySelector(".container_soundboard")
// contient les fichier sound associé a leur button
let soundboards = [
    {name: "Water", file: "sound/water-effect.mp3", image: "img/water.png"},
    {name: "Wind", file: "sound/wind-effect.mp3", image: "img/wind.png"},
    {name: "Fire", file: "sound/fire-effect.mp3", image: "img/fire.png"},
    {name: "Birds", file: "sound/birds-singing-effect.mp3", image: "img/bird.png"}
]
// contient les button des évennement des button play/pause/stop
let soundboardsparameter = [
    {name: "play"},
    {name: "pause"},
    {name: "stop"}
]
// contient les boards html
let htmlboards = []
// constance a déclaré
let currentSoundBoard = null
let currentSelectedSoundBoard = null
let currentVolumeBar = null
let currentProgressBar = null

// FUNCTION
// function evenement du son
function playSoundBoard(element){
    if(currentSoundBoard){
        currentSoundBoard.pause()
        currentSoundBoard.currentTime = 0
    }
    currentSoundBoard = new Audio(element.file)
    if(currentVolumeBar){
        currentSoundBoard.volume = Number(currentVolumeBar.value)
    }
    currentSoundBoard.addEventListener("loadedmetadata", () => {
        currentProgressBar.max = currentSoundBoard.duration
    })
    currentSoundBoard.addEventListener("timeupdate", () => {
        currentProgressBar.value = currentSoundBoard.currentTime
    })
    currentProgressBar.addEventListener("input", () => {
        currentSoundBoard.currentTime = currentProgressBar.value
    })
    currentProgressBar.max = currentSoundBoard.duration
    currentSoundBoard.play()
    currentSoundBoard.loop = true
}
// function evenement pause
function pauseSoundBoard(){
    if(currentSoundBoard){
        currentSoundBoard.pause()
    }
}
// function evenement stop
function stopSoundBoard(){
    htmlboards.forEach(element => {
        element.style.height = "50px"
        element.style.display = "block"
    })
    if(currentSoundBoard){
        currentSoundBoard.pause()
        currentSoundBoard.currentTime = 0
    }
    container_parameter_soundboard.style.display = "none"
    let progressTextStop = document.querySelectorAll(".soundboard_volume_text")
    progressTextStop.forEach(text => {
        text.style.display = "none"
    })
    let volumeTextStop = document.querySelectorAll(".soundboard_progress_text")
    volumeTextStop.forEach(text => {
        text.style.display = "none"
    })
    let barsVolume = document.querySelectorAll(".soundboard_volume_bar")
    barsVolume.forEach(bar => {
        bar.style.display = "none"
    })
    let barsProgress = document.querySelectorAll(".soundboard_progress_bar")
    barsProgress.forEach(bar => {
        bar.style.display = "none"
    })
    htmlboards.forEach(board => {
        let img = board.querySelector("img")
        if(img){
            img.style.display = "none"
        }
    })
}
// Gère SoundBoard.js
function manageSoundBoards(){
    // event boutton soundboard
    let container_soundboard_button = document.createElement("div")
    container_soundboard_button.className = "container_soundboard_button"
    container_soundboard.append(container_soundboard_button)
    // boucle
    soundboards.forEach(element => {
        // board
        let board = document.createElement("div")
        board.textContent = element.name
        board.className = "button_soundboard_sound"
        board.id = "soundboard_" + element.name
        // board volume bar
        let volumeBar = document.createElement("input")
        volumeBar.type = "range"
        volumeBar.className = "soundboard_volume_bar"
        volumeBar.min = 0
        volumeBar.max = 1
        volumeBar.step = 0.1
        volumeBar.addEventListener("input", () => {
            if(currentSoundBoard){
                currentSoundBoard.volume = Number(volumeBar.value)
            }
        })
        volumeBar.value = 1
        // board progress bar
        let progressBar = document.createElement("input")
        progressBar.type = "range"
        progressBar.className = "soundboard_progress_bar"
        progressBar.min = 0
        progressBar.max = 0
        progressBar.step = 1
        progressBar.value = 0
        // image board
        let img = document.createElement("img")
        img.className = "soundboard_img"
        img.src = element.image
        img.style.display = "none"
        // text board volume
        let volumeText = document.createElement("div")
        volumeText.className = "soundboard_volume_text"
        volumeText.textContent = "Volume"
        volumeText.style.display = "none"
        // text board progress
        let progressText = document.createElement("div")
        progressText.className = "soundboard_progress_text"
        progressText.textContent = "Progress"
        progressText.style.display = "none"
        // addEvent
        board.addEventListener("click", () => {
            container_parameter_soundboard.style.display = "inline-block"
            volumeText.style.display = "inline-block"
            progressText.style.display = "inline-block"
            volumeBar.style.display ="block"
            progressBar.style.display ="block"
            currentSelectedSoundBoard = element
            currentVolumeBar = volumeBar
            currentProgressBar = progressBar
            // boucle
            htmlboards.forEach(otherboard => {
                if(otherboard !== board){
                    otherboard.style.display = "none"
                }else{
                    otherboard.style.height = "250px"
                    let boardImg = otherboard.querySelector("img")
                    boardImg.style.display = "block"
                }
            })
        })
        board.append(volumeText)
        board.append(progressText)
        board.append(progressBar)
        board.append(volumeBar)
        board.append(img)
        container_soundboard_button.append(board)
        htmlboards.push(board)
    })
    // event boutton parameter
    container_parameter_soundboard = document.createElement("div")
    container_parameter_soundboard.className = "container_parameter_soundboard"
    soundboardsparameter.forEach(element => {
        let parameter = document.createElement("div")
        parameter.className = "button_parameter_soundboard"
        parameter.id = "parameter_soundboard_" + element.name
        // addEvent
        parameter.addEventListener("click", () => {
            // condition Event
            if(element.name === "play"){
                playSoundBoard(currentSelectedSoundBoard)
            }
            else if(element.name === "pause"){
                pauseSoundBoard(currentSelectedSoundBoard)
            }
            else if(element.name === "stop"){
                stopSoundBoard()
            }
        })
        parameter.textContent = element.name
        container_parameter_soundboard.append(parameter)
        container_soundboard.append(container_parameter_soundboard)
    })
}

// CODE
manageSoundBoards()