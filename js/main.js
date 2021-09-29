let input = document.getElementById("km")


input.addEventListener("keypress", function (event) {

    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("btn_click").click();
    }
})


function makeCall() {
    window.location.href = 'tel:966151547'
}

function simulate() {
    let km = document.getElementById("km").value
    let total = document.getElementById("total")
    if (km >= 0) {
       

        total.innerHTML = (3.9 + (km * 0.94)).toFixed(2).toString() + "€ a " + (3.9 + (km * 1.13)).toFixed(2).toString() + "€"
    }
    else{
        total.innerHTML="0 €"
    }

}