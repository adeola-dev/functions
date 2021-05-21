

function convertFahrToCelsius(fahrenheit) {
    
    let temperature = Number.parseFloat(fahrenheit);
    let inputType = typeof(fahrenheit);
    let conversion = ((temperature - 32) * 5 / 9).toFixed(4);
    if (( inputType !== "string") && ( inputType !== "number")) { 
        console.log(`${fahrenheit} is not a valid number but a/an ${inputType}`)
      
}
else { 
    console.log(conversion)
}
}
convertFahrToCelsius(50)