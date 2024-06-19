// Тоглогчийн ээлжийг хадгалах хувьсагч. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
var roundScore = 0;

// Шооны аль талаараа буусанг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

console.log("Шоо " + diceNumber + " буулаа");

// Программ эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");

diceDom.style.display = 'none';

// Roll dice товчийг программчлая
document.querySelector(".btn-roll").addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = 'block';

    // if(diceNumber === 1) {
    //         document.querySelector(".dice").src = 'dice-1.png';
    //     } else if(diceNumber === 2) {
    //         document.querySelector(".dice").src = 'dice-2.png';
    //     } else if(diceNumber === 3) {
    //         document.querySelector(".dice").src = 'dice-3.png';
    //     } else if(diceNumber === 4) {
    //         document.querySelector(".dice").src = 'dice-4.png';
    //     } else if(diceNumber === 5) {
    //         document.querySelector(".dice").src = 'dice-5.png';
    //     } else if(diceNumber === 6) {
    //         document.querySelector(".dice").src = 'dice-6.png';
    //     } else {
    //         console.log('aldaa garlaa');
    //     }
    diceDom.src = "dice-" + diceNumber + ".png";

    console.log('Шоо ' + diceNumber + ' буулаа');
});