class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0){
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(){
        if(this instanceof ThrowableObject) { //ThrowableObjects should always falls
            return true;
        } else {
            return this.y < 180;
        }
        
    }

    //character.isColliding(chicken);
    isColliding(mo){
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    hit(){
        this.energy -= 5;
        if(this.energy < 0){
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; //Differenz in Millisekunden
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead(){
        return this.energy == 0;
    }

    playAnimation(images){
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    moveAuto(){
        var id = setInterval(() => {
            this.x -= this.speed;
            this.otherDirection = false;
            if(this.x <= this.movingEnd){clearInterval(id); this.moveSwitchAuto(this.movingEnd, this.movingStart);}
        }, 1000 / 60);
    }

    moveSwitchAuto(movingEnd, movingStart){
        var id = setInterval(() => {
            this.x += this.speed;
            this.otherDirection = true;
            if(this.x >= movingStart){clearInterval(id); this.moveAuto(movingEnd, movingStart);}
        }, 1000 / 60);
    }
    
    jump(){
        this.speedY = 30;
    }

   


}