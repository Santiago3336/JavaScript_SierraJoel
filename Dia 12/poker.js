var API_URL = "https://deckofcardsapi.com/api/deck";
var deckId = "";
var currentCards = $("#current-cards");
var resultDisplay = $("#result");
var streakDiplay = $("#streak");
var streakCounter = 0;


function dealCards(){
    $.get(API_URL + "/new/shuffle/?deck_count=1", function(response){
        deckId = response.deck_id;
        $.get(API_URL + "/" + deckId + "/draw/?count=5", function(response){
            displayCards(response.cards);
        }, 'json');
    }, 'json');
}

function displayCards(cards){
    currentCards.empty();
    cards.forEach(function(card){
        currentCards.append(`<img src="${card.image}" alt="${card.value} de ${card.suit}">`);
    });
}

function fold(){
    resultDisplay.text("Has pasado.")
}

function call(){
    resultDisplay.text("Has igualado.")
}

function raise(){
    resultDisplay.text("Has subido la apuesta")
}

$(document).ready(function(){
    $("#deal-btn").click(function(){
        dealCards();
    });
    $("#fold-btn").click(function(){
        fold();
    });
    $("#call-btn").click(function(){
        call();
    });
    $("#raise-btn").click(function(){
        raise();
    });
});


function machineTurn(){
    var desicion = Math.floor(Math.random()*3);
    switch(desicion){
        case 0:
            fold();
            break;
        case 1:
            call();
            break;
        case 2:
            raise();
            break;
        default:
            break;
    }
}

function playerTurn() {
    console.log("Es tu turno. Selecciona una accion:");
    $("#fold-btn").show();
    $("#call-btn").show();
    $("#raise-btn").show();
}

function compareHands(playerHand, machineHand) {
    var playerValue = getValue(playerHand);
    var machineValue = getValue(machineHand);

    if (playerValue > machineValue){
        console.log("¡Ganaste!")
    } else if (playerValue < machineValue){
        console.log("Perdiste...")
    } else{
        console.log("Empate")
    }


}

function getValue(hand){
    var value = 0;
    hand.forEach(function(card){
        value += getValueOfCard(card.value);
    });
    return value
}

function getValueOfCard(cardValue){
    switch(cardValue){
        case "ACE":
            return 14;
        case "KING":
            return 13;
        case "QUEEN":
            return 12;
        case "JACK":
            return 11;
        default:
            return parseInt(cardValue)
    }
}

function playGame(){
    dealCards()

    playerTurn()

    dealCards()

    machineTurn()

    compareHands(playerHand, machineHand)
}

playGame()

