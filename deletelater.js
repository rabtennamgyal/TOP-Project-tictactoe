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
