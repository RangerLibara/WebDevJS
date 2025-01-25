let box = document.getElementById("box1");
let silver = document.getElementById("Silver");
let gray = document.getElementById("Gray");
let black = document.getElementById("Black");
let red = document.getElementById("Red");
let maroon = document.getElementById("Maroon");
let Yellow = document.getElementById("Yellow");
let Olive = document.getElementById("Olive");
let Lime = document.getElementById("Lime");
let Green = document.getElementById("Green");
let Aqua = document.getElementById("Aqua");
let Teal = document.getElementById("Teal");
let Blue = document.getElementById("Blue");
let Navy = document.getElementById("Navy");
let Fuchsia = document.getElementById("Fuchsia");
let Purple = document.getElementById("Purple");
let IndianRed = document.getElementById("IndianRed");
let LightCoral = document.getElementById("LightCoral");
let Salmon = document.getElementById("Salmon");
let DarkSalmon = document.getElementById("DarkSalmon");
let LightSalmon = document.getElementById("LightSalmon");


silver.addEventListener("click", () => {
    box.style.backgroundColor = "#C0C0C0";
});
gray.addEventListener("click", () => {
    box.style.backgroundColor = "#808080";
});
black.addEventListener("click", () => {
    box.style.backgroundColor = "#000000";
});
red.addEventListener("click", () => {
    box.style.backgroundColor = "Red";
});
maroon.addEventListener("click", () => {
    box.style.backgroundColor = "Maroon";
});
Yellow.addEventListener("click", () => {
    box.style.backgroundColor = "Yellow";
});
Olive.addEventListener("click", () => {
    box.style.backgroundColor = "Olive";
});
Lime.addEventListener("click", () => {
    box.style.backgroundColor = "Lime";
});
Green.addEventListener("click", () => {
    box.style.backgroundColor = "Green";
});
Aqua.addEventListener("click", () => {
    box.style.backgroundColor = "Aqua";
});
Teal.addEventListener("click", () => {
    box.style.backgroundColor = "Teal";
});
Blue.addEventListener("click", () => {
    box.style.backgroundColor = "#0000FF";
});
Navy.addEventListener("click", () => {
    box.style.backgroundColor = "Navy";
});
Fuchsia.addEventListener("click", () => {
    box.style.backgroundColor = "Fuchsia";
});
Purple.addEventListener("click", () => {
    box.style.backgroundColor = "Purple";
});
IndianRed.addEventListener("click", () => {
    box.style.backgroundColor = "IndianRed";
});
LightCoral.addEventListener("click", () => {
    box.style.backgroundColor = "LightCoral";
});
Salmon.addEventListener("click", () => {
    box.style.backgroundColor = "Salmon";
});
DarkSalmon.addEventListener("click", () => {
    box.style.backgroundColor = "DarkSalmon";
});
LightSalmon.addEventListener("click", () => {
    box.style.backgroundColor = "LightSalmon";
});

let hminus = document.getElementById("hminus");
let hplus = document.getElementById("hplus");
let bheight = document.getElementById("boxheight");
let hcount = 15;
bheight.innerHTML = hcount+"px";



hminus.addEventListener("click", ()=>{
    if(hcount >= 16){
        hcount--;
        bheight.innerHTML = hcount+"px";
        box.style.height = hcount+"px";

    }else{
        alert("You cant go lower than 15");
    }
});

hplus.addEventListener("click", ()=>{
        hcount++;
        bheight.innerHTML = hcount+"px";
        box.style.height = hcount+"px";
});


let wminus = document.getElementById("wminus");
let wplus = document.getElementById("wplus");
let boxwidth = document.getElementById("boxwidth");
let wcount = 15;
boxwidth.innerHTML = wcount+"px";



wminus.addEventListener("click", ()=>{
    if(wcount >= 16){
        wcount--;
        boxwidth.innerHTML = wcount+"px";
        box.style.height = wcount+"px";
    }else{
        alert("You cant go lower than 15");
    }

});

wplus.addEventListener("click", ()=>{
        wcount++;
        boxwidth.innerHTML = wcount+"px";
        box.style.width = wcount+"px";

});


let rminus = document.getElementById("rminus");
let rplus = document.getElementById("rplus");
let border_radius = document.getElementById("border_radius");
let rcount = 0;
border_radius.innerHTML = rcount+"px";



rminus.addEventListener("click", ()=>{
    if(rcount >= 1){
        rcount--;
        border_radius.innerHTML = rcount+"px";
        box.style.borderRadius = rcount+"px";

    }else{
        alert("You cant go lower than 0");
    }
});

rplus.addEventListener("click", ()=>{
        rcount++;
        border_radius.innerHTML = rcount+"px";
        box.style.borderRadius = rcount+"px";
});
