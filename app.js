
// Factory Function to create new players.
function Player(name, symbol) {
    return {name, symbol}
}

// Module holding the board.
const gameBoard = (() => {
    const board = [
        '❤', '❣', '💕',
        '', '', '',
        '', '', ''
    ]
    const getBoard = () => {
        return board
    }

    const fillBoard = (index, count, el) => {
        board.splice(index, count, el)
    }

    return {getBoard, fillBoard}
})()


// Object to control the flow of the game
const gameFlow = (() => {
    //  JavaScript function that will render the contents of the gameboard array to the webpage
    const board = gameBoard.getBoard()
    const box = document.querySelectorAll('.gameBox')

    const renderXO = (e) => {
        for (let i = 0; i < board.length; i++) {
            const target = e.target
            const data = target.getAttribute('data-index')
            const el = document.createElement('p')
            el.classList.add('elstyle')
            if (i === Number(data) && board[i] !== '') {
                el.textContent = `${board[i]}`
                target.appendChild(el)
            } 
        }
    }

    box.forEach(el => el.addEventListener('click', renderXO))
})()













































const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')