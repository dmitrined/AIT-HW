const player = document.getElementById("player");
const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let x = 180;
let y = 130; 
const step = 25;


function move(direction){
    switch(direction){
       case "up": y = Math.max(0 , y - step); break;  
       case "down": y = Math.min( 260 , y + step); break;  
       case "left": x = Math.max(0, x - step); break;  
       case "right": x = Math.min(360 , x + step); break;  
    }
    player.style.left = x+"px";
    player.style.top = y+"px";
}

btnUp.addEventListener('click', () => {move("up");}   );
btnDown.addEventListener('click', () => move("down")   );
btnLeft.addEventListener('click', () => move("left")   );
btnRight.addEventListener('click', () => move("right")   );

// клавиатура
document.addEventListener('keydown',  (e) => {
    switch (e.code){
        case "ArrowUp": move("up"); break;
        case "ArrowDown": move("down"); break;
        case "ArrowRight": move("right"); break;
        case "ArrowLeft": move("left"); break;
    }
}   );






