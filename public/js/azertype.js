console.log("azertype.js fonctionne")

// VARIABLES
let container_azertype = document.querySelector(".container_azertype")
const wordApp = ["cachalot","capricorne","voiture","tendance","frontière","volcan","amitié","cachalot","équation","jardin","métamorphose",
    "agrafe","planète","curiosité","radiateur","capricorne","illusion","montgolfière","artisan","bibliothèque","hibiscus","révolution","flocon",
    "indépendance","coquillage","parapluie","cygne","gouvernement","escalier","nostalgie","acier","festival","labyrinthe","frontière","diamant",
    "girouette","imagination","locomotive","orchidée","courage","anticonstitutionnellement","astronomie","murmure","découverte","basilic",
    "univers","écureuil","chronologie","parallèle","espérance","cathédrale","algorithme","fenêtre","chimère","diplomatie","observatoire",
    "boussole","incroyable","juridiction","aventure","émeraude","tendance","jongleur","littérature","symphonie","abeille","caravane","harmonie",
    "navigation","démocratie","patrimoine","horizon","fabuleux","précipitation","dictionnaire","citadelle","balcon","myrtille","crépuscule",
    "éléphant","déclaration","informatique","quartz","admirable","anecdote","bijou","environnement","prospérité","clavier","arc-en-ciel",
    "libellule","célébration","cerisier","hélicoptère","philosophie","diligence","désillusion","apparail","pirouette","galaxie","hypothèse",
    "accent","dentifrice","cascade","lumière"]
let scoreAzertype = 0
let errorAzertype = 0
let currentLevelAzertype = 0
let timeAzertype = 60
let canPlayAzertype = false
let elapsedTimeAzertype = 1
let wpmAzertype = 0
let countScoreWPMAzertype = 0
const limitedScoreAzertype = [5,10,20,40]

// FUNCTION
// melange mots
function randomizeWords(tab){
    let i, j, tmp;
    for(i = tab.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1))
        tmp = tab[i]
        tab[i] = tab[j]
        tab[j] = tmp
    }
    return tab
}

// score par minute
function updateWPMAzertype(){
    if(timeAzertype > 0){
        elapsedTimeAzertype = Math.max(1,60-timeAzertype)
        wpmAzertype = Math.round(countScoreWPMAzertype*(60/elapsedTimeAzertype))
    }
}

