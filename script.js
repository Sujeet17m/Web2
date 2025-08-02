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

var button = document.querySelector("#btn");
button.addEventListener("click", function() {
    button.textContent = "Starting...";
    setTimeout(function() {
        button.textContent = "Downloading...";
        setTimeout(function() {
            alert("Download Complete");
            button.textContent = "Download";
        }, 2000);
    }, 2000);
});