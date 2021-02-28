//first lines of code set variable names that allows someone to enter their first name, the state theyre from, and the temprature it is.
let firstNameS = prompt
let stateS = prompt("What state are you from (2 Letters): ")
let tempS = prompt("What is the current temprature in Fahrenheit: ")

//sets the variable messages which gives the user a message based on where they are from and the temprature, and a recommendation on what to wear to stay warm, sets 5 different options based on what the user says 
let messagesS = [
    `Hello ${firstNameS}, since the temprature is ${tempS} and you live in ${stateS} you should wear a warm coat, hat, scarf, and gloves.`,
    `Hello ${firstNameS}, since the temprature is ${tempS} and you live in ${stateS} you should wear a warm coat, but you won't need a hat, scarf, and gloves.`,
    `Hello ${firstNameS}, since the temprature is ${tempS} and you live in ${stateS} you should wear your warmest coat, hat, scarf, and warm gloves.`,
    `Hello ${firstNameS}, since the temprature is ${tempS} and you live in ${stateS} you should wear a warm coat, hat, scarf, and gloves. Maybe a scarf too.`,
    "Please enter a valid state and/or temperature"
]

// This provides a switch, this allows for the message that is shown to the user to be changed based on what their answers were. sets perameters to determine which message should be shown to the user. 
switch(true) {
case stateS == 'NE' && tempS < 32:
    console.log(messagesS[0])
    break;
case stateS == 'NE' && tempS >= 32 && tempS < 50:
    console.log(messagesS[1])
    break;
case stateS == 'FL' && tempS >= 32 && tempS < 50:
    console.log(messagesS[2])
    break;
case stateS == 'FL' && tempS >= 50 && tempS < 70:
    console.log(messagesS[3])
    break;
default:
    console.log(messagesS[4])
}