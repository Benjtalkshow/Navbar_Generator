//top banner remover
const learnMore = document.querySelector(".learn-more");
const learnMoreBtn = document.querySelector(".learn-more-btn");
learnMoreBtn.addEventListener('click', () => {
    learnMore.classList.add("hidden");
})


//Add event listeners to print button
const printButton = document.querySelector(".printButton");
const view = document.querySelector(".view");

printButton.addEventListener("click", () => {
    if (printButton.textContent === "PRINT CODE") {
        printButton.textContent = "CLOSE";
    } else {
        printButton.textContent = "PRINT CODE";
    }
    view.classList.toggle("hide");
});


//js function for each code buttons: HTML, CSS and JS
const codeListBtn = document.querySelectorAll(".code-list-btn");
codeListBtn.forEach((btn, btn_Index) => {
    btn.addEventListener("click", () => {
     editors(btn_Index)   
    });
});

//function to hide or dispay each code editor when the code button is clicked
function editors(btn_Index) {
const editors = document.querySelectorAll(".editor");
editors.forEach((editor, editor_Index) => {
    copyCodeFromTextEditor(editor, editor_Index)
    if (btn_Index == editor_Index) {
            editor.classList.remove("hidden");
        } else {
            editor.classList.add("hidden");
        }
});
}

//js fucntion to copy code from text editors
const copyBtn = document.querySelectorAll('.copy-btn');
function copyCodeFromTextEditor(editor, editor_Index){
    copyBtn.forEach((btn, copyBtn_Index) => {
        btn.addEventListener('click', () => {
                if (copyBtn_Index === editor_Index) {
                    const clipboard = navigator.clipboard;
                    const showCopiedText = editor.textContent
                    try {
                        clipboard.writeText(showCopiedText);
                        btn.textContent = "Copied!!";
                        setTimeout(() => {
                            btn.textContent = "Copy"
                        }, 2000)
                        return true;
                    } catch (error) {
                        return false;
                    }
                }
        })
    })
}


function checkClassName(){
    //checking classname
    const edition = document.querySelectorAll('.editor-text')
    edition.forEach((edd) => {
        if (edd.classList.contains("html")) {
            edd.textContent = "<h1 class='heading'>Hello World</h1>";
        } else if (edd.classList.contains("css")) {
            edd.textContent = `.heading {
                color: red;
            }`;
        } else {
            edd.textContent = "const heading = document.querySeelector('.heading');";
        }
    })
    //end of checking classname
}
checkClassName()

// const nav = document.querySelector('.nav-container');
// document.addEventListener('click', () => {
//     alert(nav.innerHTML);
//   });