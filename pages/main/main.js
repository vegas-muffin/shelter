const ourPetsPage = document.getElementById("our-pets-page");
const petsButtonBig = document.getElementById("pets__button-big");
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

ourPetsPage.addEventListener("click", goToOurPets);
petsButtonBig.addEventListener("click", goToOurPets);

$(document).ready(function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div><button class="pets__arrow-left slick-prev"></button></div>',
    nextArrow:
      '<div><button class="pets__arrow-right slick-arrow slick-next"></button></div>',
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
