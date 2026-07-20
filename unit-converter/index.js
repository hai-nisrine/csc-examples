

let inputEl = document.querySelector("#input-el")
let convertBtn = document.querySelector("#convert-btn")
let feetResult = document.querySelector("#feet-result")
let metersResult = document.querySelector("#meters-result")
let gallonsResult = document.querySelector("#gallons-result")
let litersResult = document.querySelector("#liters-result")
let poundsResult = document.querySelector("#pounds-result")
let kilosResult = document.querySelector("#kilos-result")


convertBtn.addEventListener("click", function() {
    let inputNumber = Number(inputEl.value)

    
    feetResult.innerHTML = `<p>
        
    </p>`

})


function meterToFeet(num) {
    return num * 3.28084
}

function feetToMeter(num) {
    return num * 0.3048
}

function litersToGallons(num) {
    return num * 0.264172
}

function gallonsToLiters(num) {
    return num * 3.785412
}


function kilosToPounds(num) {
    return num * 2.20462
}


function poundsTokilos(num) {
    return num * 0.453592
}