const quotes = [
    {
        quote:"Happiness in this world, when it comes, comes incidentally.",
        author:"'The Scarlet Letter'",
    },
    {
        quote:"Dare and the world always yield.",
        author:"'Vanity Fair'",
    },
    {
        quote:"Frailty, thy name is woman!",
        author:"'Hamlet'",
    },
    {
        quote:"Happy families are all alike; every unhappy family is unhappy in its own way.",
        author:"'Anna Karenina'",
    },
    {
        quote:"Do not, for one repulse, give up the purpose that you resolved to effect.",
        author:"'The Tempest'",
    },
    {
        quote:"People do not lack strength; they lack will.",
        author:"' Notre-Dame de Paris'",
    }

]

const quote = document.querySelector("#quote span:first-child");  //첫번째 span
const author = document.querySelector("#quote span:last-child");  //두번째 span


const random=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=random.quote;
author.innerText=random.author;
