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
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const outputDiv = document.getElementById("output");
const unorderedList = document.querySelector(".unordered-list");
unorderedList.style.gap = slider.value + "px";
output.innerHTML = slider.value + "px";
output.style.left = slider.value + "%";

slider.addEventListener("input", function (event) {
    output.innerHTML = event.target.value + "px";
    unorderedList.style.gap = event.target.value + "px";
    output.style.left = event.target.value - 10 + "%";
    if (event.target.value == 1) {
        output.style.marginLeft = 10 + "%";
    } else if (event.target.value > 10) {
        output.style.marginLeft = 0 + "%";
    }
});

//Add background-Color to navbar
const navbar = document.querySelector(".navbar");
const navbtn = document.querySelector(".navbtn");
const navLinks = document.querySelectorAll(".list-links");
const chooseElementToColor = document.querySelector("#choose-element-To-color");
const color_Input = document.querySelector(".color");
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
const changeLogo = document.querySelectorAll('.changeLogo');
changeLogo.forEach((btns) => {
    const logoElement = document.querySelector("input[type='file']");
    const textLogoInput = document.querySelector(".textLogoInput");
    btns.addEventListener('click', (event) => {
        event.preventDefault();
        if (btns.closest('.changeImageLogoContent')) {
            const file = logoElement.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imageLogo.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                alert("Please select an image file first.");
            }
            btns.closest('.changeImageLogoContent').classList.add('hidden');
        } else if (btns.closest('.changeTextLogoContent')) {
            const value = textLogoInput.value.trim();
            const words = value.split(/\s+/);
            if (words.length > 1) {
                alert("Please enter only one word.");
            } else if (words == "") {
                alert("Please enter only one word.");
            } else {
                textLogo.textContent = words;
                btns.closest('.changeTextLogoContent').classList.add('hidden');
            }
        }
    })
})





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

