//learn more button remover
const learnMore = document.querySelector(".learn-more");
const learnMoreBtn = document.querySelector(".learn-more-btn");
learnMoreBtn.addEventListener('click', () => {
    learnMore.classList.add("hidden");
})

//print button function
const printButton = document.querySelector(".printButton");
const view = document.querySelector(".view");
printButton.addEventListener("click", () => {
    if (printButton.textContent === "CLOSE") {
        printButton.textContent = "PRINT CODE";
    } else {
        printButton.textContent = "CLOSE";
    }
    view.classList.toggle("hide");
});

//code editors function
function editors() {
    const editors = document.querySelectorAll(".editor");
    editors.forEach((editor, editor_Index) => {
        codeListBtn(editor, editor_Index);
    });
}
editors();

//code list button function
function codeListBtn(editor, editor_Index) {
    const codeListBtn = document.querySelectorAll(".code-list-btn");
    codeListBtn.forEach((btn, btn_Index) => {
        btn.addEventListener("click", () => {
            if (btn_Index == editor_Index) {
                editor.classList.remove("hidden");
            } else {
                editor.classList.add("hidden");
            }
        });
    });
}
codeListBtn();

//code to copy texts
const copyBtn = document.querySelectorAll('.copy-btn');
copyBtn.forEach((btn, copyBtn_Index) => {
    const textEditors = document.querySelectorAll('.editor')
    btn.addEventListener('click', () => {
        textEditors.forEach((textEditor, textEditorIndex) => {
            if (copyBtn_Index === textEditorIndex) {
                const clipboard = navigator.clipboard;
                const showCopiedText = textEditor.textContent.replaceAll("Copy", "");
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
