let size = 25
let divBoard = document.querySelector('div')
let tmpRad = 1


for(let i=0; i<size; i++) 
{
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'divrow')
    newDiv.setAttribute('id', `${i}`)
    for(let j=0; j<size; j++) 
   {
    let button = document.createElement("button")
    button.id = "button" + i + j
    button.dataset.row = i
    button.dataset.col = j
    tmpRad = tmpRad + 1 
    button.setAttribute('class', 'buttons')
    newDiv.appendChild(button)
   }
   divBoard.appendChild(newDiv)

}


let counter = 0
let changeBtns = document.querySelectorAll('button') 
let player1 = "❌"
let player2 = "⚫"

for (let i = 0; i<changeBtns.length; i++) 
{ 
    changeBtns[i].addEventListener('click', function(event) 
 {  

    if ((event.currentTarget.textContent === '❌' || 
        event.currentTarget.textContent === '⚫') === false) 
    {
        if (counter % 2 === 0) 
        {
            event.currentTarget.textContent = player1
            document.querySelector('#whosturn').textContent = "⚫'s tur"

        } else 
        { 
            event.currentTarget.textContent = player2
            document.querySelector('#whosturn').textContent = "❌'s tur"
            
    
        }
        counter++
        document.querySelector('#totaltdrag').textContent = 'Totalt drag är ' + counter
        checkWinner(event.currentTarget)
        console.log(event.currentTarget.textContent)

    }
    
 })


}

function checkWinner(clickedBtn)
{
    checkHorizontal(clickedBtn)
    checkVertical(clickedBtn)
    checkDiagonalUpDown(clickedBtn)
    checkDiagonalDownUp(clickedBtn)

}

function disabledBtns() {
for (let i = 0; i<changeBtns.length; i++) 
                { 
                    changeBtns[i].disabled = true
                }    
}

function checkHorizontal(clickedBtn) {
    const clickedCol = parseInt(clickedBtn.dataset.col)
    const startCol = clickedCol - 4 >= 0 ? clickedCol - 4 : 0 
    const endCol = clickedCol + 4 < size ? clickedCol + 4 : size - 1 
    const sameRowBtns = document.querySelectorAll(`button[data-row ="${clickedBtn.dataset.row}"]`) 

    let same = 0
    for (let i = startCol; i <= endCol; i++) {
        if (clickedBtn.textContent === sameRowBtns[i].textContent) {
            same++
            if (same === 5) {
                alert('Grattis ' + clickedBtn.textContent + ' vann!' )
                disabledBtns()
            }
        } else {
            same = 0
            
        }

    }
}


function checkVertical(clickedBtn) {
    const clickedRow = parseInt(clickedBtn.dataset.row)
    const startRow = clickedRow - 4 >= 0 ? clickedRow - 4 : 0 
    const endRow = clickedRow + 4 < size ? clickedRow + 4 : size - 1 
    const sameColBtns = document.querySelectorAll(`button[data-col ="${clickedBtn.dataset.col}"]`)

    let same = 0
    for (let i = startRow; i <= endRow; i++) {
        if (clickedBtn.textContent === sameColBtns[i].textContent) {
            same++
            if (same === 5) {
                alert('Grattis ' + clickedBtn.textContent + ' vann!' )
                disabledBtns()
            }
        } else {
            same = 0
        }
    }
}



function checkDiagonalDownUp(clickedBtn) {
    const clickedCol = parseInt(clickedBtn.dataset.col)
    const clickedRow = parseInt(clickedBtn.dataset.row)

    const startRow = clickedRow + 4 < size ? clickedRow + 4 : size - 1
    const endRow = clickedRow - 4 >= 0 ? clickedRow - 4 : 0
    
    const startCol = clickedCol - 4 >= 0 ? clickedCol - 4 : 0
    const endCol = clickedCol + 4 < size ? clickedCol + 4 : size - 1

    const diagonalArray = []

    let steps = clickedCol - (startRow - clickedRow)
    for (let i = startRow; i >= endRow; i--) 
    {
        const btns = document.querySelectorAll(`button[data-row ="${i}"]`)
        if (steps <= endCol && steps >= startCol) 
        {
            diagonalArray.push(btns[steps])
        }
        steps++
    }

    let same = 0
    for (let i = 0; i < diagonalArray.length; i++) {
        if (clickedBtn.textContent === diagonalArray[i].textContent)
        {
            same ++ 
             if (same === 5) 
            {
                alert('Grattis ' + clickedBtn.textContent + ' vann!' )
                disabledBtns()
            }
        }   else 
            {
            same = 0
            }

     }
}

function checkDiagonalUpDown(clickedBtn) {
    const clickedCol = parseInt(clickedBtn.dataset.col)
    const clickedRow = parseInt(clickedBtn.dataset.row)

    const startRow = clickedRow - 4 >= 0 ? clickedRow - 4 : 0
    const endRow = clickedRow + 4 < size ? clickedRow + 4 : size - 1

    const startCol = clickedCol - 4 >= 0 ? clickedCol - 4 : 0
    const endCol = clickedCol + 4 < size ? clickedCol + 4 : size - 1

    const diagonalArray = []

    let steps = clickedCol - (clickedRow - startRow)
    for (let i = startRow; i <= endRow; i++) 
    {
        const btns = document.querySelectorAll(`button[data-row ="${i}"]`)
        if (steps <= endCol && steps >= startCol) 
        {
            diagonalArray.push(btns[steps])
        }
        steps++
    }

    let same = 0
    for (let i = 0; i < diagonalArray.length; i++) {
        if (clickedBtn.textContent === diagonalArray[i].textContent)
        {
            same ++ 
             if (same === 5) 
            {
                alert('Grattis ' + clickedBtn.textContent + ' vann!' )
                disabledBtns()
            }
        }   else 
            {
            same = 0
            }

     }
}
