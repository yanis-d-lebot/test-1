console.log("profite.js fonctionne")

// CONSTANCE
// html
let container_profite = document.querySelector(".container_profite")
// song
let song_profite = [
    {number:"1", name: "Water", file: "sound/water-effect.mp3"},
    {number:"2", name: "Wind", file: "sound/wind-effect.mp3"},
    {number:"3", name: "Fire", file: "sound/fire-effect.mp3"},
    {number:"4", name: "Birds", file: "sound/birds-singing-effect.mp3"}
]

let container_scream = document.querySelector(".container_scream")

let currentAudio = null

// FUNCTION

// function pour jouer les sons et les arréter
function playSound(sound){
    if(currentAudio){
        currentAudio.pause()
        currentAudio.currentTime = 0
    }
    currentAudio = new Audio(sound)
    currentAudio.play()
}
// Gère/Crée les div depuis js
function manageProfite(){
    let scream_vod_profite = document.createElement("video")
    scream_vod_profite.src = "video/vod_screamer-prank.mov"
    scream_vod_profite.id = "scream_vod_profite"
    container_profite.append(scream_vod_profite)

    let container_scream = document.createElement("div")
    container_scream.className = "container_scream"
    container_profite.append(container_scream)

    let title_scream_button = document.createElement("div")
    title_scream_button.className = "title_scream_button"
    title_scream_button.textContent = "Profite ;)"
    container_scream.append(title_scream_button)

    let container_scream_button = document.createElement("div")
    container_scream_button.className = "container_scream_button"
    container_scream.append(container_scream_button)

    let real_scream_button = document.createElement("div")
    real_scream_button.className = "real_scream_button"
    container_scream_button.append(real_scream_button)
    real_scream_button.textContent = ";) Clique"
    // evenement video
    real_scream_button.addEventListener("click", () => {
        if(currentAudio){
            currentAudio.pause() 
        }
        container_head_bar.style.display = "none"
        container_scream.style.display = "none"
        scream_vod_profite.style.display = "block"
        scream_vod_profite.play()
    })
    // evenement fin de video
    scream_vod_profite.addEventListener("ended", () => {
        scream_vod_profite.style.display = "none"
        container_head_bar.style.display = "inline-block"
        container_scream.style.display = "inline-block"
    })
    // boucle
    song_profite.forEach(element => {
        let fake_scream_button = document.createElement("div")
        fake_scream_button.className = "fake_scream_button"
        fake_scream_button.id = "fsbtn_" + element.number
        fake_scream_button.textContent = ";) Clique"
        container_scream_button.append(fake_scream_button)
        fake_scream_button.addEventListener("click", () => {
            playSound(element.file)
        })
    })
}

// CODE
manageProfite()
