//logo controller js function
const navLogo = document.querySelector('.logo');
const imageLogo = document.querySelector(".logo > img");
const textLogo = document.querySelector(".logo > h1");
const chooseLogo = document.querySelector('#choose-logo');

// Add a change event listener to the chooseLogo select element
chooseLogo.addEventListener("change", () => {
  const logoType = chooseLogo.value;
  if (logoType === "image-type") {
    navLogo.removeChild(textLogo);
  } else if (logoType === "text-type") {
    navLogo.removeChild(imageLogo);
  }
});


