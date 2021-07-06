class Game {
    constructor() {}
    
    getState() {

        let gameStateRef = database.ref('gamestate');

        gameStateRef.on("value", function(data) {
            gameState = data.val();
        });
    }

    update(state) {

        database.ref('/').update({
            gamestate:state
        })
    }

    async start() {

        if(gameState === 0) {

            player = new Player();
            
            let playerCountRef = await database.ref('playerCount').once("value")

            if(playerCountRef.exists()) {

                playerCount = playerCountRef.val();
                player.getCount();

            }

            form = new Form();
            form.display();
            
        }

        car1 = createSprite(100, 200);
        car1.addImage(car1Img);

        car2 = createSprite(300, 200);
        car2.addImage(car2Img);

        car3 = createSprite(500, 200);
        car3.addImage(car3Img);

        car4 = createSprite(700, 200);
        car4.addImage(car4Img);

        cars = [car1, car2, car3, car4];

    }

    play() {

        form.hide();

        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined) {

            background("#c68767");

            image(trackWhole, 0, -displayHeight*4, displayWidth, displayHeight*5);

            let index = 0
            let x = 200, y;

            //let displayPosition = 130;
            for(var plr in allPlayers) {

                /*if(plr === "player" + player.index) 
                fill('red');
                else
                fill("black");

                displayPosition += 20;

                textSize(15);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition);*/

                index ++;
                x += 200;
                y = displayHeight - allPlayers[plr].distance

                cars[index - 1].x = x;
                cars[index - 1].y = y;

                if(index === player.index) {
                    
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;

                }

                drawSprites();

            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null) {

            player.distance += 50;
            player.update();

        }

        if(player.distance >= 2000) {

            gameState = 2;
            
        }

    }

    end() {

        console.log("game ended");

    }

}