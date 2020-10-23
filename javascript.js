let flag = true;
let start = false;
let angka = 20;
let skor = 0;
let hs = 0;
let bgm = document.getElementById("bgmusic");
document.getElementById("timer").innerHTML = `Timer : ${angka}`;
document.getElementById("score").innerHTML = `Score : ${skor}`;
document.getElementById("highscore").innerHTML = `High Score : ${hs}`;
bgm.volume = 0.8;

function mulai(){

    flag = false;
    start = true;
    var interval = setInterval(myTimer, 1000);
    document.getElementById("timer").innerHTML = `Timer : ${angka}`;
    document.getElementById("score").innerHTML = `Score : ${skor}`;
    document.getElementById("highscore").innerHTML = `High Score : ${hs}`

    movement();

    function myTimer(){
        if(hs < skor){
            hs = skor;
        }
        angka -= 1;
        document.getElementById("timer").innerHTML = `Timer : ${angka}`;
        if(angka === 0){
            clearInterval(interval);
            flag = true;
            start = false;
            skor = 0;
            angka = 20;
            document.getElementById("test").style.top = '50%';
            document.getElementById("test").style.left = '40%';
            document.getElementById("highscore").innerHTML = `High Score : ${hs}`  
        }
    }
}
       
    document.getElementById("test").onclick = function(){
        if(start === true){
            play();
            skor++;
            document.getElementById("score").innerHTML = `Score : ${skor}`;
            movement();
            } 
    }
        

function movement(){
    let nilai1 = Math.floor(Math.random()*70);
    let nilai2 = Math.floor(Math.random()*90);
    nilai1 += '%';
    nilai2 += '%';
    document.getElementById("test").style.transition = '0.2s';
    document.getElementById("test").style.top = nilai1;
    document.getElementById("test").style.left = nilai2;
    console.log(nilai1 + '%');
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

function play2() {
    var audio = document.getElementById("buttonSound");
    audio.play();
  }