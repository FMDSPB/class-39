class Form {
    constructor() {

        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");

    }

    display() {

 
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2-40, displayHeight/2 - 80);

        this.button.position(displayWidth/2+20, displayHeight/2 - 50);

        this.button.mousePressed( ()=> {

            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount ++;

            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 + 80, displayHeight/2 - 40);
            
        })
    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }
}