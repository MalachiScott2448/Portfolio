/*

    Author: Malachi Scott
    Date: 10/23/2023

    file: script.js

*/

// box variables

let expBox = document.getElementById("expBox");

// image variables

let htmlImg = document.getElementById("htmlImg");
let scriptImg = document.getElementById("scriptImg");
let pythonImg = document.getElementById("pythonImg");
let cplusImg = document.getElementById("cplusImg");
let blenderImg = document.getElementById("blenderImg");
let animeImg = document.getElementById("animeImg");
let flImg = document.getElementById("flImg");
let trumpetImg = document.getElementById("trumpetImg");

// headers variables

let htmlWord = document.getElementById("htmlWord");
let scriptWord = document.getElementById("scriptWord");
let pythonWord = document.getElementById("pythonWord");
let cplusWord = document.getElementById("cplusWord");
let blenderWord = document.getElementById("blenderWord");
let animeWord = document.getElementById("animeWord");
let flWord = document.getElementById("flWord");
let trumpetWord = document.getElementById("trumpetWord");

// script

htmlWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    htmlImg.style.display = "block";
});

htmlWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    htmlImg.style.display = "none";
});

scriptWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    scriptImg.style.display = "block";
});

scriptWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    scriptImg.style.display = "none";
});

pythonWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    pythonImg.style.display = "block";
});

pythonWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    pythonImg.style.display = "none";
});

cplusWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    cplusImg.style.display = "block";
});

cplusWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    cplusImg.style.display = "none";
});

blenderWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    blenderImg.style.display = "block";
});

blenderWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    blenderImg.style.display = "none";
});

animeWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    animeImg.style.display = "block";
});

animeWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    animeImg.style.display = "none";
});

flWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    flImg.style.display = "block";
});

flWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    flImg.style.display = "none";
});

trumpetWord.addEventListener("mouseover", function(){
    expBox.style.display = "block";
    trumpetImg.style.display = "block";
});

trumpetWord.addEventListener("mouseout", function(){
    expBox.style.display = "none";
    trumpetImg.style.display = "none";
});