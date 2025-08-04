// let btn = Document.querySelector(button);
// btn.addEventListener("click", function() {
//     btn.textContent = "Starting...";
//     setTimeout(function() {
//         btn.textContent = "Downloading...";
//         setTimeout(function() {
//             alert("Download Complete");
//             btn.textContent = "Download";
//         }, 2000);
//     }, 2000);
// });

// when the button is clicked, it will change the text of the paragraph and simulate a download process
let button = document.querySelector("#btn");
let p = document.querySelector("#p");
button.addEventListener("click", function() {
    p.textContent = "Starting...";
    setTimeout(function() {
        p.textContent = "Downloading...";
        setTimeout(function() {
            alert("Download Complete");
            p.textContent = "current text";
        }, 2000);
    }, 2000);
});