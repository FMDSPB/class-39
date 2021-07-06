let database;
let gameState = 0, playerCount;
let form, game, player; 
let allPlayers;
let car1, car2, car3, car4;
let cars;

function preload() {
    
    trackWhole = loadImage("images/track.jpg");

    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    
}

function setup(){
    database = firebase.database();

    createCanvas(displayWidth-20, displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){

    if(playerCount === 4)
    game.update(1)

    if(gameState === 1) {

        clear();
        game.play();

    }

    if(gameState === 2) {

        game.end();
        
    }
}