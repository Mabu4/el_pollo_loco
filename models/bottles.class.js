class Bottles extends MovableObject {

    width = 60;
    height = 60;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png')
        this.x = 500 + Math.random() * 2300; // Zahl immer zwischen 500 und 2800
        this.y = 370;
    }

}