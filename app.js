// Тоглогчийн ээлжийг хадгалах хувьсагч. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

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

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener('click', function(){

// 1-6 доторх санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
// Шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.style.display = 'block';

// Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ. 
    diceDom.src = "dice-" + diceNumber + ".png";

    console.log('Шоо ' + diceNumber + ' буулаа');

// Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн тоог өөрчилнө
    if(diceNumber !== 1) {
        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

        // Тоглогчийн ээлжийг сольно.
        switchToNextPlayer();
    }
});

// Hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function(){
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобал оноон дээр нь нэмж өгнө.
    // if(activePlayer === 0) {
    //     scores[0] = scores[0] + roundScore;
    // } else {
    //     scores[1] = scores[1] + roundScore;
    // }
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогчийн хожсон эсэхийг (Оноо нь 100-аас их эсэх) шалгах.
    if(scores[activePlayer] >= 10) {
        // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.player-' + activePlayer + '-panel').   classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').   classList.remove('active');
    } else {
        // Тоглогчийн ээлжийг сольно.
        switchToNextPlayer();
    }
})

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
      // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      roundScore = 0;
      document.getElementById("current-" + activePlayer).textContent = 0;
      
      // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.        
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      // Хэрэв идэвхитэй тоглогч 0 байвал идэвхитэй тоглогчийг 1 болго.
      // Үгүй бол идэвхитэй тоглогчийг 0 болго.

      // Улаан цэгийг шилжүүлэх 
      document.querySelector('.player-0-panel').classList.toggle("active");
      document.querySelector('.player-1-panel').classList.toggle("active");

      // Шоог түр алга болгоно.
      diceDom.style.display = 'none';

    //   alert("Дараагийн тоглогч руу шилжлээ!");
}