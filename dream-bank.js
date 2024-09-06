const keys = document.querySelectorAll('.keys button')
const telBoard = document.querySelectorAll('.tel-board div')
const allTrans = document.querySelectorAll('#all-trans button')
const ticketPhoneNumber = document.getElementById('ticket-phone-number')
let ticketNumber = document.getElementById('ticket-number')
const phoneNumber = []
boardList = [4, 5, 6, 7, 9, 10, 11, 13, 14, 15]
let printTicket = false

displayTel = () => {
    for(let i=0; i< phoneNumber.length; i++) {
        telBoard[boardList[i]].textContent = phoneNumber[i]
    }
}


// adding number
keys.forEach(key => {
    key.addEventListener('click', () => {
        key.setAttribute('id', key.textContent)
            if(phoneNumber.length < 10) {
                phoneNumber.push(key.id)
                displayTel()
            }            
    })
})

// deleting one number
clearNumber = () => {
    if(phoneNumber.length <= 10) {
        phoneNumber.pop()
        telBoard.forEach(board => {
            board.textContent = ''
        })

        displayTel()
    }
}

//moving from telephone page to transaction page
let number
nextTel = () => {
    if(phoneNumber.length == 10) {
        number = phoneNumber.join('')
        localStorage.setItem('phone-number', number)

        alert(`Hello ${number} thanks for visiting Dream Bank Plc, we look forward to working with you.`)
        window.location.assign('dream-bank-trans.html')
    } else {
        alert('your phone number is not complete')
    } 
}

//transaction page
let transaction

// making all transaction red before clicking
function removeBackground() {
    allTrans.forEach(trans => {
        trans.style.backgroundColor = 'darkred'
    })
}

allTrans.forEach(tran => {
    tran.addEventListener('click', () => {
        removeBackground()
        transaction = tran.textContent
        tran.style.backgroundColor = 'goldenrod'
    })
})

nextTrans = () => {
    if(transaction) {
        localStorage.setItem('transaction', transaction)
        window.location.assign('dream-bank-ticket.html')
    } else {
        alert('Please select a transaction!')
    }
}


