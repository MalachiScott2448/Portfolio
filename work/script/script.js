/*

    Author: Malachi Scott
    Date: 10/23/2023

    file: script.js

*/

// anchor variable

let anchor = document.getElementById("anchor");
let anchor1 = document.getElementById("anchor1");
let anchor2 = document.getElementById("anchor2");
let anchor3 = document.getElementById("anchor3");
let anchor4 = document.getElementById("anchor4");
let anchor5 = document.getElementById("anchor5");

// h3 variable

let overlay = document.getElementById("overlay-text");
let overlay1 = document.getElementById("overlay-text1");
let overlay2 = document.getElementById("overlay-text2");
let overlay3 = document.getElementById("overlay-text3");
let overlay4 = document.getElementById("overlay-text4");
let overlay5 = document.getElementById("overlay-text5");

//script 

anchor.addEventListener("mouseover", function(){
    overlay.style.display = "none";
});

anchor.addEventListener("mouseout", function(){
    overlay.style.display = "block";
});

anchor1.addEventListener("mouseover", function(){
    overlay1.style.display = "none";
});

anchor1.addEventListener("mouseout", function(){
    overlay1.style.display = "block";
});
anchor2.addEventListener("mouseover", function(){
    overlay2.style.display = "none";
});

anchor2.addEventListener("mouseout", function(){
    overlay2.style.display = "block";
});
anchor3.addEventListener("mouseover", function(){
    overlay3.style.display = "none";
});

anchor3.addEventListener("mouseout", function(){
    overlay3.style.display = "block";
});
anchor4.addEventListener("mouseover", function(){
    overlay4.style.display = "none";
});

anchor4.addEventListener("mouseout", function(){
    overlay4.style.display = "block";
});

anchor5.addEventListener("mouseover", function(){
    overlay5.style.display = "none";
});

anchor5.addEventListener("mouseout", function(){
    overlay5.style.display = "block";
});