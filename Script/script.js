const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list-links");
menuList.classList.add("d-none");
menuIcon.addEventListener("click", () => {
  // alert("button clicked");
  menuIcon.classList.toggle("fa-x");
  menuList.classList.toggle("d-none");   
});



const prev_btn = document.getElementById("prev-btn");
prev_btn.addEventListener("click", () => {
  window.history.back();
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




