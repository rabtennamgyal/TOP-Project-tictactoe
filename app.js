// Factory 🏭 function to create players for the game.
function Player(name) {
    return {name}
}


// Module & method to open the modal.🌞
const openModal = (() => {
    const startGame = document.getElementById('start')
    const modal = document.getElementById('modal')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module & method to close the modal.🌚
const closeModal = (() => {
    const playGame = document.getElementById('playGame')
    const modal = document.getElementById('modal')
    const domBoard = document.querySelector('.gameBoard') // The dom element where Xs & Os will be rendered.
    const mainTwo = document.getElementById('mainTwo') 

    const clearModal = () => {
        modal.style.display = 'none'
        domBoard.style.display = 'grid'
        mainTwo.style.display = 'none'
    }

    playGame.addEventListener('click', clearModal)
})()


// Module to end the game and go to home ⛪
const home = (() => {
    const homeBtn = document.getElementById('home')
    const homeBtn1 = document.getElementById('home1')
    const boxes = document.querySelectorAll('.gameBox')
    const results = document.querySelector('.results')

    function goAgain() {
        results.innerHTML = ''
        gameBoard.setBoard()

        for (let i = 0; i < boxes.length; i++) {
            while (boxes[i].firstChild) {
                boxes[i].removeChild(boxes[i].firstChild);
            }
        }
    }

    function gotoHome() {
        const mainTwo = document.getElementById('mainTwo') 
        const domBoard = document.querySelector('.gameBoard') 
        
        mainTwo.style.display = 'grid'
        domBoard.style.display = 'none'
    }

    function gotoHome1() {
        const modal = document.getElementById('mainThree')
        const domBoard = document.querySelector('.gameBoard') 
        const mainTwo = document.getElementById('mainTwo')

        mainTwo.style.display = 'grid'
        modal.style.display = 'none'
        domBoard.style.display = 'none'
    }

    homeBtn.addEventListener('click', (() => {gotoHome(), goAgain()}))
    homeBtn1.addEventListener('click', (() => {gotoHome1(), goAgain()}))
})()


// This module creates the board for the game 🎮 & also 
// provides methods to fill the board & reset it 🔨.
const gameBoard = (() => {
    let board = [
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
        board.splice(0, board.length)
    }

    const setBoard = () => {
        board = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    return {getBoard, fillBoard, resetBoard, setBoard}
})()


// This module gets the player's name from the dom & creates a function that
// creates player objects using the factory function from line 2 & returns it.
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


// This module creates Xs and Os & renders them to the dom 
// & also fills the board array in the gameBoard module. ❌ 🔮 ⭕
const gameFlow = () => {
    const board = gameBoard.getBoard()
    const box = document.querySelectorAll('.gameBox')
    let x = true // Put this in the global scope if there is an error.

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
}


// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
// It also display the result to the players. 
const checkWinner = (() => {
    const btn1 = document.getElementById('nameOne')
    const btn2 = document.getElementById('nameTwo')

    const results = document.getElementById('mainThree')
    const resultDisplay = document.querySelector('.results')

    let final, a, b

    btn1.addEventListener('click', () => {
        a = createPlayers.createP1()
    })
    btn2.addEventListener('click', () => {
        b = createPlayers.createP2()
    })


    const displayResult = () => {
        const el = document.createElement('h1')
        el.classList.add('h1style')
        el.textContent = final
        resultDisplay.appendChild(el)
        results.style.display = 'flex'
    }

    const checkBoard = () => {
        console.log('still going')
        const board = gameBoard.getBoard()
        let check = []
        board.forEach(el => el !== '' ? check.push(true) : check.push(false))
        let trueArr = check.filter(el => el === true)
        let x = board.filter(el => el === '❌')
        let o = board.filter(el => el === '⭕')

        if (trueArr.length >= 3) {
            if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                if (board[1] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                if (board[3] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                if (board[6] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
                gameBoard.resetBoard()
            } else if (x.length === 5 &&  o.length === 4) {
                final = 'It is a lousy draw.'
                displayResult()
                gameBoard.resetBoard()
            }
        } 
    }

    setInterval(() => {
        checkBoard()
    }, 1000)
})()



// This module will restart the game & clear the gameboard. 🧹
const restartGame = (() => {
    const mainThree = document.getElementById('mainThree')
    const restart = document.getElementById('restartBtn')
    const boxes = document.querySelectorAll('.gameBox')
    const results = document.querySelector('.results')

    function goAgain() {
        mainThree.style.display = 'none'
        results.innerHTML = ''
        gameBoard.setBoard()

        for (let i = 0; i < boxes.length; i++) {
            while (boxes[i].firstChild) {
                boxes[i].removeChild(boxes[i].firstChild);
            }
        }
    }

    restart.addEventListener('click', goAgain)
})()



// gameFlow is set in an interval because the players should always be able to 
// fill the dom with Xs and Os when they click it.
setInterval(() => {
    gameFlow()
}, 100)
