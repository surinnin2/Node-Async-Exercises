$factlist = $('.factlist')

//1.
async function getFavNum() {
    let res = await axios.get('http://numbersapi.com/23?json')
    console.log(res.data.text)
}

getFavNum()

//2.
async function getManyNums() {
    let res = await axios.get('http://numbersapi.com/1,2,3,4?json')
    for (fact in res.data) {
        let $fact = $(`<li>${res.data[fact]}</li>`)
        $factlist.append($fact)
    }
}

getManyNums()

//3.
async function get4Facts() {
    let p1 = axios.get('http://numbersapi.com/23?json')
    let p2 = axios.get('http://numbersapi.com/23?json')
    let p3 = axios.get('http://numbersapi.com/23?json')
    let p4 = axios.get('http://numbersapi.com/23?json')

    let res1 = await p1
    let res2 = await p2
    let res3 = await p3
    let res4 = await p4

    let reslist = []
    reslist.push(res1, res2, res3, res4)
    
    for (res in reslist) {
        let $fact = $(`<li>${reslist[res].data.text}</li>`)
        $factlist.append($fact)
    }

}

get4Facts()