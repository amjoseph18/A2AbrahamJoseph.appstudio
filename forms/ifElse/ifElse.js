//first lines of code set variable names that allows someone to enter their first name, the state theyre from, and the temprature it is.
let firstName = prompt("What is your first name: ")
let state = prompt("What state are you from (2 Letters): ")
let temp = prompt("What is the current temprature in Fahrenheit: ")

//sets the variable messages which gives the user a message based on where they are from and the temprature, and a recommendation on what to wear to stay warm, sets 5 different options based on what the user says 
let messages = [
    `Hello ${firstName}, since the temprature is ${temp} and you live in ${state} you should wear a warm coat, hat, scarf, and gloves.`,
    `Hello ${firstName}, since the temprature is ${temp} and you live in ${state} you should wear a warm coat, but you won't need a hat, scarf, and gloves.`,
    `Hello ${firstName}, since the temprature is ${temp} and you live in ${state} you should wear your warmest coat, hat, scarf, and warm gloves.`,
    `Hello ${firstName}, since the temprature is ${temp} and you live in ${state} you should wear a warm coat, hat, scarf, and gloves. Maybe a scarf too.`,
    "Please enter a valid state and/or temperature"
]

// This provides an if else statement, this allows for the message that is shown to the user to be changed based on what their answers were. sets perameters to determine which message should be shown to the user. 
if (state == 'NE' && temp < 32) {
    console.log(messages[0])
}   else if (state == 'NE' && temp >= 32 && temp < 50) {
    console.log(messages[1])
}   else if (state == 'FL' && temp >= 32 && temp < 50) {
    console.log(messages[2])
}   else if (state == 'FL' && temp >= 50 && temp < 70) {
    console.log(messages[3])
}   else {
    console.log(messages[4])
    }