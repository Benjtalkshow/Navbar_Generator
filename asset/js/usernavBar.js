//select logo type controller js function
const navLogo = document.querySelector(".logo-container");
const imageLogo = document.querySelector(".logo-container > img");
const textLogo = document.querySelector(".logo-container > h1");
const chooseLogo = document.querySelector("#choose-logo");

chooseLogo.addEventListener("change", () => {
  localStorage.setItem("logoType", chooseLogo.value);
  const logoType = localStorage.getItem("logoType");

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
    navLogo.appendChild(imageLogo);
    navLogo.appendChild(textLogo);
  }
});

// slider function for nav links gap
const firstSlider = document.querySelector(".myfirstRange");
const firstOutput = document.querySelector(".firstDemo");
const unorderedList = document.querySelector(".unordered-list");

// Set initial styles based on slider value
unorderedList.style.gap = `${firstSlider.value}px`;
firstOutput.innerHTML = `${firstSlider.value}px`;
firstOutput.style.left = `${firstSlider.value}%`;

firstSlider.addEventListener("input", (event) => {
  const sliderValue = event.target.value;

  unorderedList.style.gap = `${sliderValue}px`;

  firstOutput.innerHTML = `${sliderValue}px`;

  firstOutput.style.left = `${sliderValue - 10}%`;

  if (sliderValue === "1") {
    firstOutput.style.marginLeft = "10%";
  } else if (sliderValue > 10) {
    firstOutput.style.marginLeft = "0%";
  }
});

//logo upload function, when upload button is clicked
const logoChangeButtons = document.querySelectorAll(".changeLogo");
const logoElement = document.querySelector("input[type='file']");
const textLogoInput = document.querySelector(".textLogoInput");

logoChangeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (button.closest(".changeImageLogoContent")) {
      const file = logoElement.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imageLogo.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file.");
      }
      button.closest(".changeImageLogoContent").classList.add("hidden");
    } else if (button.closest(".changeTextLogoContent")) {
      const textLogoValue = textLogoInput.value.trim();

      if (textLogoValue) {
        const words = textLogoValue.split(/\s+/);
        if (words.length > 1) {
          alert("Please enter only one word.");
        } else {
          textLogo.textContent = words;
          button.closest(".changeTextLogoContent").classList.add("hidden");
        }
      } else {
        alert("Please enter a word.");
      }
    }
  });
});

//toggling between image logo popup and text logo popup uploader
const changeImageLogoContent = document.querySelector(
  ".changeImageLogoContent"
);
const changeTextLogoContent = document.querySelector(".changeTextLogoContent");
const logos = document.querySelectorAll(".logo");

logos.forEach((logo, index) => {
  logo.addEventListener("click", () => {
    if (index === 0) {
      changeImageLogoContent.classList.toggle("hidden");

      if (!changeTextLogoContent.classList.contains("hidden")) {
        changeTextLogoContent.classList.add("hidden");
      }
    } else {
      changeTextLogoContent.classList.toggle("hidden");

      if (!changeImageLogoContent.classList.contains("hidden")) {
        changeImageLogoContent.classList.add("hidden");
      }
    }
  });
});


//create custom buttons
// const selectButtons = document.getElementById('choose-button');
// const buttonContainer = document.querySelector('.nav-btn');

// //initialize custom button
// const defaultButtons = parseInt(selectButtons.value);
// generateCustomeButtons(defaultButtons);

// selectButtons.addEventListener("change", () => {
//   const selectValue = parseInt(selectButtons.value);
//   generateCustomeButtons(selectValue);
// });

// function generateCustomeButtons(val) {
//   buttonContainer.innerHTML = "";
//   for (let i = 1; i <= val; i++) {
//     const btn = document.createElement("button");
//     btn.textContent = `Button ${i}`;
//     btn.className = "navbtn";
//     buttonContainer.appendChild(btn);
// }



//create custom links
const selectAnchorLinks = document.getElementById("choose-links");
const list_link_unorderedList = unorderedList;

// Initialize anchors based on default select value
const defaultAnchorLinks = parseInt(selectAnchorLinks.value);
generateAnchorLinks(defaultAnchorLinks);

selectAnchorLinks.addEventListener("change", () => {
  const selectedValue = parseInt(selectAnchorLinks.value);
  generateAnchorLinks(selectedValue);
});

