// This is a factory 🏭 function to create players for the game.
function Player(name) {
    return {name}
}


// Module and method to open the modal.🌞
const openModal = (() => {
    const startGame = document.getElementById('start')
    const modal = document.getElementById('modal')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module and method to close the modal.🌚
const closeModal = (() => {
    const playGame = document.getElementById('playGame')
    const modal = document.getElementById('modal')

    const clearModal = () => {
        modal.style.display = 'none'
    }

    playGame.addEventListener('click', clearModal)
})()


// This module creates the board for the game 🎮 and also provides 
// methods to fill the board and reset the board.🔨
const gameBoard = (() => {
    const board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    const getBoard = () => {
        return board
    }

    const fillBoard = (index, count, el) => {
        board.splice(index, count, el)
    }

    const resetBoard = () => {
        console.log('Board resetted')
    }

    return {getBoard, fillBoard, resetBoard}
})()


let x = true // This is the only global variable. It dictates Xs and Os turn.


// This module get the player's name from the dom and stores it. 🔒
const createPlayers = (() => {
    // getting input element from the dom.
    const inputOne = document.querySelector('.inputOne')
    const inputTwo = document.querySelector('.inputTwo')

    const createP1 = () => {
        if (inputOne.value) {
            let p1 = Player(inputOne.value)
            inputOne.value = ''
            return p1
        }
    }

    const createP2 = () => {
        if (inputTwo.value) {
            let p2 = Player(inputTwo.value)
            inputTwo.value = ''
            return p2
        }
    }

    return {createP1, createP2}
})()


// This module creates Xs and Os and renders them to the dom 
// and also fills the board array in the gameBoard module. ❌ 🔮 ⭕
const gameFlow = (() => {
    const board = gameBoard.getBoard()
    const box = document.querySelectorAll('.gameBox')

    const renderX = (e) => {
        for (let i = 0; i < board.length; i++) {
            const target = e.target
            const data = target.getAttribute('data-index')
            const el = document.createElement('p')
            el.classList.add('elstyle')
            if (board[i] === '') {
                if (i === Number(data)) {
                    gameBoard.fillBoard(i, 1, '❌')
                    el.textContent = `${board[i]}`
                    target.appendChild(el)
                    x = false
                } 
            }
        }
    }

    const renderO = (e) => {
        for (let i = 0; i < board.length; i++) {
            const target = e.target
            const data = target.getAttribute('data-index')
            const el = document.createElement('p')
            el.classList.add('elstyle')
            if (board[i] === '') {
                if (i === Number(data)) {
                    gameBoard.fillBoard(i, 1, '⭕')
                    el.textContent = `${board[i]}`
                    target.appendChild(el)
                    x = true
                } 
            }
        }
    }

    box.forEach(el => el.addEventListener('click', ((e) => {
        if (x) {
            renderX(e)
        } else {
            renderO(e)
        }
    })))
})()


// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
const playGame = (() => {
    const board = gameBoard.getBoard()
    // getting the buttons from the dom.
    const btn1 = document.getElementById('nameOne')
    const btn2 = document.getElementById('nameTwo')

    let a, b

    btn1.addEventListener('click', () => {
        a = createPlayers.createP1()
    })
    btn2.addEventListener('click', () => {
        b = createPlayers.createP2()
    })

    const checkBoard = () => {
        let check = []
        board.forEach(el => el !== '' ? check.push(true) : check.push(false))
        let trueArr = check.filter(el => el === true)
        let x = board.filter(el => el === '❌')
        let o = board.filter(el => el === '⭕')

        if (trueArr.length >= 3) {
            if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
                // remember, if you don't put name in the input; it throws an error for this case.
                if (board[0] === '❌') {
                    console.log(`${a.name} wins`)
                } else {
                    console.log(`${b.name} wins`)
                }
            } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                console.log('win')
            } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                console.log('win')
            } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                console.log('win')
            } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                console.log('win')
            } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                console.log('win')
            } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                console.log('win')
            } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                console.log('win')
            } else if (x.length === 5 &&  o.length === 4) {
                console.log('draw')
            }
        } 
    }

    setInterval(() => {
        checkBoard()
    }, 1000)
})()
