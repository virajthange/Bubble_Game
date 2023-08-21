var hit;
var bubbly;
var s = 0;
var times = 60;

function create_bubbels() {
    var clutter = "";

    for(var a = 0; a<240; a++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector('.bottom-panel').innerHTML = clutter;
}

function create_random_hits() {
    hit = document.querySelector('.hits').innerHTML = Math.floor(Math.random()*10);
}

function timer() {
    var timerint = setInterval(function () {
        if(times > 0) {
            times--;
            document.querySelector('.timy').textContent = times;
        } else{
            clearInterval(timerint);
            document.querySelector('.bottom-panel').innerHTML = `<h1 class="scoring">Game Over!!!  Your final score is ${s}</h1>`;
        }
    }, 1000);
}

function increase_score() {
    s += 10;
    document.querySelector('.score').innerHTML = s;
}

function click_on_bubble() {
    document.querySelector('.bottom-panel').addEventListener("click",function(dets) {
        bubbly = (Number(dets.target.innerHTML));
        if(bubbly == hit) {
            increase_score();
            create_bubbels();
            create_random_hits();
        }
    })
    
}

timer();
create_bubbels();
create_random_hits();
click_on_bubble();