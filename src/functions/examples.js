export const logToConsole = () => {
    console.log("Hello")
}

export const logToConsole2 = (message = "Hello 2") => {
    console.log(message)
}



//arrays

export const mapArray = (array) => {
    array.map(item => console.log(item))
}