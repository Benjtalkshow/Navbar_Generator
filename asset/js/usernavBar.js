//logo controller js function
const navLogo = document.querySelector(".logo");
const imageLogo = document.querySelector(".logo > img");
const textLogo = document.querySelector(".logo > h1");
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

// slider function
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

//Changing logo when clicked on
const changeContent = document.querySelector('.changeContent');
const logoElement = document.querySelector("input[type='file']");
const imageUploadBtn = document.querySelector(".image-upload-btn");
imageLogo.addEventListener('click', () => {
    changeContent.classList.toggle('hidden')
})

imageUploadBtn.addEventListener("click", (event) => {
    changeContent.classList.add('hidden')
    event.preventDefault();
    var file = logoElement.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imageLogo.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert("Please select an image file first.");
    }
});

