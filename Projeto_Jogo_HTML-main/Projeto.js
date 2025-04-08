let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

teclas = {};

var ponto = 0

var n

let player = {
    x:200,
    y:200,
    cor:"#0000ff",
    speed:4,
    altura:30,
    largura:20
}
let rival = {
    x:600,
    y:200,
    cor:"#ff0000",
    altura: 25,
    largura: 15,
    dirY: (Math.random()*4),
    dirX: (Math.random()*4),
    mod:0
}

let bola = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 6,
    cor: "#ff0000",
    speed: 2,
    dirX: Math.random()*4,
    dirY: Math.random()*4,
    mod: 0
}

let bola2 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 6,
    cor: "#ff0000",
    speed: 2,
    dirX: Math.random()*4,
    dirY: Math.random()*4,
    mod: 0
}

let bola3 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 6,
    cor: "#ff0000",
    speed: 2,
    dirX: Math.random()*4,
    dirY: Math.random()*4,
    mod: 0
}

let bola4 = {
    x: canvas.width/2,
    y: canvas.height/2,
    raio: 6,
    cor: "#ff0000",
    speed: 2,
    dirX: Math.random()*4,
    dirY: Math.random()*4,
    mod: 0
}

document.addEventListener("keydown", function (evento){
    teclas[evento.keyCode] = true;
    console.log(teclas);
});

document.addEventListener("keyup", function (evento){
    delete teclas[evento.keyCode];
    console.log(teclas);
});

//movimento do player
function movePlayers(){
    //esquerda - 65
    if(65 in teclas && player.x > 0)
        player.x -= player.speed;

    //direita - 68
    if(68 in teclas && player.x + player.altura <= canvas.width/2)
        player.x += player.speed;

    //sobe - 87
    if(87 in teclas && player.y > 0)
        player.y -= player.speed;

    //desce - 83
    if(83 in teclas && player.y + player.altura < canvas.height)
        player.y += player.speed;

    if(85 in teclas)
        victory()

    if(79 in teclas)
        lose()

}

//movimento do rival
function moveRival(){
    rival.x+=rival.dirX
    rival.y +=rival.dirY
    let sla = Math.round(Math.random()) * 2 - 1
    if(rival.x + rival.largura >= canvas.width){
        rival.dirX = -(Math.random()*4)
        rival.dirY = (Math.random()*4) * sla
    }
    if(rival.x <= canvas.width/2){
        rival.dirX = (Math.random()*4)
        rival.dirY = (Math.random()*4) * sla
    }
    if(rival.y<= 0){
        rival.dirX = (Math.random()*4) * sla
        rival.dirY = (Math.random()*4)
    }
    if(rival.y+rival.altura>= canvas.height){
        rival.dirX = (Math.random()*4) * sla
        rival.dirY= -(Math.random()*4)
    }

}


//funcao de vitoria





//hitbox do player
function hitbox() {
    if (bola.x - bola.raio <= player.x + player.largura && bola.y > player.y && bola.y <= player.y + player.altura && bola.x >=player.x && player.cor === "#0000ff") {
        lose()
    }
    if (bola2.x - bola2.raio <= player.x + player.largura && bola2.y > player.y && bola2.y <= player.y + player.altura && bola2.x >=player.x && player.cor === "#0000ff") {
        lose()
    }
    if (bola3.x - bola3.raio <= player.x + player.largura && bola3.y > player.y && bola3.y <= player.y + player.altura && bola3.x >=player.x && player.cor === "#0000ff") {
        lose()
    }
    if (bola4.x - bola4.raio <= player.x + player.largura && bola4.y > player.y && bola4.y <= player.y + player.altura && bola4.x >=player.x && player.cor === "#0000ff") {
        lose()
    }
    if (bola.x - bola.raio <= player.x + player.largura && bola.y > player.y && bola.y <= player.y + player.altura && bola.x >=player.x && player.cor === "#00ffff") {
        bola.dirX = Math.random()*4
    }
}

//hitbox do rival
function hitbox2() {
    if (bola2.x + bola2.raio >= rival.x && bola2.y + bola2.raio> rival.y && bola2.y <= rival.y + rival.altura && bola2.x <= rival.x+rival.largura) {
        ponto+=500
        victory()
    }
}

