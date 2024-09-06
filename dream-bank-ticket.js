const ticketPhoneNumber = document.getElementById('ticket-phone-number')
let ticketNumber = document.getElementById('ticket-number')
let phoneNumber = localStorage.getItem('phone-number')
let transaction = localStorage.getItem('transaction')
const dateDisplay = document.getElementById('date')
const timeDisplay = document.getElementById('time')


displayTicket = () => {
    displayDate()    

    //display ticket number and phone number
    ticketPhoneNumber.textContent = phoneNumber
    let ticketCode
    let random = Math.floor(Math.random()* 50) + 1

    //conditionals for ticket number
    if(transaction == 'Withdraw Money') {
        ticketCode = 'W'
    } else  if(transaction == 'Deposit Money') {
        ticketCode = 'D'
    } else  if(transaction == 'Cash Payment') {
        ticketCode = 'C'
    } else  if(transaction == 'Bank Transfer') {
        ticketCode = 'B'
    } else  if(transaction == 'Withdraw Cheque') {
        ticketCode = 'Q'
    } else  if(transaction == 'Check Balance') {
        ticketCode = 'U'
    } else  if(transaction == 'Mobile Money') {
        ticketCode = 'M'
    } else  if(transaction == 'Create Account') {
        ticketCode = 'N'
    }

    if(random < 10) {
        random = '0' + random
    }

    ticketNumber.textContent = ticketCode + random
}

displayTicket()


home = () => {
    phoneNumber = []
    transaction = ''
    localStorage.removeItem('phone-number')
    localStorage.removeItem('transaction')

    window.location.assign('dream-bank.html')
}

//date and time
function displayDate() {
    //day
    const days = ['Sun','Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    let dayNumber = new Date().getDay()
    const day = days[dayNumber]

    //day of month
    let dateNumber = new Date().getDate()
    
   if(dateNumber == 31 ||dateNumber == 21 ||dateNumber == 1) {
        endMark = 'st'
    } else  if(dateNumber == 2 ||dateNumber == 22) {
        endMark = 'nd'
    } else if(dateNumber == 3 ||dateNumber ==23) {
        endMark = 'rd'
    } else {
        endMark = 'th'
    }

    //month
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December']
    const monthNumber = new Date().getMonth()
    const month = months[monthNumber]

    //year 
    const year = new Date().getFullYear()

    dateDisplay.textContent = `${day} ${dateNumber}${endMark} ${month} ${year}`


    // time display 
    let hour = new Date().getHours()

    //displaying 'AM'/'PM'
    let timeMark
    if(hour < 12) {
        timeMark = 'AM'
    } else {
        timeMark = 'PM'
    }

    //displaying time lower than 12
    if(hour > 12) {
        hour -= 12
    }

    let minute = new Date().getMinutes()

    timeDisplay.textContent = `${hour}:${minute}${timeMark}`
}