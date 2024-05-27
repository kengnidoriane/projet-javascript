// declarations de variables

let quote = document.querySelector("#quote");
let person = document.querySelector("#person");
let btn = document.querySelector(".btn");




const quotes = [
    {
        quote: `“We cannot solve problems with the kind of thinking we employed when we came up with them.” `,
        person: "Albert Einstein"
    },
    {
        quote: `“Learn as if you will live forever, live like you will die tomorrow.”`,
        person: "Mahatma Gandhi"
    },
    {
        quote: `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”`,
        person: "Mark Twain"
    },
    {
        quote: `“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” `,
        person: "Eleanor Roosevelt"
    },
    {
        quote: `“When you change your thoughts, remember to also change your world.” `,
        person: "Norman Vincent Peale"
    },
    {
        quote: `“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.”`,
        person: "Walter Anderson"
    },
    {
        quote: `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”`,
        person: "Diane McLaren"
    },
    {
        quote: `“Success is not final; failure is not fatal: It is the courage to continue that counts.”`,
        person: "Winston Churchill"
    },
    {
        quote: `“It is better to fail in originality than to succeed in imitation.”`,
        person: "Herman Melville"
    },
    {
        quote: `“The road to success and the road to failure are almost exactly the same.” `,
        person: "Colin R. Davis"
    },
    {
        quote: `“Success usually comes to those who are too busy to be looking for it.”`,
        person: "Henry David Thoreau"
    },
    {
        quote: `“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” `,
        person: "Dale Carnegie"
    },
    {
        quote: `“Success is getting what you want; happiness is wanting what you get.”`,
        person: "W. P. Kinsella"
    },
    {
        quote: `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”`,
        person: "Winston Churchill"
    },
    {
        quote: `“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.” `,
        person: "Alexander Graham Bell"
    }
]

btn.addEventListener("click", function(){
    let random =  Math.floor(Math.random() * quotes.length);

    quote.innerHTML= quotes[random].quote;
    person.innerHTML = quotes[random].person;
})