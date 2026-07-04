console.log("memorygame.js fonctionne")

// CONSTANCE
// html
let container_memorygame = document.querySelector(".container_memorygame")
// tableau élément cards
let cards = ["1", "1", "2", "2", "3", "3", "4", "4"]
// autres
let firstCard = null
let secondCard = null
let canPlay = true
let coups = 0
let foundCards = 0

// FUNCTION
// melanger le tabeau de cards
function randomizeCards(tab){
    let i, j, tmp;
    for(i = tab.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1))
        tmp = tab[i]
        tab[i] = tab[j]
        tab[j] = tmp
    }
    return tab
}

// manage memory game
function manageMemoryGame(){
    // compte coups
    let coupsMemorygame = document.createElement("div")
    coupsMemorygame.className = "coups_memorygame"
    coupsMemorygame.textContent = "0 coups"
    // button replay
    let replayMemorygame = document.createElement("div")
    replayMemorygame.className = "replay_memorygame"
    replayMemorygame.textContent = "Rejouer"
    // chronomètre
    let chronoMemorygame = document.createElement("div")
    chronoMemorygame.className = "chrono_memorygame"
    chronoMemorygame.textContent = "0"

    // chrono
    let secondes = 0
    let timer = setInterval(()=>{
        secondes++
        chronoMemorygame.textContent = secondes
    },1000)

    // rejouer
    replayMemorygame.addEventListener("click",()=>{
        container_memorygame.innerHTML = ""
        firstCard = null
        secondCard = null
        canPlay = true
        clearInterval(timer)
        randomizeCards(cards)
        manageMemoryGame()
    })

    // boucle cards
    cards.forEach(card =>{
        let memoryCards = document.createElement("div")
        memoryCards.className = "memory_cards"
        memoryCards.textContent = "?"
        memoryCards.dataset.card = card
        console.log(memoryCards.length)
        if(foundCards == cards.length){
            alert("gg")
        }
        memoryCards.addEventListener("click", () => {
            if(memoryCards === firstCard){
                return
            }
            if(!canPlay){
                return
            }
            if(memoryCards.dataset.found === "true"){
                return
            }
            memoryCards.textContent = memoryCards.dataset.card
            if(firstCard === null){
                firstCard = memoryCards
            }else if(secondCard === null){
                secondCard = memoryCards
                console.log(firstCard.dataset.card, secondCard.dataset.card)
            }
            if(firstCard && secondCard){
                console.log("comparer")
                if(firstCard.dataset.card === secondCard.dataset.card){
                    firstCard.dataset.found = "true"
                    secondCard.dataset.found = "true"
                    alert("GJ")
                    firstCard = null
                    secondCard = null
                    foundCards += 2
                    coups++
                    coupsMemorygame.textContent =
                    coups + " coups"
                }else{
                    let card1 = firstCard
                    let card2 = secondCard
                    canPlay = false
                    setTimeout(() => {
                        card1.textContent = "?"
                        card2.textContent = "?"
                        canPlay = true
                    }, 2000)
                    firstCard = null
                    secondCard = null
                } 
            }
        })
        container_memorygame.append(memoryCards)
        if(!canPlay){
            alert("GG!")
            clearInterval(timer)
        }
    })
    container_memorygame.append(replayMemorygame)
    container_memorygame.append(chronoMemorygame)
    container_memorygame.append(coupsMemorygame)
}

// CODE
console.log(randomizeCards(cards))
manageMemoryGame()