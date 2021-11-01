// Factory 🏭 function to create players for the game.
function Player(name) {
    return {name}
}


// Module & method to open the modal for p.v.p🌞
const openModal = (() => {
    const startGame = document.getElementById('start')
    const modal = document.getElementById('modal')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module & method to close the modal p.v.p 🌚
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


// Module & method to open the modal for p.v.ai
const openModal1 = (() => {
    const startGame = document.getElementById('ai')
    const modal = document.getElementById('modal1')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()


// Module & method to close the modal for p.v.ai
const closeModal1 = (() => {
    const modal = document.getElementById('modal1')
    const playGame = document.getElementById('playAI')
    const domBoard = document.querySelector('.gameBoard') 
    const mainTwo = document.getElementById('mainTwo') 

    const closeModals = () => {
        modal.style.display = 'none'
        domBoard.style.display = 'grid'
        mainTwo.style.display = 'none'
    }

    playGame.addEventListener('click', closeModals)
})()


// Module to end the game and go to home ⛪
const home = (() => {
    // const homeBtn = document.getElementById('home')
    const homeBtn1 = document.getElementById('home1')
    const boxes = document.querySelectorAll('.gameBox')
    const results = document.querySelector('.results')

    function goAgain() {
        results.innerHTML = ''
        gameBoard.resetBoard()
        gameBoard.setBoard()

        for (let i = 0; i < boxes.length; i++) {
            while (boxes[i].firstChild) {
                boxes[i].removeChild(boxes[i].firstChild);
            }
        }
    }

    // function gotoHome() {
    //     const mainTwo = document.getElementById('mainTwo') 
    //     const domBoard = document.querySelector('.gameBoard') 
        
    //     mainTwo.style.display = 'grid'
    //     domBoard.style.display = 'none'
    // }

    function gotoHome1() {
        const modal = document.getElementById('mainThree')
        const domBoard = document.querySelector('.gameBoard') 
        const mainTwo = document.getElementById('mainTwo')

        mainTwo.style.display = 'grid'
        modal.style.display = 'none'
        domBoard.style.display = 'none'
    }

    // homeBtn.addEventListener('click', (() => {gotoHome(), goAgain()}))
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
    // let num = Math.ceil(Math.random() * 9) - 1
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
    const board = gameBoard.getBoard()
    const box = document.querySelectorAll('.gameBox')
    const data = []
    box.forEach(el => data.push(el.getAttribute('data-index')))

    let x = true

    const renderO = () => {
        x = true 
        let number = generateRandom()
        let str = number.toString()
        const ell = document.createElement('p')

        for (let i = 0; i < board.length; i++) {
            gameBoard.fillBoard(number, 1, '⭕')
            if (board[i] === '') {
                if (str === data[0]) {
                    target = document.querySelector('[data-index="0"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[1]) {
                    target = document.querySelector('[data-index="1"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[2]) {
                    target = document.querySelector('[data-index="2"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[3]) {
                    target = document.querySelector('[data-index="3"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[4]) {
                    target = document.querySelector('[data-index="4"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[5]) {
                    target = document.querySelector('[data-index="5"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[6]) {
                    target = document.querySelector('[data-index="6"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[7]) {
                    target = document.querySelector('[data-index="7"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
                if (str === data[8]) {
                    target = document.querySelector('[data-index="8"]')
                    ell.classList.add('elstyle')
                    ell.textContent = '⭕'
                    target.appendChild(ell)
                }
            }
            console.log(gameBoard.getBoard())
            console.log(number)
        }

        arr.push(number)
    }

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
                    arr.push(i)
                    console.log(arr)
                    renderO()
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



// This module creates the logic to check the winner 🏆 & the loser 😭 || a draw 😴.
// It also display the result to the players. 
// (Player vs AI)
const checkWinners = (() => {
    const btn = document.getElementById('nameZero')

    let player

    btn.addEventListener('click', () => {
        player = createPlayer.createP0()
        console.log(player)
    })

    
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
    // gameFlows()
}, 100)

