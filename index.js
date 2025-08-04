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
// let button = document.querySelector("#btn");
// let p = document.querySelector("#p");
// button.addEventListener("click", function() {
//     p.textContent = "Starting...";
//     setTimeout(function() {
//         p.textContent = "Downloading...";
//         setTimeout(function() {
//             alert("Download Complete");
//             p.textContent = "current text";
//         }, 2000);
//     }, 2000);
// });


// when the button is clicked, it will change the image source between two images
let btn = document.querySelector("button");
let img = document.querySelector("img");
let img2 = document.querySelector("#i2");   
let img1 = document.querySelector("#i1");
btn.addEventListener("click", function() {
    let src1 = img1.src;
    let src2 = img2.src;  
    img1.src = src2;
    img2.src = src1;
});

