// const copy_btn = document.getElementById("copy-btn");
// copy_btn.addEventListener("click", () => {
//   var copyText = document.getElementById("copy-text");
//   copyText.select();
//   document.execCommand("copy");
// });

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
