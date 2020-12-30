const ourPetsPage = document.getElementById('our-pets-page');
const petsButtonBig = document.getElementById('pets__button-big');
allBtn = document.querySelectorAll(".btn");


// find button with btn class
function whatIsPet() {
  for (let i = 0; i < allBtn.length; i++) {
 let currentBtn = allBtn[i];
 currentBtn.addEventListener("click", function (e) {
   // numberPress(e.target.value);
   let whatpet = e.target.value;
      buildModalWindow(pets, whatpet);
 });
}
}

// open our pets page
    function goToOurPets() {
      location.href = "../../pages/our-pets/our-pets.html";
    } 
    
    ourPetsPage.addEventListener('click', goToOurPets);
    petsButtonBig.addEventListener('click', goToOurPets);

