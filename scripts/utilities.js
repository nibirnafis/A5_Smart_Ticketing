// reload page
function load(){
    
}

// Succsess Page
function succsessPage(){
    const main = document.getElementById('main')
    main.classList.add('hidden')

    const footer = document.getElementById('footer')
    footer.classList.add('hidden')

    const successPage = document.getElementById('successPage')
    successPage.classList.remove('hidden')
}

//  Apply coupon code
function applyCouponCode(){
    const couponInput = document.getElementById('couponInput').value

    const total_gtPrice = document.getElementById('gtPrice')
    const total_gtPrice_text = document.getElementById('gtPrice').innerText
    const gtPrice = parseInt(total_gtPrice_text)

    const cpn1 = document.getElementById('coupon1').innerText
    const cpn2 = document.getElementById('coupon2').innerText
    
    if(cpn1 === couponInput){
        const dicountGTPrice = gtPrice - (gtPrice * .15)
        total_gtPrice.innerText = dicountGTPrice
    }

    else if(cpn2 === couponInput){
        const dicountGTPrice = gtPrice - (gtPrice * .20)
        total_gtPrice.innerText = dicountGTPrice
    }
}


// total Grand Price calculation
function totalGrandPrice(){
    const total_price_Text = document.getElementById('tPrice').innerText    
    const total_gtPrice = document.getElementById('gtPrice')
    total_gtPrice.innerText = total_price_Text
}


// total price calculation
function totalPrice(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    
    const ticketPriceText = document.getElementById('ticketPrice').innerText
    const ticketPrice = parseInt(ticketPriceText)
    
    const totalPrice = seatBookedNumber * ticketPrice
    
    const total_price = document.getElementById('tPrice')
    total_price.innerText = totalPrice
}


// active Next button
function actNextButton(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    const nxt_btn = document.getElementById('nextButton')
    if(seatBookedNumber > 0){
        nxt_btn.classList.remove('bg-[#eeeeee]', 'disabled:')
        nxt_btn.classList.add('bg-[#1DD100]', 'text-white')
    }
}

// deactive Next button
function deActNextButton(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    const nxt_btn = document.getElementById('nextButton')
    if(seatBookedNumber === 0){
        nxt_btn.classList.remove('bg-[#1DD100]', 'text-white')
        nxt_btn.classList.add('bg-[#eeeeee]', 'disabled:')
    }
}

// Coupon button active
function couponActive(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    const btn = document.getElementById('couponButton')
    if(seatBookedNumber === 4){
        btn.classList.remove('bg-[#eeeeee]', 'hidden')
        btn.classList.add('bg-[#1DD100]', 'text-white')
    }
}


// Coupon button deactive
function couponDeactive(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    const btn = document.getElementById('couponButton')
    if(seatBookedNumber < 4){
        btn.classList.remove('bg-[#1DD100]', 'text-white')
        btn.classList.add('bg-[#eeeeee]', 'hidden')
    }
}


// seat limit
function seatLimit(event){
    alert('Maximum 4 seats can be booked')
    const seatId = idFinderByEvent(event)
    const seatIdText = seatId.innerText
    if(seatId.classList.contains('bg-[#1DD100]') === true){
        event.stopPropagation()
        turnGrayById(seatIdText)
        seatRemoved()
        cancelTicket(seatIdText)
        couponDeactive()
    }
}


// hide empty
function hideEmpty(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    if(seatBookedNumber > 0){
        const empty = document.getElementById('emptyContainer')
        empty.classList.add("hidden")
    }    
}


// book ticket
function bookedTicket(event){

    const bookedTickets = document.getElementById('bookedTickets')

    const selectedSeat = idFinderByEvent(event).innerText

    const container = document.createElement('ul')
    container.id = selectedSeat + '-1'
    container.classList.add("flex", "justify-between")
    
    const seatName = document.createElement('li')
    seatName.innerText = selectedSeat
    container.appendChild(seatName)

    const className = document.createElement('li')
    className.innerText = 'Economy'
    container.appendChild(className)
    
    const ticketPrice = document.createElement('li')
    ticketPrice.innerText = '550'
    container.appendChild(ticketPrice)

    bookedTickets.appendChild(container)
}


// seat added
function seatAdded(){
    const seat = document.getElementById('seatCounter')
    const seatText = seat.innerText
    let seatNumber = parseInt(seatText)
    seatNumber = seatNumber + 1
    seat.innerText = seatNumber
    // seat left
    const seatsLeft = document.getElementById('Seats-Left')
    const seatLeftText = seatsLeft.innerText
    const seatLeftNumber = parseInt(seatLeftText)
    const seatLeft = seatLeftNumber - 1
    seatsLeft.innerText = seatLeft
    // 
    totalPrice()
    totalGrandPrice()
}


// cancel ticket
function cancelTicket(idText){
    const bookedTickets = document.getElementById('bookedTickets')
    const id = idText + '-1'
    const canceledTicket = document.getElementById(id)
    bookedTickets.removeChild(canceledTicket)
}


// show empty
function showEmpty(){
    const seatBooked = document.getElementById('seatCounter').innerText
    const seatBookedNumber = parseInt(seatBooked)
    if(seatBookedNumber < 1){
        const empty = document.getElementById('emptyContainer')
        empty.classList.remove("hidden")
    }
}


// seat removed
function seatRemoved(){
    const seat = document.getElementById('seatCounter')
    const seatText = seat.innerText
    let seatNumber = parseInt(seatText)
    seatNumber = seatNumber - 1
    seat.innerText = seatNumber
    // seat left
    const seatsLeft = document.getElementById('Seats-Left')
    const seatLeftText = seatsLeft.innerText
    const seatLeftNumber = parseInt(seatLeftText)
    const seatLeft = seatLeftNumber + 1
    seatsLeft.innerText = seatLeft
    // 
    totalPrice()
    totalGrandPrice()
}


// find the id
function idFinderByEvent(event){
    const findId = document.getElementById(event.target.id);
    return findId
}


// turn the button to green
function turnGreenById(seatId){
    const bgGreen = document.getElementById(seatId);
    bgGreen.classList.remove('bg-[#F7F8F8]') 
    bgGreen.classList.add('bg-[#1DD100]', 'text-white') 
}


// turn the button to gray
function turnGrayById(seatId){
    const bgGray = document.getElementById(seatId);
    bgGray.classList.remove('bg-[#1DD100]', 'text-white')
    bgGray.classList.add('bg-[#F7F8F8]')
}