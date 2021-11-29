// 😎

// Factory 🏭 function to create players for the game.
function Player(name) {
    return {name}
}


// Module & method to open the modal for 🌞

// (Player Vs Player)
const openModal = (() => {
    const startGame = document.getElementById('start')
    const modal = document.getElementById('modal')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module & method to close the modal 🌚

// (Player Vs Player)
const closeModal = (() => {
    const playGame = document.getElementById('playGame')
    const modal = document.getElementById('modal')
    const mainOne = document.getElementById('mainOne')
    const mainTwo = document.getElementById('mainTwo')

    const clearModal = () => {
        modal.style.display = 'none'
        mainOne.style.display = 'grid'
        mainTwo.style.display = 'none'
    }

    playGame.addEventListener('click', clearModal)
})()


// Module & method to open the modal for p.v.ai

// (Player Vs AI)
const openModal1 = (() => {
    const startGame = document.getElementById('ai')
    const modal = document.getElementById('modal1')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module & method to close the modal for p.v.ai

// (Player Vs AI)
const closeModal1 = (() => {
    const modal = document.getElementById('modal1')
    const playGame = document.getElementById('playAI')
    const mainTwo = document.getElementById('mainTwo') 
    const mainFour = document.getElementById('mainFour')

    const closeModals = () => {
        modal.style.display = 'none'
        mainTwo.style.display = 'none'
        mainFour.style.display = 'grid'
    }

    playGame.addEventListener('click', closeModals)
})()


// Module to end the game and go to homepage ⛪
const home = (() => {
    const homeBtn1 = document.getElementById('home1')
    const boxes = document.querySelectorAll('.gameBox')
    const boxes1 = document.querySelectorAll('.gameBox1')
    const results = document.querySelector('.results')
    const mainOne = document.getElementById('mainOne')
    const mainFour = document.getElementById('mainFour')

    function goAgain() {
        results.innerHTML = ''
        gameBoard.resetBoard()
        gameBoard.setBoard()
        gameBoard2.resetBoard2()
        gameBoard2.setBoard2()
        mainOne.style.display = 'none'
        mainFour.style.display = 'none'
        arr = []

        for (let i = 0; i < boxes.length; i++) {
            while (boxes[i].firstChild) {
                boxes[i].removeChild(boxes[i].firstChild);
            }
        }

        for (let i = 0; i < boxes1.length; i++) {
            while (boxes1[i].firstChild) {
                boxes1[i].removeChild(boxes1[i].firstChild);
            }
        }
    }

    // This function takes the players from the gameboard pages to the Homepage. ⛪
    function gotoHome() {
        const modal = document.getElementById('mainThree')
        const mainTwo = document.getElementById('mainTwo')

        mainTwo.style.display = 'grid'
        modal.style.display = 'none'
    }

    homeBtn1.addEventListener('click', (() => {gotoHome(), goAgain()}))
})()


// This module creates the board for the game 🎮 & also 
// provides methods to fill the board & reset it 🔨.

// (Player vs Player)
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


// This module creates the board for the game 🎮 & also 
// provides methods to fill the board & reset it 🔨.

// (Player vs AI)
const gameBoard2 = (() => {
    let board2 = [
        '', '', '',
        '', '', '',
        '', '', ''
    ]

    const getBoard2 = () => {
        return board2
    }

    const fillBoard2 = (index, count, el) => {
        board2.splice(index, count, el)
    }

    const resetBoard2 = () => {
        board2.splice(0, board2.length)
    }

    const setBoard2 = () => {
        board2 = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]
    }

    return {getBoard2, fillBoard2, resetBoard2, setBoard2}
})()


// This module gets the player's name from the dom & creates a function that 
// creates player objects using the factory function from line 2 & returns it. 

// (Player Vs Player)
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


// This module gets the player's name from the dom & creates a function that 
// creates player objects using the factory function from line 2 & returns it. 

// (Player Vs AI)
const createPlayer = (() => {
    const input = document.querySelector('.inputPlayer')

    const createP0 = () => {
        if (input.value) {
            let player = Player(input.value)
            input.value = ''
            return player
        }
    }

    return {createP0}
})()


// This module creates Xs and Os & renders them to the dom 
// & also fills the board array in the gameBoard module. ❌ 🔮 ⭕

// (Player Vs Player)
const gameFlows = () => {
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

// this array will be used as a means to check if a number already exist here.
// If a number in present in the array, then it means it's corresponding dom element has 
// already been filled.
let arr = [] 

// This function generates a random number 🙄
// Make it return a number that isn't in the arr variable.

function generateRandom() {
    let newArr = []

    for (let i = 0; i < 8; i++) {
        if (!arr.includes(i)) {
            newArr.push(i)
        }
    }

    let random = newArr[Math.floor(Math.random() * newArr.length)]
    
    return random
}


// This module creates Xs and Os & renders them to the dom 
// & also fills the board array in the gameBoard module. ❌ 🔮 ⭕

// (Player Vs AI)
const gameFlow = () => {
    const board2 = gameBoard2.getBoard2()
    const box = document.querySelectorAll('.gameBox1')
    const data = []
    box.forEach(el => data.push(el.getAttribute('data-index')))

    let x = true

    const renderO = () => {
        x = true 
        let number = generateRandom()
        let str
        str = number.toString()
        const ell = document.createElement('p')

        for (let i = 0; i < board2.length; i++) {
            gameBoard2.fillBoard2(number, 1, '⭕')
            if (board2[i] === '') {
                if (str === data[0]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="0"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[1]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="1"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[2]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="2"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[3]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="3"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[4]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="4"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[5]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="5"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[6]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="6"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[7]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="7"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[8]) {
                    target = document.getElementById('mainFour').querySelector('[data-index="8"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
            }
        }

        arr.push(number)
    }

    const renderX = (e) => {
        x = false
        for (let i = 0; i < board2.length; i++) {
            const target = e.target
            const data = target.getAttribute('data-index')
            const el = document.createElement('p')
            el.classList.add('elstyle')
            if (board2[i] === '') {
                if (i === Number(data)) {
                    gameBoard2.fillBoard2(i, 1, '❌')
                    el.textContent = `${board2[i]}`
                    target.appendChild(el)
                    arr.push(i)

                    setTimeout(() => {
                        renderO()
                    }, 1000)
                } 
            }
        }
    }

    box.forEach(el => el.addEventListener('click', (e) => {
        if (x) {
            renderX(e)
        }
    }))
}


// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
// It also display the result to the players. 

// (Player vs Player)
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
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                if (board[0] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                if (board[1] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                if (board[2] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                if (board[3] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                if (board[6] === '❌') {
                    final = `${a.name} wins`
                } else {
                    final = `${b.name} wins`
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            } else if (x.length === 5 &&  o.length === 4) {
                final = 'It is a lousy draw.'
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard.resetBoard()
            }
        } 
    }

    setInterval(() => {
        checkBoard()
    }, 1000)
})()


// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
// It also display the result to the players. 

// (Player vs AI)
const checkWinners = (() => {
    const btn = document.getElementById('nameZero')
    const results = document.getElementById('mainThree')
    const resultDisplay = document.querySelector('.results')
        
    let player
        
    btn.addEventListener('click', () => {
        player = createPlayer.createP0()
    })

    const displayResult = () => {
        const el = document.createElement('h1')
        el.classList.add('h1style')
        el.textContent = final
        resultDisplay.appendChild(el)
        results.style.display = 'flex'
    }
        
    const checkBoard = () => {
        const board = gameBoard2.getBoard2()
        let check = []
        board.forEach(el => el !== '' ? check.push(true) : check.push(false))
        let trueArr = check.filter(el => el === true)
        let x = board.filter(el => el === '❌')
        let o = board.filter(el => el === '⭕')

        if (trueArr.length >= 3) {
            if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
                if (board[0] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
                if (board[0] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
                if (board[0] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
                if (board[1] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
                if (board[2] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
                if (board[2] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
                if (board[3] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
                if (board[6] === '❌') {
                    final = `${player.name} wins 🦄`
                } else {
                    final = 'AI Wins 👾'
                }
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            } else if (x.length === 5 &&  o.length === 4) {
                final = 'It is a lousy draw. 😑'
                setTimeout(() => {
                    displayResult()
                }, 1000)
                gameBoard2.resetBoard2()
            }
        } 
    }
        
    setInterval(() => {
        checkBoard()
    })
})()



// This module will restart the game & clear the gameboard. 🧹
const restartGame = (() => {
    const restart = document.getElementById('restartBtn')
    const boxes = document.querySelectorAll('.gameBox')
    const boxes1 = document.querySelectorAll('.gameBox1')
    const results = document.querySelector('.results')
    const mainThree = document.getElementById('mainThree')

    // dom element of mainOne and mainTwo
    const one = document.getElementById('mainOne')
    const two = document.getElementById('mainFour')

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

    function goAgain1() {
        mainThree.style.display = 'none'
        results.innerHTML = ''
        gameBoard2.setBoard2()
        arr = []

        for (let i = 0; i < boxes1.length; i++) {
            while (boxes1[i].firstChild) {
                boxes1[i].removeChild(boxes1[i].firstChild);
            }
        }
    }

    restart.addEventListener('click', (() => {
        if (one.style.display === 'grid') {
            goAgain()
        }

        if (two.style.display === 'grid') {
            goAgain1()
        }
    }))
})()


// Player Vs AI
setInterval(() => {
    gameFlow()
}, 100)

// Player Vs Player
setInterval(() => {
    gameFlows()
}, 100)

