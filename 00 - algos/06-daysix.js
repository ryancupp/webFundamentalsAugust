// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));

// console.log(Math.random()*20);

// console.log((Math.random()*30) +10);

// console.log(Math.floor(Math.random()*2));

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Idk but we gonna be alright if we put drake on every hook",
];

console.log(lifesAnswers[4]);

function magic8ball(){
    console.log("hmmm determining your answer...");
    let randomIndex = Math.floor(Math.random()*lifesAnswers.length)
    console.log(lifesAnswers[randomIndex]);
}

magic8ball()