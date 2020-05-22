import React from 'react';

export async function getUser(){
    let response = await fetch("https://randomuser.me/api/?=%27json%27")
    let json = await response.json()
    let result = await json.results[0]
    return result
}

export function getPhoto(){
    let r = Math.round(Math.random() * 1000)
    return ("https://picsum.photos/id/" + r + "/2000/1200");
}

export async function getCaption(){
    try {
        /* let response = await fetch("http://quotes.stormconsultancy.co.uk/random.json")
           let json = await response.json()
            let quote = await json.quote
        */

        /*let response = await fetch("https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json")
        let json = await response.json()
        let quote = await json.quoteText */

        let response = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
        let json = await response.json()
        let quote = await json.message
        return quote
    }catch(ex){
        return "Quote machine broke"
    }
}
