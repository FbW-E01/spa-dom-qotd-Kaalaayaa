
const quotes = [
    "If a man insisted always on being serious, and never allowed himself a bit of fun and relaxation, he would go mad or become unstable without knowing it.",
    "If you're not scared or angry at the thought of a human brain being controlled remotely, then it could be this prototype of mine is finally starting to work.",
    "I thoroughly disapprove of duels. If a man should challenge me, I would take him kindly and forgivingly by the hand and lead him to a quiet place and kill him.",
    "It's asking a great deal that things should appeal to your reason as well as your sense of the aesthetic.",
    "People might not get all they work for in this world, but they must certainly work for all they get.",
    "Sometimes the lies you tell are less frightening than the loneliness you might feel if you stopped telling them.",
]

function randomQuotes(array) {
    return  array[Math.floor(Math.random()*array.length)]
};

console.log(randomQuotes(quotes));


const btn = document.createElement("button");
btn.innerHTML = "Random Quote";
document.body.appendChild(btn);


function mouseClickHandler(){
    log.textContent = randomQuotes(quotes)
};

btn.addEventListener("click", mouseClickHandler);
