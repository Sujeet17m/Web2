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
// let btn = document.querySelector("button");
// let img1 = document.querySelector("#i1");
// let img2 = document.querySelector("#i2");
// btn.addEventListener("click",function(){
//     let src1 = img1.src;
//     let src2 = img2.src;
//     img1.src = src2;
//     img2.src = src1;
// });

//Javascript to validate the form and display an error message if the input is invalid
let inptext = document.querySelector("#i1");
let inpsub = document.querySelector("#i2");
let btn = document.querySelector("#sub");


btn.addEventListener("click",function(){
    let text = inptext.value;
    let sub = inpsub.value;
    
    if(text === "" || sub === ""){
        alert("Please fill all the fields");
    } else {
        alert("Form submitted successfully");
        inptext.value = "";
        inpsub.value = "";
    }
});

