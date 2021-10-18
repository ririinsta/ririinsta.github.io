function func(){
    var hours = prompt("How many hours?");
    var days = prompt("How many days?");
    var perhour = prompt("How much are you payed per hour?");
    var tax = prompt("How much taxes?");
    var mats = prompt("How much materials per day?");

    var returnval;
    returnval = hours * perhour;
    returnval = returnval * days;
    if (tax == 0){
        if (mats == 0){
            returnval = returnval - mats;
        } else {
            returnval = returnval - mats;
        }
    } else {
        tax = (tax / 100);
        tax = 1.00 - tax;
        returnval =- tax;
    }
    alert("You will be payed " + returnval + " per paycheck.");
}
window.onload = func;