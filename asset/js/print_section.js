//learn more button remover
const learnMore = document.querySelector(".learn-more");
const learnMoreBtn = document.querySelector(".learn-more-btn");
learnMoreBtn.addEventListener('click', () => {
    learnMore.classList.add("hidden");
})

//print button function
//print button function
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


//code list button function
const codeListBtn = document.querySelectorAll(".code-list-btn");
codeListBtn.forEach((btn, btn_Index) => {
    btn.addEventListener("click", () => {
     editors(btn_Index)   
    });
});

//code editors function
function editors(btn_Index) {
const editors = document.querySelectorAll(".editor");
editors.forEach((editor, editor_Index) => {
    if (btn_Index == editor_Index) {
            editor.classList.remove("hidden");
        } else {
            editor.classList.add("hidden");
        }
});
}

//code to copy texts
const copyBtn = document.querySelectorAll('.copy-btn');
copyBtn.forEach((btn, copyBtn_Index) => {
    const textEditors = document.querySelectorAll('.editor-text')
    btn.addEventListener('click', () => {
        textEditors.forEach((textEditor, textEditorIndex) => {
            if (copyBtn_Index === textEditorIndex) {
                const clipboard = navigator.clipboard;
                const showCopiedText = textEditor.textContent
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
})

function eddd(){
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
}eddd()


// slider function
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const outputDiv = document.getElementById("output");
const unorderedList = document.querySelector('.unordered-list');
unorderedList.style.gap = slider.value + "px";
output.innerHTML = slider.value + "px";
output.style.left = slider.value + "px";

slider.addEventListener("input", function(event) {
  output.innerHTML = event.target.value + "px";
  unorderedList.style.gap = event.target.value + "px";
  output.style.left = event.target.value - 10 + "%";
  if(event.target.value == 1){
    output.style.marginLeft = 10 + "%";
  } else if(event.target.value > 1) {
    output.style.marginLeft = 0 + "%";
  }
});
