const music_song = new Audio('music.mp3')
const turn_song = new Audio('ting.mp3')
const over_song = new Audio('gameover.mp3')
const reset = document.getElementById('resetBtn')
const turnhtml = document.getElementById('turnText')

let turn = 'X'
const playerTurn = () => {
    turnhtml.textContent = `Turn for ${turn}`
    return turn === 'X' ? 'O' : 'X'
}

let win = false
let gameContinue = true
const checkWin = () => {
    const boxTexts = document.getElementsByClassName('box')
    const check = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    check.forEach(e => {
        if (boxTexts[e[0]].innerHTML && boxTexts[e[0]].innerHTML === boxTexts[e[1]].innerHTML && boxTexts[e[0]].innerHTML === boxTexts[e[2]].innerHTML) {
            document.getElementById('turnText').textContent = `🎉 ${boxTexts[e[0]].innerHTML} has won 🎉`
            gameContinue = false
        }
    })
}

const box = document.querySelectorAll('.box')
let count = 0
box.forEach(element => {
    if (element.innerTEXT !== 'X' || element.innerTEXT !== 'O') {
        element.addEventListener('click', (e) => {
            if (gameContinue === true) {
                if (e.target.innerHTML === '') {
                    console.log(checkWin())
                    let checkWinner = checkWin()
                    console.log(checkWinner)
                    count += 1
                    if (count >= 9) {
                        console.log("its draw")
                        e.target.innerHTML = turn
                        turnhtml.textContent = 'Its Draw'
                        gameContinue = false
                    } else {
                        e.target.innerHTML = turn
                        turn = playerTurn()
                        playerTurn()
                        turn_song.play()
                        checkWin()
                    }
                }
            }
        })
    }

})

reset.onclick = () => {
    box.forEach(element => {
        gameContinue = true
        element.innerText = ''
        turn = 'X'
        playerTurn()
    })
}


