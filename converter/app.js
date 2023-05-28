let celciusinput = document.querySelector('#celcius > input')
let fahrenhietinput = document.querySelector('#Fahrenheit > input')
let kelvininput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){

    return Math.round(number*100)/100
}

celciusinput.addEventListener('input', function(){
  let ctemp = parseFloat(celciusinput.value)
  let ftemp = (ctemp*(9/5))+32
  let ktemp = ctemp + 273.15

  fahrenhietinput.value = roundNumber(ftemp)
  kelvininput.value = roundNumber(ktemp)

})


fahrenhietinput.addEventListener('input', function(){
    let ftemp = parseFloat(fahrenhietinput.value)
    let ctemp = (ftemp-32)*(5/9)
    let ktemp = (ftemp-32)*(5/9)+273.15
    console.log(ftemp)
    celciusinput.value = roundNumber(ctemp)
    kelvininput.value = roundNumber(ktemp)
  
  })


  kelvininput.addEventListener('input', function(){
    let ktemp = parseFloat(kelvininput.value)
    let ctemp = ktemp-273.15
    let ftemp = (ktemp-273.15) * (9/5) + 32
  
    celciusinput.value = roundNumber(ctemp)
    fahrenhietinput.value = roundNumber(ftemp)
  
  })


  btn.addEventListener('click', ()=>{

    celciusinput.value  
  })

// let celsiusInput = document.querySelector('#celsius > input')
// let fahrenheitInput = document.querySelector('#Fahrenheit > input')
// let kelvinInput = document.querySelector('#kelvin > input')

// let btn = document.querySelector('.button button')


// function roundNumber(number){
//     return Math.round(number*100)/100
// }


// /* Celcius to Fahrenheit and Kelvin */
// celsiusInput.addEventListener('input', function(){
//     let cTemp = parseFloat(celsiusInput.value)
//     let fTemp = (cTemp*(9/5)) + 32
//     let kTemp = cTemp + 273.15

//     fahrenheitInput.value = roundNumber(fTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })


// /* Fahrenheit to Celcius and Kelvin */
// fahrenheitInput.addEventListener('input', function(){
//     let fTemp = parseFloat(fahrenheitInput.value)
//     let cTemp = (fTemp - 32) * (5/9)
//     let kTemp = (fTemp -32) * (5/9) + 273.15

//     celsiusInput.value = roundNumber(cTemp)
//     kelvinInput.value = roundNumber(kTemp)
// })

// /* Kelvin to Celcius and Fahrenheit */
// kelvinInput.addEventListener('input', function(){
//     let kTemp = parseFloat(kelvinInput.value)
//     let cTemp = kTemp - 273.15
//     let fTemp = (kTemp - 273.15) * (9/5) + 32

//     celsiusInput.value = roundNumber(cTemp)
//     fahrenheitInput.value = roundNumber(fTemp)
// })


// btn.addEventListener('click', ()=>{
//     celsiusInput.value = ""
//     fahrenheitInput.value = ""
//     kelvinInput.value = ""
// })