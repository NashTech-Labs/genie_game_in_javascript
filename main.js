let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

//ordem aleatória de cores
let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()* 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
       
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    
    setTimeout(() => {
        element.classList.add("selected");
        console.log("acendi")
        setTimeout(() => {
            element.classList.remove("selected");
            console.log("apaguei")
        },200);
    },number - 250);

}

    
//checa se os botões foram clicados na ordem correta
let checkOrder = () => {

    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length){      
            document.getElementById("pontos").innerHTML = (`Pontuação: ${score}`);       
            nextLevel();      
    }

}

//checando ordem do clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
        console.log("ordem de clique")
    }, 250);

}

//função que retorna a cor
let createColorElement=(color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função próximo nível
let nextLevel = () =>{
    score++;
    shuffleOrder();
    
}

//função game over
let gameOver = () => {
    
    alert(`GAME OVER!\n\nClick Ok to start a new game.`)
    order = [];
    clickedOrder = [];
    restart();
    document.getElementById("pontos").innerHTML = (`Pontuação: 0`)
    
}

let countTime = () => {
    setTimeout(myTimeout1,1000)
    setTimeout(myTimeout2,2000)
    setTimeout(myTimeout3,3000)
    setTimeout(myTimeout4,4000)
    
}
function myTimeout1(){
    document.getElementById("pontos").innerHTML = (`Começa em 3`)
}
function myTimeout2(){
    document.getElementById("pontos").innerHTML = (`Começa em 2`)
}
function myTimeout3(){
    document.getElementById("pontos").innerHTML = (`Começa em 1`)
}
function myTimeout4(){
    document.getElementById("pontos").innerHTML = (``)
    nextLevel();
}

let restart = ()=>{
    alert("          Starting over... ")
    score = 0;
    nextLevel();
    document.getElementById("pontos").innerHTML = (`Pontuação: ${score}`);
}
//função de início
let playGame = () => {
    alert("          Welcome! Geni Game is a memory game.\n\INSTRUCTIONS:\n          Click the correct order of buttons to earn points and level up. ")
    score = 0;   
    countTime();
    document.getElementById("pontos").innerHTML = (`Pontuação: ${score}`);

}

//eventos de cliques
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
