
const quotesMain = {
    zen: ['“When you realize nothing is lacking, the whole world belongs to you.” – Lao Tzu',
        '“Rest and be kind, you don’t have to prove anything.” – Jack Kerouac',
        '“Nothing ever goes away until it has taught us what we need to know.” – Pema Chödrön',
        '“A man is great not because he hasn’t failed; a man is great because failure hasn’t stopped him.” – Confucius',
        '"Snuggle the struggle." - Ryan McDaniel'],
    motivate: ['"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
        '"The road to success and the road to failure are almost exactly the same." — Colin R. Davis',
        '“Don’t let yesterday take up too much of today.” — Will Rogers',
        '“Experience is a hard teacher because she gives the test first, the lesson afterwards.” ―Vernon Sanders Law',
        '“When we strive to become better than we are, everything around us becomes better too.” — Paulo Coelho'],
    deep: ['"Think of yourself as dead. You have lived your life. Now, take what\'s left and live it properly." - Marcus Aurelius',
        '"Every saint has a past and every sinner has a future." – Oscar Wilde',
        '“There are more things to alarm us than to harm us, and we suffer more often in apprehension than reality.” – Seneca',
        '“It is not so much our friends’ help that helps us as the confident knowledge that they will help us.” – Epicurus ',
        '“Time you enjoy wasting is not wasted time.” – Marthe Troly-Curtin'],
    funny: ['“I always wanted to be somebody, but now I realise I should have been more specific.” — Lily Tomlin',
        '“People say nothing is impossible, but I do nothing every day.” — Winnie the Pooh',
        '"Snuggle the struggle." - Ryan McDaniel',
        '“Never put off till tomorrow what you can do the day after tomorrow just as well.” - Unknown',
        '“I\'d like to live like a poor man – only with lots of money.” – Pablo Picasso'],
}




const buttonZen = document.querySelector('#buttonZen');

buttonZen.addEventListener("mouseover", function () {
    buttonZen.setAttribute("style", "background-color:#f2ecd3")
}, false);
buttonZen.addEventListener("mouseout", function () {
    buttonZen.setAttribute("style", "background-color:#92D293")
}, false);


buttonZen.addEventListener('click', function () {
    //access quotes obj at zen
    let randomIndex = Math.round((Math.random() * 4))
    console.log(randomIndex)
    let randomQuote = quotesMain.zen[randomIndex]
    //get random index from zen array of quotes
    const quote = document.querySelector("p");
    quote.innerText = randomQuote;
    document.querySelector("p").appendChild(quote);

})

const buttonMotivate = document.querySelector('#buttonMotivate');

buttonMotivate.addEventListener("mouseover", function () {
    buttonMotivate.setAttribute("style", "background-color:#f2ecd3")
}, false);
buttonMotivate.addEventListener("mouseout", function () {
    buttonMotivate.setAttribute("style", "background-color:#92D293")
}, false);

buttonMotivate.addEventListener('click', function () {
    //access quotes obj at zen
    let randomIndex = Math.round((Math.random() * 4))
    console.log(randomIndex)
    let randomQuote = quotesMain.motivate[randomIndex]
    //get random index from zen array of quotes
    const quote = document.querySelector("p");
    quote.innerText = randomQuote;
    document.querySelector("p").appendChild(quote);

})

const buttonDeep = document.querySelector('#buttonDeep');

buttonDeep.addEventListener("mouseover", function () {
    buttonDeep.setAttribute("style", "background-color:#f2ecd3")
}, false);
buttonDeep.addEventListener("mouseout", function () {
    buttonDeep.setAttribute("style", "background-color:#92D293")
}, false);

buttonDeep.addEventListener('click', function () {
    //access quotes obj at deep
    let randomIndex = Math.round((Math.random() * 4))
    console.log(randomIndex)
    let randomQuote = quotesMain.deep[randomIndex]
    //get random index from deep array of quotes
    const quote = document.querySelector("p");
    quote.innerText = randomQuote;
    document.querySelector("p").appendChild(quote);

})

const buttonFunny = document.querySelector('#buttonFunny');

buttonFunny.addEventListener("mouseover", function () {
    buttonFunny.setAttribute("style", "background-color:#f2ecd3")
}, false);
buttonFunny.addEventListener("mouseout", function () {
    buttonFunny.setAttribute("style", "background-color:#92D293")
}, false);

buttonFunny.addEventListener('click', function () {
    //access quotes obj at funny
    let randomIndex = Math.round((Math.random() * 4))
    console.log(randomIndex)
    let randomQuote = quotesMain.funny[randomIndex]
    //get random index from funny array of quotes
    const quote = document.querySelector("p");
    quote.innerText = randomQuote;
    document.querySelector("p").appendChild(quote);

})