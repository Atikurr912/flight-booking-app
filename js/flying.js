document.getElementById("firstIncrementButton").addEventListener("click", function(event) {
    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);
});
document.getElementById("economyIncrementButton").addEventListener("click", function(event) {
    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);
});
document.getElementById("firstDecrementButton").addEventListener("click", function(event) {
    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);
});
document.getElementById("economyDecrementButton").addEventListener("click", function(event) {
    incrementOrDecrement(flightTicket, event.target.id);
    calculateSubTotal(flightTicket);
});
document.getElementById("booking").addEventListener("click", function() {
    updateModal(flightTicket);
});

function calculateSubTotal(ticketObj) {
    ticketObj.subTotal = ticketObj.firstClassAmount + ticketObj.EconomyClassAmount;
    document.getElementById("subTotal").innerText = "$ " + ticketObj.subTotal;
    vatCalculation(ticketObj);
}

function vatCalculation(ticketObj) {
    ticketObj.vatAmount = (ticketObj.subTotal * .1);
    document.getElementById("vat").innerText = "$ " + ticketObj.vatAmount;
    totalCalculation(ticketObj);
}

function totalCalculation(ticketObj) {
    ticketObj.totalAmount = ticketObj.subTotal + ticketObj.vatAmount;
    document.getElementById("total").innerText = ticketObj.totalAmount;
    updateModal(ticketObj)
}
const flightTicket = {

    rateOfFirstClass: 150,
    rateOfEconomyClass: 100,
    firstClassAmount: 0,
    EconomyClassAmount: 0,
    numberOfTicketFirst: 0,
    numberOfTicketEconomy: 0,
    subTotal: 0,
    vatAmount: 0,
    totalAmount: 0
}

function incrementOrDecrement(ticketObj, ticketClass) {
    if (ticketClass == "firstIncrementButton") {
        ticketObj.numberOfTicketFirst += 1;
        ticketObj.firstClassAmount = ticketObj.numberOfTicketFirst * ticketObj.rateOfFirstClass;
        document.getElementById("firstClassTicketNumber").value = ticketObj.numberOfTicketFirst;
    } else if (ticketClass == "economyIncrementButton") {
        ticketObj.numberOfTicketEconomy += 1;
        ticketObj.EconomyClassAmount = ticketObj.numberOfTicketEconomy * ticketObj.rateOfEconomyClass;
        document.getElementById("economyClassTicketNumber").value = ticketObj.numberOfTicketEconomy;
    } else if (ticketClass == "firstDecrementButton" && ticketObj.numberOfTicketFirst > 0) {
        ticketObj.numberOfTicketFirst -= 1;
        ticketObj.firstClassAmount = ticketObj.numberOfTicketFirst * ticketObj.rateOfFirstClass;
        document.getElementById("firstClassTicketNumber").value = ticketObj.numberOfTicketFirst;

    } else if (ticketClass == "economyDecrementButton" && ticketObj.numberOfTicketEconomy > 0) {
        ticketObj.numberOfTicketEconomy -= 1;
        ticketObj.EconomyClassAmount = ticketObj.numberOfTicketEconomy * ticketObj.rateOfEconomyClass;
        document.getElementById("economyClassTicketNumber").value = ticketObj.numberOfTicketEconomy;
    }
}



function updateModal(ticketObj) {
    if (ticketObj.totalAmount != 0) {
        createModal("message", ticketObj);
    } else {
        document.getElementById("message").innerHTML = "<div class='alert alert-danger'>Please select all thing first. Then conform.</div>"
    }

}

function createModal(classOfModal, ticketObj) {
    let modal = document.getElementById(classOfModal);
    modal.innerHTML =
        `
    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Booking Information</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="form-style">First Class Total Amount: ${ticketObj.numberOfTicketFirst} x $${ticketObj.rateOfFirstClass} = $${ticketObj.firstClassAmount}</p>
                        <p class="form-style">Economy Class Total Amount: ${ticketObj.numberOfTicketEconomy} x $${ticketObj.rateOfEconomyClass} = $${ticketObj.EconomyClassAmount}</p>
                        <p class="form-style">VAT: $${ticketObj.vatAmount}</p>
                        <p class="form-style">Total: $${ticketObj.totalAmount}</p>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Conform</button>
                    </div>
    </div>
    
    `;


}