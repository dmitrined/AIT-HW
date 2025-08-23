const divTask1 = document.getElementById("task1");
divTask1.style.width = "auto";
divTask1.style.padding = "50px";
divTask1.style.backgroundColor = "beige";
divTask1.style.fontSize = "16px";


const btnLarge = document.getElementById("btn_large");
const btnNormal = document.getElementById("btn_normal");
const p1 = document.getElementById("text_p1");

btnLarge.onclick = function() {
    p1.style.fontSize = "25px";
};

btnNormal.onclick = function() {
    p1.style.fontSize = "16px";
};

const p2 = document.getElementById("text_p2");
const btnUniversal = document.getElementById("btn_universal");
btnUniversal.onclick = function() {
    if (p2.style.fontSize === "16px") {
        btnUniversal.textContent = "Сделать нормальным"
        p2.style.fontSize = "25px";
    } else {
        btnUniversal.textContent = "Сделать большим"
        p2.style.fontSize = "16px";
    }
};


const divTask2 = document.getElementById("task2");
const display = document.getElementById("display");
const object1 = document.getElementById("object1");

divTask2.style.backgroundColor = "aquamarine";
divTask2.style.width = "auto";
divTask2.style.height = "auto";
divTask2.style.padding = "50px";

display.style.backgroundColor = "azure";
display.style.width = "500px";
display.style.height = "500px";
display.style.position = "relative";
display.style.border = "2px black solid";


object1.style.position = "absolute";
object1.style.backgroundColor = "bisque";
object1.style.width = "96px";
object1.style.height = "96px";
object1.style.border = "2px red solid";
object1.style.top = "0px";
    object1.style.left = "0px";

const buttonsContainer = document.querySelector(".buttons_t2");
const buttons = buttonsContainer.getElementsByTagName("button");
const btnTop = buttons[0];
const btnBottom = buttons[1];
const btnRight = buttons[2];
const btnLeft = buttons[3];

const step = 100;


// тут я подсматрел в Google
btnTop.onclick = function() {
 let currentTop = parseInt(object1.style.top);
        if (currentTop > 0) {
            object1.style.top = `${currentTop - step}px`;
        }
};

btnBottom.onclick = function() {
        let currentTop = parseInt(object1.style.top);
        const displayHeight = display.clientHeight;
        const objectHeight = object1.clientHeight;
        if (currentTop + step <= displayHeight - objectHeight) {
            object1.style.top = `${currentTop + step}px`;
        }
    };

btnRight.onclick = function() {
        let currentLeft = parseInt(object1.style.left);
        const displayWidth = display.clientWidth;
        const objectWidth = object1.clientWidth;
        if (currentLeft + step <= displayWidth - objectWidth) {
            object1.style.left = `${currentLeft + step}px`;
        }
    };

btnLeft.onclick = function() {
        let currentLeft = parseInt(object1.style.left);
        if (currentLeft > 0) {
            object1.style.left = `${currentLeft - step}px`;
        }

};

