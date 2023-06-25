console.log(document)

//DOM reference (div with myMessage class)
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

//Show a value in the DOM using innerText or innerHTML
    //myMessage.innerText = 'This is a message in the DOM!';

//Show a message in the DOM after a delay (use setTimeout) - Example below uses 3 seconds
setTimeout(function(){
    myMessage.innerText = 'This is a message in the DOM!';
}, 4000);

// DOM reference to the button and add an event listener

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function(){
    //alert("Button clicked!")
//show message in the myMessage div element:
    myMessage.innerText = 'Button pressed'
});

// 2 things to try mini exercise
const clearMessage = document.querySelector('.clearMessage');
console.log(clearMessage);

const clearMessageButton = document.querySelector('.clearMessageButton');
clearMessageButton.addEventListener('click', function(){

    //clear message when button is clicked:
    myMessage.innerText = ''
});

setTimeout(function(){
    //clear message after 3 seconds 
    clearMessage.innerText = '';
}, 4000);
// End of mini exercise

// DOM reference to the input element

const inputBox = document.querySelector('.theInputValue');
    //use that in button press event handler to read the value entered by the user and then display that on the screen.
    //note that if no text is entered in the textbox and you click the button an empty message is displayed.
    //modify as follows (if statement):

theMessageButton.addEventListener('click', function (){
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value
    }
});

//Adding web page styling with Javascript - use classList
    //add functionality that changes the background color of the myMessage div when you click on it
    //For this to work you need to add a css class called darkmode to the myMessage element.


    myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
});

//Create a new DOM element

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
    
    //Loop over the fruit list
 const fruitList = document.querySelector(".fruits");

 for(let i = 0; i < fruits.length; i++) {
    //get fruits from the list
    const fruit = fruits[i];

    //create a new li element
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
 }

 