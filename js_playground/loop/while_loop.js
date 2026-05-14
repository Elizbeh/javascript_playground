let seatLeft = 3
let passengerToBoard = 7
let passengerBoarded = 0

while (seatLeft > 0 && passengerToBoard > 0) {
    passengerBoarded++
    passengerToBoard--
    seatLeft--

}

console.log(passengerBoarded + " successfully boarded")


/**In this chapter, you looked at two ways of repeating tasks:

The for loop, for a set number of iterations.

The while loop, for when the required number of iterations is unknown.**/