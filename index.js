// When the button is touched, add an event to listen for it and then obtain the user input text, 
// evaluate if it contains more than three characters, and if it does, replace the div text with a 
// Hello + the text in the input, remembering to hide the button and any unwanted content after clicking submit.

const getUserInput = function() {
    const getInput = document.querySelector("input").value
    const getDiv = document.getElementById("output")
    const getInputTag = document.querySelector("input")
    const getButtonTag = document.querySelector("button")
    if (getInput.length > 3) {
        getDiv.removeChild(getInputTag)
        getDiv.removeChild(getButtonTag)
        getDiv.innerText = `Hello ${getInput}`
    }
    
    
}
const getButton = document.querySelector("button")
getButton.addEventListener("click", getUserInput)

