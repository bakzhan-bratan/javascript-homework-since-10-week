//task1
/* let course = prompt("Курс нөміріңізді енгізіңіз (1, 2, 3 немесе 4):");
let isAlmaty = prompt("Алматыдан келдіңіз бе? (yes немесе no):");
if ((course == 1 || course == 2) && isAlmaty == "no"){
    alert("Сізге жатақханадан орын беріледі");
}
else{
    alert("Сізге жатақханадан орын берілмейді");
} */

//task2
alert(" ойынның шарты: әрбір дұрыс жауап үшін 1 ұпай беріледі.")
let surak1 = prompt("Қазақстанның тәуелсіздік алған жылы?");
let surak2 = prompt("Қазір оқып жатқан қаласыңыз? (Almaty немесе Baska)");
var score1 = 0; 
var score2 = 1; 
var score3 = 2;
if (surak1 == 1991 && surak2 == "Almaty") {
    alert("Сіздің ұпайыңыз: " + score3)
} 
else if ((surak1 == 1991 || surak2 == "Baska")) {
    alert("Сіздің ұпайыңыз: " + score2);
} 
else {
    alert("Сіздің ұпайыңыз: " + score1);
}
