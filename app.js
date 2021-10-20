function Player(name) {
    return {name}
}

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


let x = true // This is the only global variable. It dictates Xs and Os.

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

const getName = (() => {
    const btnOne = document.querySelector('.playerOneName')
    const btnTwo = document.querySelector('.playerTwoName')
    const one = document.querySelector('.inputOne')
    const two = document.querySelector('.inputTwo')
    let p1name, p2name

    const s1 = () => {
        if (one.value) {
            p1name = one.value
            one.value = ''
            console.log(p1name)
        }
    }

    const s2 = () => {
        if (two.value) {
            p2name = two.value
            two.value = ''
            console.log(p2name)
        }
    }

    btnOne.addEventListener('click', s1)
    btnTwo.addEventListener('click', s2)
})()

const playGame = (() => {
    const board = gameBoard.getBoard()

    const checkBoard = () => {
        let check = []
        board.forEach(el => el !== '' ? check.push(true) : check.push(false))
        let trueArr = check.filter(el => el === true)
        let x = board.filter(el => el === '❌')
        let o = board.filter(el => el === '⭕')

        if (trueArr.length >= 3) {
            if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
                console.log('win')
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

// start Game
const startGame = (() => {
    const playGame = document.getElementById('playGame')
    const modal = document.getElementById('modal')

    const clearModal = () => {
        modal.style.display = 'none'
    }

    playGame.addEventListener('click', clearModal)
})()

// open modal
const openModal = (() => {
    const startGame = document.getElementById('start')
    const modal = document.getElementById('modal')

    const openModals = () => {
        modal.style.display = 'grid'
    }

    startGame.addEventListener('click', openModals)
})()
