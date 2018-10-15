var rl = require(`readline-sync`)
let bank = 500;
let bet;
var point = null;
let playAgain = true
// let point = roll;

roll = function() {
    my_roll = (Math.ceil((Math.random()*6))+Math.ceil((Math.random()*6)));
    console.log("you rolled a ", my_roll)
    return my_roll
}
let betPrompt = function(){
    bet = rl.questionInt(`How much do you want to bet?  \n`)
    if(bet > bank){
        console.log(`You don't have enough money to make that bet.  You only have ${bank}`)
        betPrompt();
    }
    else(bank = bank - bet)
    return bet
}

crap = function(point){
    if (point == null){
        new_roll = roll()
        if (new_roll == 7 || new_roll == 11){
            console.log("you win")
            bank = bank + (bet * 2)
        } else {
            var point = new_roll
            console.log(`Your point is ${point}.`)
            crap(point)
        }
    } else {
        new_roll = roll()
        if (new_roll == point){
            console.log("you win")
            bank = bank + (bet * 2)
        } else if (new_roll == 7 || new_roll == 11){
            console.log("you lose")
        } else {
           console.log("you'll have to roll again") 
           crap(point)
        }
    }
}

while(playAgain){
    bet = betPrompt();

    crap()

    console.log("your bank is", bank)
    playAgain = rl.question('Do you want to play again? ', {
        trueValue: ['yes', 'yeah', 'yep', 'y'],
        falseValue: ['no', 'nah', 'nope', 'n']
      });
}