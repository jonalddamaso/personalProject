// Challenge 1: Your Age in Days
function ageInDays() {

    // you're birthday
    var birthYear = prompt("What year were you born?");
    var birthDay = prompt('What day were you born?');
    var birthMonth = prompt('What month were you born?');
    // current date
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    var yearBirth = Math.abs(year - birthYear);
    console.log(yearBirth);
    var monthBirth = Math.abs(month - birthMonth);
    console.log(monthBirth);
    var dayBirth = Math.abs(day - birthDay);
    console.log(dayBirth);
    
    

    // var ageInDayss = (2022 - birthYear) * 365;
    // var ageInMonth = (2022 - birthYear) * 12;
    // var ageInYear = (2022 - birthYear);
    var h1Year = document.createElement('h1');
    // var spanMonth = document.createElement('span');
    // var spanDays = document.createElement('span');


    var textADays = document.createTextNode('You are '+ yearBirth + ' years, '+ monthBirth + ' months and '+ dayBirth+ ' days old' );
    // var textAMonth = document.createTextNode('You are '+ ageInMonth + ' months old and ');
    // var textAYear = document.createTextNode('You are '+ ageInYear + ' years old ');
    h1Year.setAttribute('id', 'ageInYears');
    // spanMonth.setAttribute('id', 'ageInMonths');
    // spanDays.setAttribute('id', 'ageInDays');
    
    h1Year.appendChild(textADays);
    document.getElementById('flex-box-result').appendChild(h1Year);
    // spanMonth.appendChild(textAMonth);
    // document.getElementById('flex-box-result').appendChild(spanMonth);
    // spanDays.appendChild(textADays);
    // document.getElementById('flex-box-result').appendChild(spanDays);


    
}

function reset() {
    // document.getElementById('ageInDays').remove();
    document.getElementById('ageInYears').remove();
    // document.getElementById('ageInMonths').remove();
}



// Challenge 2: Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type&gif&size=small";
    image.setAttribute('id', 'imageCat');
    div.appendChild(image);
}
//  to Enable and Disable the reset
function triggerThis(){
    if(document.getElementById('flex-cat-gen').innerHTML ===""){
        document.getElementById('resetCatGen').disabled = true;
    }
}
function resetCatGen() {
    document.getElementById('imageCat').remove();
}

//  Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
    // console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    // console.log('Computer choice: ', botChoice);
    
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost| bot won
    // console.log(results);
    
    message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
    // console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

    // ramdom number for rps integers
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
    // decide who ganno win
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice]
    return [yourScore, computerScore];
}
    // message function
function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

    // Front end rps
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.setAttribute('id', 'humanDivID');
    botDiv.setAttribute('id', 'botDivID');
    messageDiv.setAttribute('id', 'messageDivID');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50,233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function resetRPS() {
    
    document.getElementById('humanDivID').remove();
    document.getElementById('botDivID').remove();
    document.getElementById('messageDivID').remove();

    var newRockImg = document.createElement('img');
    var newPaperImg = document.createElement('img');
    var newScissorsImg = document.createElement('img');
    // rock
    newRockImg.setAttribute('id', 'rock');
    newRockImg.setAttribute('src', 'static/images/rock.png');
    newRockImg.setAttribute('height', 150);
    newRockImg.setAttribute('width',150);
    newRockImg.setAttribute('onclick', 'rpsGame(this)');
    // paper
    newPaperImg.setAttribute('id', 'paper');
    newPaperImg.setAttribute('src', 'static/images/paper.png');
    newPaperImg.setAttribute('height', 150);
    newPaperImg.setAttribute('width',150);
    newPaperImg.setAttribute('onclick', 'rpsGame(this)');
    // scissors
    newScissorsImg.setAttribute('id', 'scissors');
    newScissorsImg.setAttribute('src', 'https://thumbs.dreamstime.com/b/female-hand-sign-victory-sign-peace-sign-vector-color-flat-illustration-isolated-white-background-web-83128345.jpg');
    newScissorsImg.setAttribute('height', 150);
    newScissorsImg.setAttribute('width',150);
    newScissorsImg.setAttribute('onclick', 'rpsGame(this)');
    
    document.getElementById('flex-box-rps-div').appendChild(newRockImg);
    document.getElementById('flex-box-rps-div').appendChild(newPaperImg);
    document.getElementById('flex-box-rps-div').appendChild(newScissorsImg);
}


// Challenge 4: Change the button of all Buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++ ) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green'){
        buttonsGreen();
    } else if (buttonThingy.value === 'random'){
        randomColors();
    } else if (buttonThingy.value === 'reset'){
        buttonsColorReset();
    }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (i=0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}


// Challenge 5: Blackjack game=
let blackjackGame = {
    'you' : {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2': 2, '3':3, '4': 4, '5':5, '6': 6, '7': 7,'8': 8,'9': 9,'10': 10,'K': 10,'J': 10,'Q': 10,'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,

};
const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackHit() {
    if (blackjackGame['isStand'] === false){
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}
function blackjackDeal(){
    if (blackjackGame['turnsOver'] === true){

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (i=0; i < yourImages.length; i++){
            yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++){
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

            // reset from the original 
        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;


        /* second player
        let winner = computeWinner();
        showResult(winner);
        showResult(computeWinner());
        */
    }
}
// updating score
function updateScore(card, activePlayer){
    if (card === 'A'){
        // if adding 11 keeps me below 21, add 11, Otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardsMap'][card] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }

    }  else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    } 
}
// show in frontend
function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// send player Dealer logic/ 2nd player
async function dealerLogic(){
    blackjackGame['isStand']= true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver']= true;
    let winner = computeWinner();
    showResult(winner);
}

// compute the winner and return who just won
// update the wins, losses, and draws
function computeWinner(){
    let winner;

    if (YOU['score'] <= 21){
        // condition: higher score than dealer or when dealer busts but you're score less than 21
        if (YOU['score'] > DEALER['score'] || (DEALER['score']> 21)){
            blackjackGame['wins']++;
            winner = YOU;
        }else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    // condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame['losses']++;
        winner = DEALER;

    // condition: when you and dealer bust!
    } else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }

    // blackjackGame['wins']++;
    console.log(blackjackGame);
    return winner;
}

function showResult (winner){
    let message, messageColor;
    
    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}

