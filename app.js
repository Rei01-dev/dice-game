// Тоглоомын бүх газар ашиглагдах глобаль хувьсагчдыг энд зарлая.
var activePlayer; // Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var scores; // Хоёр тоглогчийн цуглуулсан оноонууд.
var roundScore; // Идэвхитэй тоглогчийн цуглуулж байгаа ээлжийн оноо.

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалъя.
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
newGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэе.
function newGame() {
    // Тоглогчийн ээлжийг хадгалах хувьсагч. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;

    // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч.
    scores = [0, 0];

    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
    roundScore = 0;

    // Программ эхлэхэд бэлтгэе
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // Тоглогчдын нэрийг буцааж гаргах
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    // Тоглогчдын нэрний улааныг арилгах
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Тоглоомыг ахин эхлүүлэх үед эхний тоглогчийн нэрний хойно байгаа улаан цэгийг харуулах. Яг аль тоглогч хожсон бэ гэдгийг мэдэхгүй учир хоёулангаас нь хасч байгаад нэмнэ.
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

    diceDom.style.display = 'none';
};

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
}

// Тоглоомийг шинээр эхлүүлэх товчийг программчлах
document.querySelector('.btn-new').addEventListener('click', newGame);