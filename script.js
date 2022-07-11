console.log('hello world')

const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const quoteURL = ""
let randomQuote 

const getQuote = () => {
fetch(quoteURL).then((res) => {
    return res.json()
})
.then((data) => {
randomQuote = data[Math.floor(Math.random() * data.length)]
quoteEl.innerHTML = randomQuote.quote
authorEl.innerHTML = "-" + "  " + randomQuote.author
})
return randomQuote
}

setInterval(getQuote, 8000)





