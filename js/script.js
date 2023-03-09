//prendo il bottone
const button = document.getElementById("submit");
button.addEventListener("click", function() {
    const submit = document.getElementById("TicketAmount");
    ticketAmount.className = "";

    //prendo gli input dall'utente
    //km
    const userKmInput = document.getElementById("km-number");
    const userKm = userKmInput.value; 
    
    //anni
    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value; 

    console.log(userAge, userKm)

    //logica
    //prezzo intero
    const ticketPrice = (userKm * 0.21).toFixed(2);
    console.log(ticketPrice);

    let finalPrice = 0;

    if (userAge < 18) {
        finalPrice = (ticketPrice - (ticketPrice * 0.2)).toFixed(2);
    } else if(userAge >= 65) {
        finalPrice = (ticketPrice - (ticketPrice * 0.4)).toFixed(2);
    } else {
        finalPrice = ticketPrice;
    }
    console.log(finalPrice);

    // pulizia input
    userKmInput.value = "";
    userAgeInput.value = "";

    //output
    document.getElementById("ticketAmount").innerHTML = `Il prezzo del tuo biglietto e' ${finalPrice}`
     

})