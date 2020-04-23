// PART 1
// Select submit button and call it submitButton
let submitButton = document.querySelector('#addHero');

// Select reset button and call it resetButton
let resetButton = document.querySelector('#resetForm');

// Select main content area and call it main
let main = document.querySelector('.row-main')

// Select how to use element and call it howToUse
let howToUse = document.querySelector('#howTo')

// Create an empty array for all heroes and call it heroes
let heroes = [];

// Create an empty string for all cards of heroes and call it cards
let cards = '';



// PART 3
// Create a function called createHeroesArray that takes in an event object

    // Prevent the button from doing what it naturally does (redirect to a new page)


function createHeroesArray (e) {
      e.preventDefault();
      let inputName = document.querySelector('#name').value;
      let inputQuote = document.querySelector('#quote').value;
      let inputImgURL = document.querySelector('#imgURL').value;
      let newObject = new Hero (inputName, inputQuote, inputImgURL);
      heroes.push(newObject);
      console.log(heroes);
      createCard();
      addHero();
}

    // Create a Hero constructor that takes in - name, quote, imgURL
 function Hero (name, quote, imgURL) {
     this.name = name;
     this.quote = quote;
     this.imgURL = imgURL;
 };  

    // Create a new Hero object that stores the values of each input field (name, quote, imgURL)
   
    // Push the new object into the heroes array 

    // call the createCard function (you will make this shortly)

    // call the addHero function (you will make this shortly)
    



// PART 4
// Create a function called createCard

function createCard() {
    for (let i=0; i<heroes.length; i++) {
        let newCardDiv = document.createElement('div.card');
        newCardDiv.className = 'hero-card'

        let newH3 = document.createElement('h3');
        let h3Text = document.createTextNode(heroes[i].name)
        newH3.appendChild(h3Text);

        let newImg = document.createElement('img');
        newImg.className = 'heroImg';
        newImg.src = heroes[i].imgURL;

        let newP = document.createElement('p');
        let pText = document.createTextNode(heroes[i].quote);
        newP.appendChild(pText);

        newCardDiv.appendChild(newH3);
        newCardDiv.appendChild(newImg);
        newCardDiv.appendChild(newP);
        main.appendChild(newCardDiv);
    }
}

    // create a loop to go through the heroes array
   
        // CREATE A CARD
        //create elements for div.card, h3, img, p
        // add a class called hero-card to div.card element
        // add a class called heroImg to the img element   
        // set attribute src to the img element with the imgURL from the heroes array
        // create textnode with the hero's name and append it into the h3 element
        // create textnode with the hero's quote and append into the p element
        // append h3 to card        
        // apend img to card
        // apend p to card
        // append card to main
 


// PART 5
// create a function called addHero
function addHero() {
    document.querySelector('.row-main').innerHTML = '';
    createCard();
}

    // clear the main div of any content
    // call the createCard function
 


// PART 7
// create a function called resetForm 
function resetForm() {
    document.querySelector('form').reset();
}

    // select the form tag and use the reset method to clear the content
 


// PART 8
// create a function called howToUsePopup that takes in an event object
function howToUsePopup(e) {
    e.preventDefault();
    alert('Fill out the form below to add a new hero onto the main section.');
}

    // Prevent the button from doing what it naturally does (redirect to a new page)
  

    // make an alert that will provide the following instructions "Fill out the form below to add a new hero onto the main section"
 


// PART 2
//create an event listener to the following:
    //submitButton = click, createHeroesArray
    // resetButton = click, resetForm
    // howToUse = click, howToUsePopup

submitButton.addEventListener('click', createHeroesArray);
resetButton.addEventListener('click', resetForm);
howToUse.addEventListener('click', howToUsePopup);