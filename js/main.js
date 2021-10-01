let input = document.getElementById("km")


input.addEventListener("keypress", function (event) {

    if (event.key === 'Enter') {
        
        event.preventDefault();
        
        document.getElementById("btn_click").click();
    }
})


function makeCall() {
    window.location.href = 'tel:+351915354381'
}

function simulate() {
    let km = document.getElementById("km").value
    let total = document.getElementById("total")
  //  let luggage=document.getElementById("luggage").value
    if (km >= 0) {
       

        total.innerHTML = (3.9 + (km * 0.94)).toFixed(2).toString() + "€ a " + (3.9 + (km * 1.13)).toFixed(2).toString() + "€"
    }
    else{
        total.innerHTML="0 €"
    }

}