var API_URL = "https://deckofcardsapi.com/api/deck";
var deckId = "";
var currentCards = $("#current-cards");
var resultDisplay = $("#result");
var streakDiplay = $("#streak");
var streakCounter = 0;

$(document).ready(function(){
    $("#dealBtn").click(function(){
        dealCards();
    });
    $("#foldBtn").click(function(){
        fold();
    });
    $("#callBtn").click(function(){
        call();
    });
    $("#raiseBtn").click(function(){
        RadioNodeList();
    });
});

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
        currentCards.append(`<img src="${card.image} alt="${card.value} de ${card.suit}">`);
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