function generateAnchorLinks(count) {
  list_link_unorderedList.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    const anchor = document.createElement("a");
    anchor.href = `#${i}`;
    anchor.textContent = `Links ${i}`;
    anchor.className = "list-links";

    const listItem = document.createElement("li");
    listItem.appendChild(anchor);
    listItem.className = "list-items";

    list_link_unorderedList.appendChild(listItem);
  }


  // slider font size selection for the textlogo, links and the button text
  const secondSlider = document.querySelector(".mysecondRange");
  const secondOutput = document.querySelector(".secondDemo");
  const listLinks = document.querySelectorAll(".list-items > .list-links");
  const chooseFont = document.getElementById("choose-font");
  const navBtnFont = document.querySelector(".nav-btn > button");
  const textLogoFont = textLogo;

  //add event listener to the choose font select input
  chooseFont.addEventListener('input', (event) => {
    const selectElementFont = event.target.value;
    const font_Size = 'font-size';

    if (selectElementFont === "logofont") {
        const style1 = window.getComputedStyle(textLogo, null).getPropertyValue(font_Size);
        updateOutput(style1);
    } else if (selectElementFont === "links") {
        listLinks.forEach((link) => {
            const style2 = window.getComputedStyle(link, null).getPropertyValue(font_Size);
            updateOutput(style2);
        });
    } else if (selectElementFont === "btntext") {
        const style3 = window.getComputedStyle(navBtnFont, null).getPropertyValue(font_Size);
        updateOutput(style3);
    } else {
        updateOutput('1px');
    }
});

// Function to update the output element
function updateOutput(value) {
    secondOutput.innerHTML = value;
    secondOutput.style.left = value;
}


  // Set initial styles based on slider value
  for (let i = 0; i < listLinks.length; i++) {
    listLinks[i].style.fontSize = `${secondSlider.value}px`;
  }

  //add event listener to the second slider
  secondSlider.addEventListener("input", (event) => {
    const fontValue = chooseFont.value;
    const sliderValue = event.target.value;

    secondOutput.innerHTML = `${sliderValue}px`;

    switch (fontValue) {
      case "logofont":
        textLogoFont.style.fontSize = `${sliderValue}px`;
        break;

      case "links":
        for (let i = 0; i < listLinks.length; i++) {
          listLinks[i].style.fontSize = `${sliderValue}px`;
        }
        break;

      case "btntext":
        navBtnFont.style.fontSize = `${sliderValue}px`;
      default:
        break;
    }

    secondOutput.style.left = `${sliderValue - 15}%`;

    if (sliderValue === "1") {
      secondOutput.style.marginLeft = "15%";
    } else if (sliderValue > 10) {
      secondOutput.style.marginLeft = "0%";
    }
  });


  // Attach click event to each anchor
  const links = document.querySelectorAll(".list-links");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const linkNamesInput = prompt("Enter link names (separated by comma):");

      if (linkNamesInput !== null) {
        const linkNamesArray = linkNamesInput
          .split(",")
          .map((name) => name.trim());

        if (linkNamesArray.length !== count) {
          alert(`Please provide ${count} names.`);
          return;
        }

        const links = document.querySelectorAll(".list-links");
        links.forEach((link, index) => {
          link.textContent = linkNamesArray[index];
        });
      } else {
        alert("Link names not provided.");
      }
    });
  });
}

//Add active to the first child of the nav links
const firstLink = document.querySelector(".list-items:first-child .list-links");
firstLink.classList.add("active");

//Add background-Color to navbar
const navbar = document.querySelector(".navbar");
const navbtn = document.querySelector(".navbtn");
const navLinks = document.querySelectorAll(".list-links");
const chooseElementToColor = document.querySelector("#choose-element-To-color");
const color_Input = document.querySelector(".color");

// Set initial background color for the navbar
navbar.style.backgroundColor = color_Input.value;

color_Input.addEventListener("input", (event) => {
  const elementType = chooseElementToColor.value;
  const colorValue = event.target.value;

  switch (elementType) {
    case "nav":
      navbar.style.backgroundColor = colorValue;
      break;
    case "textlogo":
      textLogo.style.color = colorValue;
      break;
    case "links":
      navLinks.forEach((link) => {
        link.style.color = colorValue;
      });
      break;
    case "button":
      navbtn.style.backgroundColor = colorValue;
      break;
    case "btncolor":
      navbtn.style.color = colorValue;
      break;
    default:
      break;
  }
});
