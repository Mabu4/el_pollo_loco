class Chicken extends MovableObject {

    height = 60;
    width = 70;
    y = 370;
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
        this.x = 300 + Math.random() * 500; // Zahl immer zwischen 300 und 800
        this.speed = 0.15 + Math.random() * 0.4;

        this.animate();
    }

    animate(){

        setInterval( () => {
            this.moveLeft();
        }, 1000 / 60); //=60fps

        setInterval( () => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
        
    }

}