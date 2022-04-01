class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    coinbar = new CoinBar();
    bottlebar = new BottleBar();
    throwableObjects = [];
    throwthing = new ThrowableObject();


    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.run();
    }

    setWorld(){
        this.character.world = this;
    }

    run(){
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if(this.keyboard.D && this.checkForAvailableBottles()) {
            let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottlebar.percentage = this.bottlebar.percentage - 5;
            this.bottlebar.setPercentage(this.bottlebar.percentage);
        }
    }


    checkForAvailableBottles() {
        if(this.bottlebar.percentage > 0){
            return true;
        } else {
            return false;
        }
    }

    checkCollisions(){
        this.level.enemies.forEach ((enemy) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
        this.level.enemies.forEach ((enemy) => {
            if(this.throwthing.isColliding(enemy)) {
                console.log('hit');
            }
        });
        for (let i = 0; i < this.level.coins.length; i++) {
            const coin = this.level.coins[i];
            if(this.character.isColliding(coin)){
                this.coinbar.percentage = this.coinbar.percentage + 10;
                this.coinbar.setPercentage(this.coinbar.percentage);
                this.level.coins.splice(i, 1);
            }
        }
        for (let i = 0; i < this.level.bottles.length; i++) {
            const bottle = this.level.bottles[i];
            if(this.character.isColliding(bottle)){
                this.bottlebar.percentage = this.bottlebar.percentage + 5;
                this.bottlebar.setPercentage(this.bottlebar.percentage);
                this.level.bottles.splice(i, 1);
            }
        }
        /*
        this.level.coins.forEach ((coin) => {
            if(this.character.isColliding(coin)){
                this.coinbar.percentage = this.coinbar.percentage + 10;
                this.coinbar.setPercentage(this.coinbar.percentage);
                this.level.coins.splice(coin, 1);
            }
        });
        */
    }




    draw(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        
        this.ctx.translate(-this.camera_x, 0);      ///
        this.addToMap(this.statusBar);              //Space for fixed Object
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.ctx.translate(this.camera_x, 0);       ///

        this.addToMap(this.character);  
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
    


        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo){
        if(mo.otherDirection){
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection){
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


}