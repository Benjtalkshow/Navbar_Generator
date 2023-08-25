//logo controller js function
const navLogo = document.querySelector('.logo');
const imageLogo = document.querySelector(".logo > img");
const textLogo = document.querySelector(".logo > h1");
const chooseLogo = document.querySelector('#choose-logo');

chooseLogo.addEventListener('change',() => {
  const setLogo = localStorage.setItem("logoType", chooseLogo.value);
  const logoType = localStorage.getItem("logoType");
  console.log(logoType);
  if (logoType === "image-type") {
    navLogo.removeChild(textLogo);
    if (!navLogo.contains(imageLogo)) {
      navLogo.appendChild(imageLogo);
    }
  } else if (logoType === "text-type") {
    navLogo.removeChild(imageLogo);
    if (!navLogo.contains(textLogo)) {
      navLogo.appendChild(textLogo);
    }
  } else {
    navLogo.appendChild(imageLogo)
    navLogo.appendChild(textLogo)
  } 
})


