//print button function
const printButton = document.querySelector(".printButton");
const view = document.querySelector(".view");

printButton.addEventListener("click", () => {
  view.classList.remove("hidden");
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