//movimento da bola
function moveBola(){
    let sla = Math.round(Math.random()) * 2 - 1

    bola.x+=bola.dirX
    bola.y+=bola.dirY
    if(bola.y + bola.raio >= canvas.height){
        bola.dirY= -((Math.random() * 5) + bola.mod)
        bola.diX = ((Math.random() * 5) + bola.mod) * sla
        bola.mod+=0.1
    }
    if(bola.x+bola.raio >= canvas.width/2){
        bola.dirY = ((Math.random() * 5) + bola.mod) * sla
        bola.dirX = -(Math.random()*5) - bola.mod
        bola.mod+=0.1
    }
    if(bola.y <= 0){
        bola.dirY = (Math.random()*5)+bola.mod
        bola.dirX = ((Math.random() * 5) + bola.mod) * sla
        bola.mod+=0.1
    }
    if(bola.x <= 0){
        bola.dirY = ((Math.random() * 5) + bola.mod) * sla
        bola.dirX = (Math.random()*5)+bola.mod
        bola.mod+=0.1
    }

}
function moveBola2(){

    bola2.x+=bola2.dirX
    bola2.y+=bola2.dirY
    if(bola2.y + bola2.raio >= canvas.height){
        bola2.dirY= -(Math.random()*4) - bola2.mod
        bola2.mod+=0.1
    }
    if(bola2.x+bola2.raio >= canvas.width){
        bola2.dirX = -(Math.random()*4) - bola2.mod
        bola2.mod+=0.1
    }
    if(bola2.y <= 0){
        bola2.dirY = (Math.random()*4)+bola2.mod
        bola2.mod+=0.1
    }
    if(bola2.x <= 0){
        bola2.dirX = (Math.random()*4)+bola2.mod
        bola2.mod+=0.1
    }
}

function moveBola3() {
    let sla = Math.round(Math.random()) * 2 - 1

    bola3.x += bola3.dirX
    bola3.y += bola3.dirY
    if (bola3.y + bola3.raio >= canvas.height) {
        bola3.dirY = -(Math.random() * 3) - bola3.mod
        bola3.dirX = ((Math.random() * 3) + bola.mod) * sla
        bola3.mod += 0.1
    }
    if (bola3.x + bola3.raio >= canvas.width / 2) {
        bola3.dirY = ((Math.random() * 3) + bola.mod) * sla
        bola3.dirX = -(Math.random() * 3) - bola3.mod
        bola3.mod += 0.1
    }
    if (bola3.y <= 0) {
        bola3.dirY = (Math.random() * 3) + bola3.mod
        bola3.dirX = ((Math.random() * 3) + bola.mod) * sla
        bola3.mod += 0.1
    }
    if (bola3.x <= 0) {
        bola3.dirY = ((Math.random() * 3) + bola.mod) * sla
        bola3.dirX = (Math.random() * 3) + bola3.mod
        bola3.mod += 0.1
    }
}

function moveBola4(){
    bola4.x+=bola4.dirX
    bola4.y+=bola4.dirY
    if(bola4.y + bola4.raio >= canvas.height){
        bola4.dirY= -(Math.random()*2) - bola4.mod
        bola4.mod+=0.1
    }
    if(bola4.x+bola4.raio >= canvas.width/2){
        bola4.dirX = -(Math.random()*2) - bola4.mod
        bola4.mod+=0.1
    }
    if(bola4.y <= 0){
        bola4.dirY = (Math.random()*2)+bola4.mod
        bola4.mod+=0.1
    }
    if(bola4.x <= 0){
        bola4.dirX = (Math.random()*2)+bola4.mod
        bola4.mod+=0.1
    }
}


function pontuacao(){
    ctx.font = "24px Arial"
    ctx.fillText("pontos: " + ponto, 10,20)
}


function jogar() {
    ponto+=1

    ctx.clearRect(0, 0, canvas.width, canvas.height)


    movePlayers()
    moveRival()
    moveBola()
    moveBola2()
    moveBola3()
    moveBola4()
    hitbox()
    hitbox2()
    pontuacao()


    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, 0)
    ctx.lineTo(canvas.width / 2, canvas.height)
    ctx.stroke()

    ctx.fillStyle = bola.cor;
    ctx.beginPath();
    ctx.strokeStyle = "#000000"
    ctx.arc(bola.x, bola.y, bola.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke()

    ctx.fillStyle = bola2.cor;
    ctx.beginPath();
    ctx.strokeStyle = "#000000"
    ctx.arc(bola2.x, bola2.y, bola2.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke()

    ctx.fillStyle = bola3.cor;
    ctx.beginPath();
    ctx.strokeStyle = "#000000"
    ctx.arc(bola3.x, bola3.y, bola3.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = bola4.cor;
    ctx.beginPath();
    ctx.strokeStyle = "#000000"
    ctx.arc(bola4.x, bola4.y, bola4.raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = player.cor
    ctx.fillRect(player.x, player.y, player.largura, player.altura)

    ctx.fillStyle = rival.cor
    ctx.fillRect(rival.x, rival.y, rival.largura, rival.altura)

    n = requestAnimationFrame(jogar)
}


function victory(){
    cancelAnimationFrame(n)

    ctx.clearRect(0,0,canvas.width,canvas.height)

    var tobey= new Image();
    tobey.src="tobi.png";

    ctx.drawImage(tobey,0,0);

    ctx.font = "24px Arial"
    ctx.fillText("Você venceu! Pontuação final: " + ponto, 400,20)

    requestAnimationFrame(victory)

}
function lose(){
    cancelAnimationFrame(n)


    ctx.clearRect(0,0,canvas.width,canvas.height)

    var tobi= new Image();
    tobi.src="tobiderrota.png";

    ctx.drawImage(tobi,0,0);

    ctx.font = "24px Arial"
    ctx.fillText("Você perdeu :(  Pontuação final: " + ponto, 400,20)


    requestAnimationFrame(lose)

}