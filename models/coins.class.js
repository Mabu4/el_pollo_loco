class Coins extends MovableObject {

    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    width = 80;
    height = 80;

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png')
        this.loadImages(this.IMAGES);
        this.x = 700 + Math.random() * 2300; // Zahl immer zwischen 700 und 3000
        this.y = 150 + Math.random() * 170;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 500);
    }

}