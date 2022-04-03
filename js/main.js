let words = []

function startGame() {
    document.getElementById('start_screen').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
}

function game_over(){
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('game_over').classList.remove('d-none');
    setTimeout(function(){
        refresh();
    }, 2000);
}


function refresh() {
    window.top.location.reload(true);
}

function openFullscreen(){
    document.getElementById('canvas').requestFullscreen();
}


/*

function saveGameOver(){
    words.push('gameOver');
    let key = 'word';
    localStorage.setItem(key, JSON.stringify(words));
}

function checkGameOver(){
    let words = JSON.parse(localStorage.getItem('word'));
    if(words.length > 1){
        initLevel(); 
        init();
        startGame();
    }
}

*/

