//select logo type controller js function
const navLogo = document.querySelector(".logo-container");
const imageLogo = document.querySelector(".logo-container > img");
const textLogo = document.querySelector(".logo-container > h1");
const chooseLogo = document.querySelector("#choose-logo");

chooseLogo.addEventListener("change", () => {

    const setLogo = localStorage.setItem("logoType", chooseLogo.value);
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


// slider function for unordered-list font-size
const secondSlider = document.querySelector(".mysecondRange");
const secondOutput = document.querySelector(".secondDemo");
const listLinks = document.querySelectorAll(".list-items > .list-links");

// Set initial styles based on slider value
secondOutput.innerHTML = `${secondSlider.value}px`;
for (let i = 0; i < listLinks.length; i++) {
    listLinks[i].style.fontSize = `${secondSlider.value}px`;
}

secondSlider.addEventListener("input", (event) => {
    const sliderValue = event.target.value;

    secondOutput.innerHTML = `${sliderValue}px`;

    for (let i = 0; i < listLinks.length; i++) {
        listLinks[i].style.fontSize = `${sliderValue}px`;
    }

    secondOutput.style.left = `${sliderValue - 10}%`;

    if (sliderValue === "1") {
        secondOutput.style.marginLeft = "10%";
    } else if (sliderValue > 10) {
        secondOutput.style.marginLeft = "0%";
    }
});



//Add background-Color to navbar
const navbar = document.querySelector(".navbar");
const navbtn = document.querySelector(".navbtn");
const navLinks = document.querySelectorAll(".list-links");
const chooseElementToColor = document.querySelector("#choose-element-To-color");
const color_Input = document.querySelector(".color");

//setting initial background color for the navbar
navbar.style = `background-color:${color_Input.value};`

color_Input.addEventListener("input", (setColor) => {

    const elementType = chooseElementToColor.value;
    const value = setColor.target.value;

    if (elementType === "nav") {
        navbar.style = `background-color:${value};`

    } else if (elementType === "logo") {
        textLogo.style = `color:${value};`

    } else if (elementType === "links") {
        navLinks.forEach((link) => {
            link.style = `color:${value};`
        })

    } else if (elementType === "button") {
        navbtn.style = `background-color:${value};`

    } else if (elementType === "btncolor") {
        navbtn.style = `color:${value};`
    }
});


//logo upload function, when upload button is clicked
const logoChangeButtons = document.querySelectorAll('.changeLogo');
const logoElement = document.querySelector("input[type='file']");
const textLogoInput = document.querySelector(".textLogoInput");

logoChangeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (button.closest('.changeImageLogoContent')) {
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
            button.closest('.changeImageLogoContent').classList.add('hidden');

        } else if (button.closest('.changeTextLogoContent')) {
            const textLogoValue = textLogoInput.value.trim();

            if (textLogoValue) {
                const words = textLogoValue.split(/\s+/);
                if (words.length > 1) {

                    alert("Please enter only one word.");

                } else {
                    textLogo.textContent = words;
                    button.closest('.changeTextLogoContent').classList.add('hidden');
                }

            } else {
                alert("Please enter a word.");
            }
        }
    });
});





//toggling between image logo popup and text logo popup uploader
const changeImageLogoContent = document.querySelector('.changeImageLogoContent');
const changeTextLogoContent = document.querySelector('.changeTextLogoContent');
const logos = document.querySelectorAll('.logo');

logos.forEach((logo, index) => {
    logo.addEventListener('click', () => {

        if (index === 0) {
            changeImageLogoContent.classList.toggle('hidden')

            if (!changeTextLogoContent.classList.contains('hidden')) {
                changeTextLogoContent.classList.add('hidden')
            }

        } else {
            changeTextLogoContent.classList.toggle('hidden')
            
            if (!changeImageLogoContent.classList.contains('hidden')) {
                changeImageLogoContent.classList.add('hidden')
            }
        }
    })
})

