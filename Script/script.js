const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list-links");
menuList.classList.add("d-none");
menuIcon.addEventListener("click", () => {
  // alert("button clicked");
  menuIcon.classList.toggle("fa-x");
  menuList.classList.toggle("d-none");
});

const lightdark_btn = document.getElementById("checkbox");
lightdark_btn.addEventListener("click", () => {
  const mainBody = document.body;
  mainBody.classList.toggle("dark");
});

const prev_btn = document.getElementById("prev-btn");
prev_btn.addEventListener("click", () => {
  window.history.back();
});


// copy code
const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const codeBlocks = document.querySelectorAll("div.code-des");
    const code = codeBlocks[index].innerText;
    button.textContent = "copied";
    setTimeout(() => {
      button.textContent = "Copy code";
    }, 4000);
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // alert("Code copied successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
      });
  });
});

const copy_btn = document.getElementById("copy-btn");
copy_btn.addEventListener("click", function copyText() {
  var text = document.getElementById("textToCopy").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // alert("Text copied to clipboard");
      copy_btn.textContent = "Copied";
      setTimeout(() => {
        copy_btn.textContent = "Copy code";
      }, 2000);
      console.error("Text Copied");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
});

const copy_btn1 = document.getElementById("copy-btn1");
copy_btn1.addEventListener("click", function copyText() {
  var text = document.getElementById("textToCopy1").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // alert("Text copied to clipboard");
      copy_btn1.textContent = "Copied";
      setTimeout(() => {
        copy_btn1.textContent = "Copy code";
      }, 2000);
      console.error("Text Copied");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
});
