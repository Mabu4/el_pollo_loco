class Cloud extends MovableObject{

    y = 20;
    width = 500;
    height = 250;
    

    constructor(){
        //super() wird verwendet um Methoden von dem übergeordneten Objekt aufzurufen
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        // Bei Variablen verändern brauchen wir kein super()
        this.x = Math.random() * 250; // Zahl immer zwischen 200 und 700

        this.animate();
    }

    animate(){
        this.moveLeft();
    }

}