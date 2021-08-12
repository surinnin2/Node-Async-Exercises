//1.
async function getCard() {
    let res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(res.data.cards[0].value, 'of', res.data.cards[0].suit)
}

getCard()

//2.
async function get2CardsFromSameDeck() {
    let res = await axios.get('http://deckofcardsapi.com/api/deck/new/draw/?count=1')
    let deckID = res.data.deck_id
    console.log(res.data.cards[0].value, 'of', res.data.cards[0].suit)
    let res2 = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
    console.log(res2.data.cards[0].value, 'of', res2.data.cards[0].suit)
}

get2CardsFromSameDeck()

//3.
let $cardpile = $('.cardpile')
let $btn = $('#btn1')
let deckID2
loadDeck()

async function loadDeck() {
    let res = await axios.get('http://deckofcardsapi.com/api/deck/new/shuffle')
    deckID2 = res.data.deck_id
}

$btn.on('click', async  function getCardFromBtn() {
    let res = await axios.get(`http://deckofcardsapi.com/api/deck/${deckID2}/draw/?count=1`)
    console.log(res)
    let $card = $(`<img src='${res.data.cards[0].image}'>`)
    $cardpile.append($card)
    if (res.remaining == 0) {
        $btn.remove()
    }
})