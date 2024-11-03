// --------------------------------------Buy Ticket Button---------------------------------------------


// wingdow positon after clicking Buy Ticket button

document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    document.getElementById('Booking-Section').scrollIntoView({behavior: 'smooth'})
})


// wingdow position after reloading the page

window.addEventListener('load', function(){
    document.getElementById('body').scrollIntoView({behavior: 'smooth'})
})





// ----------------------------------------Seat Selection-------------------------------------------------




// 1. Seat selected

function seatSelected(event){
    const seatId = idFinderByEvent(event)
    const seatIdText = seatId.innerText
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    if(seatBookedNumber < 4){
        if(seatId.classList.contains('bg-[#F7F8F8]') === true){
            turnGreenById(seatIdText)
            seatAdded()
            bookedTicket(event)
            hideEmpty()
            actNextButton()
        }
        else{
            turnGrayById(seatIdText)
            seatRemoved()
            cancelTicket(seatIdText)
            showEmpty()
            deActNextButton()
        }
    }
    
    else if(seatBookedNumber === 4){
        couponActive()
        seatLimit(event)
    }
}