// function global
function manageAzertype(){
    function resetGameAzertype(){
        countScoreWPMAzertype = 0
        wpmAzertype = 0
        elapsedTimeAzertype = 1
        scorewpmAzertype.textContent = wpmAzertype
        currentLevelAzertype = 0
        scoreAzertype = 0
        countPointAzertype.textContent = scoreAzertype + "/" + limitedScoreAzertype[currentLevelAzertype]
        errorAzertype = 0
        countErrorAzertype.textContent = 0
        timeAzertype = 60
        chronoAzertype.textContent = "60s"
    }


    function normalize(word){
        if(normalize(wordUserAzertype.value) === normalize(wordAzertype.textContent)){
            return word.normalize("NFD").replace(/[\u0300-\u036f]/g,'').toLowerCase()
        }                
    }

    //add interface html
    let titleAzertype = document.createElement("div")
    titleAzertype.className = "title_azertype"
    titleAzertype.textContent = "AzerType"
    container_azertype.append(titleAzertype)
    
    let descriptionAzertype = document.createElement("div")
    descriptionAzertype.className = "description_azertype"
    descriptionAzertype.textContent = "App for write with more speed"
    container_azertype.append(descriptionAzertype)

    let playAzertype = document.createElement("div")
    playAzertype.className = "play_azertype"
    playAzertype.textContent = "Play"
    container_azertype.append(playAzertype)

    let scorewpmAzertype = document.createElement("div")
    scorewpmAzertype.className = "scorewpm_azertype"
    scorewpmAzertype.textContent = wpmAzertype
    container_azertype.append(scorewpmAzertype)

    // event click play
    playAzertype.addEventListener("click", () =>{
        canPlayAzertype = true 
        playAzertype.style.display = "none"
        containerPartGameAzertype.style.display = "block"
        timeLimitedAzertype()
        resetGameAzertype()
    })

    // containerPartGameAzertype
    let containerPartGameAzertype = document.createElement("div")
    containerPartGameAzertype.className = "container_part_game_azertype"
    container_azertype.append(containerPartGameAzertype)
    
    let wordAzertype = document.createElement("div")
    wordAzertype.className = "word_azertype"
    wordAzertype.textContent = wordApp[0]
    containerPartGameAzertype.append(wordAzertype)

    let wordUserAzertype = document.createElement("input")
    wordUserAzertype.className = "worduser_azertype"
    wordUserAzertype.type = "text"
    wordUserAzertype.setAttribute("autocomplete", "off")
    wordUserAzertype.setAttribute("autocorrect", "off")
    wordUserAzertype.setAttribute("autocapitalize", "off")
    wordUserAzertype.setAttribute("spellcheck", "false")
    wordUserAzertype.name = "fake"
    wordUserAzertype.name = Math.random()
    wordUserAzertype.autocomplete = "off"
    wordUserAzertype.spellcheck = false
    wordUserAzertype.autocorrect = "off"
    containerPartGameAzertype.append(wordUserAzertype)

    let validationAzertype = document.createElement("div")
    validationAzertype.className = "validation_azertype"
    validationAzertype.textContent = "Ok"
    containerPartGameAzertype.append(validationAzertype)

    let countPointAzertype = document.createElement("div")
    countPointAzertype.className = "countpoint_azertype"
    countPointAzertype.textContent = scoreAzertype + "/" + limitedScoreAzertype[0]
    containerPartGameAzertype.append(countPointAzertype)

    let countErrorAzertype = document.createElement("div")
    countErrorAzertype.className = "counterror_azertype"
    countErrorAzertype.textContent = errorAzertype 
    containerPartGameAzertype.append(countErrorAzertype)

    let chronoAzertype = document.createElement("div")
    chronoAzertype.className = "chrono_azertype"
    chronoAzertype.textContent = timeAzertype + "s"
    containerPartGameAzertype.append(chronoAzertype)

    // event chrono
    function timeLimitedAzertype(){
        let timer = setInterval(() => {
            timeAzertype--
            chronoAzertype.textContent = timeAzertype + "s"
            updateWPMAzertype()
            scorewpmAzertype.textContent = wpmAzertype
            if(timeAzertype <= 0){
                canPlayAzertype = false
                clearInterval(timer)
                playAzertype.style.display = "block"
                containerPartGameAzertype.style.display = "none"
                timeAzertype = 60
                chronoAzertype.textContent = timeAzertype + "s"
            }
        }, 1000)
    }

    // event validation button
    function validateWordAzertype(){
        if(!canPlayAzertype){
            return
        }
        if(wordUserAzertype.value.trim() === wordAzertype.textContent){
            let oldWord = wordAzertype.textContent
            randomizeWords(wordApp)
            while(wordApp[0] === oldWord){
                randomizeWords(wordApp)
            }
            wordAzertype.textContent = wordApp[0]
                
            scoreAzertype++
            countScoreWPMAzertype++

            countPointAzertype.textContent = scoreAzertype + "/" + limitedScoreAzertype[currentLevelAzertype]

            updateWPMAzertype()
            scorewpmAzertype.textContent = wpmAzertype

            if(scoreAzertype >= limitedScoreAzertype[currentLevelAzertype]){
                scoreAzertype = 0
                currentLevelAzertype ++
            }
            if(currentLevelAzertype >= limitedScoreAzertype.length){
                countPointAzertype.textContent = "WaW :)"
            }
            wordUserAzertype.value = ""
        }else{
            errorAzertype++
            countErrorAzertype.textContent = errorAzertype
        }
    }

    // event pour valider 
    validationAzertype.addEventListener("click",() => {
        validateWordAzertype()
    })
    wordUserAzertype.addEventListener("keydown",(event) => {
        if(event.key === "Enter"){
            validateWordAzertype()
        }
    })
} 

// CODE
manageAzertype()