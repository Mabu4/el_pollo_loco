class FastChicken extends MovableObject {

    height = 60;
    width = 70;
    y = 370;
    speed = 0.3;
    movingEnd = 700;
    movingStart = 3600;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    

    constructor(){
        //super() wird verwendet um Methoden von dem übergeordneten Objekt aufzurufen
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);

        // Bei Variablen verändern brauchen wir kein super()
        this.x = 1500 + Math.random() * 2400; // Zahl immer zwischen 1500 und 3900
        this.movingStart = this.x;
        this.movingEnd = this.x - (200 + Math.random() * 1000);
        this.speed = 0.4 + Math.random() * 1;

        this.animate();
    }

    animate(){
        setInterval( () => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
        this.moveAuto(this.movingEnd, this.movingStart);
    }

}