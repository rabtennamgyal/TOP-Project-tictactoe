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
    const placeholder = document.getElementById('mainTwo') 

    const clearModal = () => {
        modal.style.display = 'none'
        domBoard.style.display = 'grid'
        placeholder.style.display = 'none'
    }

    playGame.addEventListener('click', clearModal)
})()


// This module creates the board for the game 🎮 & also 
// provides methods to fill the board & reset it 🔨.
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
const gameFlow = (() => {
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
})()


// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
// It also display the result to the players. 
const checkWinner = (() => {
    const board = gameBoard.getBoard()
    // getting the buttons from the dom.
    const btn1 = document.getElementById('nameOne')
    const btn2 = document.getElementById('nameTwo')
    // getting the result display element.
    const results = document.getElementById('mainThree')
    const resultDisplay = document.querySelector('.results')

    let a, b
    let final

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
            } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                if (board[1] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                if (board[3] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                if (board[6] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                displayResult()
            } else if (x.length === 5 &&  o.length === 4) {
                final = 'It is a lousy draw.'
                displayResult()
            }
        } 
    }

    const foo = setInterval(() => {
        checkBoard()
    }, 1000)

    return {foo}
})()


// This module will restart the game & clear the gameboard. 🧹
const restartGame = (() => {
    const mainThree = document.getElementById('mainThree')
    const restart = document.getElementById('restartBtn')
    const el = checkWinner.foo

    restart.addEventListener('click', () => {
        console.log('hi')
        mainThree.style.display = 'none'
        clearInterval(el)
    })
})()



// 1. still needs work stoping the setInterval
// 2. and needs to clear the board in the dom