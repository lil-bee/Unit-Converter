/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-convert")
const volumeEl = document.getElementById("volume-convert")
const massEl = document.getElementById("mass-convert")

let lengthStr =""
let volumeStr =""
let massStr =""


convertBtn.addEventListener("click", function(){
    convertLength()
    convertVolume()
    convertMass()
})

function convertLength(){
    let meterToFeet = inputEl.value * 3.281
    let feetToMeter = inputEl.value * 0.3048
    lengthStr = `${inputEl.value} meters = ${meterToFeet.toFixed(3)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(3)} meters`

    lengthEl.textContent = lengthStr
}
function convertVolume(){
    let litersToGallons = inputEl.value * 0.264
    let gallonsToLiters = inputEl.value * 3.78541
    volumeStr = `${inputEl.value} liters = ${litersToGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallonsToLiters.toFixed(3)} liters`

    volumeEl.textContent = volumeStr
}
function convertMass(){
    let kilosToPounds = inputEl.value * 2.204
    let poundsToKilos = inputEl.value * 0.453592
    massStr = `${inputEl.value} meters = ${kilosToPounds.toFixed(3)} feet | ${inputEl.value} feet = ${poundsToKilos.toFixed(3)} meters`

    massEl.textContent = massStr
}
