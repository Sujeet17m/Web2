// //function statement
// function abcd(){
//     console.log("heyy");
// }
// //function expression
// const abcd2 = function() {
//     console.log("heyy2");
// }
// //anonymous function assigned to a variable
// const abcdAnon = function() {
//     console.log("heyy3");
// };
// //arrow function
// const abcd3 = () => {   
//     console.log("heyy4");
// }
// abcd();
// abcd2();
// abcdAnon();
// abcd3();

// var button = document.querySelector("#btn");
// button.addEventListener("click", function() {
//     button.textContent = "Starting...";
//     setTimeout(function() {
//         button.textContent = "Downloading...";
//         setTimeout(function() {
//             alert("Download Complete");
//             button.textContent = "Download";
//         }, 2000);
//     }, 2000);
// });

// let heading = document.querySelector("h1");
// // heading.textContent = "Sujeet";
// heading.textContent += "Sujeet";

// let heading = document.querySelector("h1");
// let userName = prompt("Please enter your name:");
// try {if (userName !== null && userName.trim() !== "") {
//     heading.textContent += userName;
// }} catch (error) {
//     console.error("An error occurred:", error); 
//     heading.textContent = "Error: Unable to display name";
// }

// let heading = document.querySelector("h1");
// let userName = prompt("Please enter your name:");
// if (userName !== null && userName.trim() !== "") {
//     heading.textContent += userName;
// } else {
//     heading.textContent += " (No name entered)";
// }

// let heading = document.querySelector("h1");
// let userName = prompt("Please enter your name:");
// try {
//     if (userName !== null && userName.trim() !== "") {
//         heading.textContent += userName;
//     }
//     else if (userName === null) {
//         heading.textContent += "Guest";
//     } else {
//         heading.textContent += " (No name entered)";
//     }
// } catch (error) {
//     console.error("An error occurred:", error);
//     heading.textContent = "Error: Unable to display name";
// }

// gsap.to(".box",{
//     x:1000,
//     rotate:360,
//     duration:2, 
//     delay:1,
//     backgroundColor:"blue",
// })
gsap.from(".box",{
    x:1000,
    rotate:360,
    duration:2, 
    delay:5,
    backgroundColor:"blue",
})