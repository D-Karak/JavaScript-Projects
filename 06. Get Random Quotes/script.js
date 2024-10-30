//create an arrey of objects of qoutes
const quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        by: "Oscar Wilde"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        by: "Albert Einstein"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        by: "Robert Frost"
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        by: "Ralph Waldo Emerson"
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        by: "Mark Twain"
    },
    {
        quote:"Life is what happens to us while we are making other plans.",
        by: "Allen Saunders"
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        by: "Winston Churchill"
    },
    {
        quote:"The only way to do great work is to love what you do.",
        by: "Steve Jobs"
    },
    {
        quote:"You miss 100% of the shots you don’t take.",
        by: "Wayne Gretzky"
    },
    {
        quote:"It is never too late to be what you might have been.",
        by: "George Eliot"
    },
];

let quotePara=document.getElementById("quotes");
let author=document.getElementById("author");
let quoteBtn=document.getElementById("quote-button");

function getRandomQuote(){
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];//get random object from the array of objects
    //showing the key values of the object
    quotePara.textContent=randomQuote.quote;
    author.textContent=randomQuote.by;
}
getRandomQuote()//will show the output of the function defaultly
quoteBtn.addEventListener("click",getRandomQuote)//will show the output of the function when the button is clicked

