document.getElementById('exchange-button').addEventListener('click', function(e) {
    var geld_betrag = document.getElementById('money-input').value.trim();

    const zweiEuro = 200;
    const einEuro = 100;
    const fünfzigCent = 50;
    const zwanzigCent = 20;
    const zehnCent = 10;
    const fünfCent = 5;
    const zweiCent = 2;
    const einCent = 1;

    let _zweiEuroCounter = 0;
    let _einEuroCounter = 0;
    let _fünfzigCentCounter = 0;
    let _zwanzigCentCounter = 0;
    let _zehnCentCounter = 0;
    let _fünfCentCounter = 0;
    let _zweiCentCounter = 0;
    let _einCentCounter = 0;

    function validitionOfInput(geld_betrag) {
        var regex = /^\d+,\d{2}$/;
        return regex.test(geld_betrag);
    }

    try {
        if (validitionOfInput(geld_betrag)) {
            var changedString = geld_betrag.replace(",", ".");
            var floatNum = parseFloat(changedString);
            var centValue = Math.round(floatNum * 100);

            _zweiEuroCounter = Math.floor(centValue / zweiEuro);
            centValue %= zweiEuro;

            _einEuroCounter = Math.floor(centValue / einEuro);
            centValue %= einEuro;

            _fünfzigCentCounter = Math.floor(centValue / fünfzigCent);
            centValue %= fünfzigCent;

            _zwanzigCentCounter = Math.floor(centValue / zwanzigCent);
            centValue %= zwanzigCent;

            _zehnCentCounter = Math.floor(centValue / zehnCent);
            centValue %= zehnCent;

            _fünfCentCounter = Math.floor(centValue / fünfCent);
            centValue %= fünfCent;

            _zweiCentCounter = Math.floor(centValue / zweiCent);
            centValue %= zweiCent;

            _einCentCounter = Math.floor(centValue / einCent);
            centValue %= einCent;

            var message = document.getElementById('money-output');
            message.innerHTML = "Sie bekommen: <br>" +
                _zweiEuroCounter + " Mal Zwei-Euro-Münzen. <br>" +
                _einEuroCounter + " Mal Ein-Euro-Münzen. <br>" +
                _fünfzigCentCounter + " Fünfzig-Cent-Münzen. <br>" +
                _zwanzigCentCounter + " Mal Zwanzig-Cent-Münzen. <br>" +
                _zehnCentCounter + " Zehn-Cent-Münzen. <br>" +
                _fünfCentCounter + " Fünf-Cent-Münzen. <br>" +
                _zweiCentCounter + " Zwei-Cent-Münzen. <br>" +
                _einCentCounter + " Ein-Cent-Münzen.";
        } else {
            alert("Falsches Format. Der eingegebene Betrag ist nicht korrekt. Richtig: 20,50 oder 130,80");
        }
    } catch (e) {
        console.error(e);
        alert("Ein Fehler ist aufgetreten. Probieren Sie es, bitte, noch einmal!");
    }
});

// Kode für die Aufgabe: Sprachschule

// als erstes werden die Namen zugefügt

var sprachKursList  = [];
var sprachKursList2  = [];

document.getElementById('regButton1').addEventListener('click', function(){
    var inputNamen = document.getElementById('namen1').value;
    sprachKursList.unshift(inputNamen);
    alert("Sie haben " + inputNamen + " erfolgreich zur Sprachkurs Nr.: 1 zugefügt!");
});
document.getElementById('regButton2').addEventListener('click', function(){
    var inputNamen2 = document.getElementById('namen2').value;
    sprachKursList2.unshift(inputNamen2);
    alert("Sie haben " + inputNamen2 + " erfolgreich zur Sprachkurs Nr.: 2 zugefügt!");
});

// als letztens wird der Name in beiden arrays gesucht

document.getElementById('suchButton').addEventListener('click', function(){
     var searchName = document.getElementById('suchName').value;
    if(sprachKursList.includes(searchName)|| sprachKursList2.includes(searchName)){
        alert(searchName + " ist eingeschrieben.");
    }else alert(searchName + " ist nicht eingeschrieben.");
});

// Hier wird der Teilnehmer zu einem Kurs automatisch zugefügt, der gerade am wenigsten Teilnehmer hat.

document.getElementById('autoRegButton').addEventListener('click', function(){
    var inputName = document.getElementById('autoReg').value;
    if(sprachKursList.length > sprachKursList2.length){
        sprachKursList2.unshift(inputName);
        alert("Sie haben " + inputName + " erfolgreich zur Sprachkurs Nr.: 2 zugefügt!");
    }
    else{
        sprachKursList.unshift(inputName);
        alert("Sie haben " + inputName + " erfolgreich zur Sprachkurs Nr.: 1 zugefügt!");
    }
});

// Methode, die überprüft, ob ein Teilnehmer in beiden Sprachkursen vorhanden ist, wenn ja dann wird er aus der liste gelöscht

document.getElementById('deleteButton').addEventListener('click', function() {
    var nameToDelete = document.getElementById('nameToDelete').value;
    if(sprachKursList.includes(nameToDelete)){
        var indexOFDeleteName = sprachKursList.indexOf(nameToDelete);
        sprachKursList.splice(indexOFDeleteName, 1);
        alert("Der Teilnehmer: " + nameToDelete + " wurde aus allen Kursen entfernt.");
    }
    else if (sprachKursList2.includes(nameToDelete)) {
        var indexOFDeleteName2 = sprachKursList2.indexOf(nameToDelete);
        sprachKursList2.splice(indexOFDeleteName2, 1);
        alert("Der Teilnehmer: " + nameToDelete + " wurde aus allen Kursen entfernt.");
    } else {
        alert(nameToDelete + " ist in keinem Kurs eingeschrieben. Überprüfen Sie, ob der Namen richtig geschrieben wurde!");
    }
});

// numberOfStudents zeigt Kosten pro Teilnehmer: ein Telnehmer = 40€, 2 bis 5 Teilnehmer = 25€, ab 6 = 15€.

function numberOfStudents(kurs){
    var lenghtOfKurs = kurs.length;
    if(lenghtOfKurs == 0){
        return "Es sind keine Teilnehmer vorhanden.";
    }
    else if(lenghtOfKurs == 1){
        return "Der Sprachkurs kostet: 40€ pro Stunde pro Teilnehmer";
    }
    else if(lenghtOfKurs >= 2 && leghtOfKurs <= 5){
        return "Der Sprachkurs kostet: 25€ pro Stunde pro Teilnehmer";
    }
    else{
        return "Der Sprachkurs kostet: 15€ pro Stunde pro Teilnehmer";
    }
}

document.getElementById('showCourseButton1').addEventListener('click', function(e){
    var costenText = numberOfStudents(sprachKursList);
    document.getElementById('courseCosts1').textContent = costenText;
});
document.getElementById('showCourseButton2').addEventListener('click', function(e){
    var costenText = numberOfStudents(sprachKursList2);
    document.getElementById('courseCosts2').textContent = costenText;
});

 // Kursen gleichmäßig aufteilen

 function getdifferOfCourses (course1, course2){
    if(course1.length === course2.length){ 
        return false; 
    }
    else if((course1.length - course2.length == 1) || (course2.length - course1.length == 1)){
        return false;
    }
    else return true;
 }

 document.getElementById('splitButton').addEventListener('click', function(){
    let decision = getdifferOfCourses(sprachKursList, sprachKursList2);
   if(decision === false){
    alert("Die Sprachkursen könnten nicht aufgeteilt werden, sie haben schon eine optimale Verteilung. ");

   }
   else {
    var twoArrays = sprachKursList.concat(sprachKursList2);
    sprachKursList = twoArrays.slice(0, Math.ceil(twoArrays.length/2));
    sprachKursList2 = twoArrays.slice((Math.ceil(twoArrays.length/2)), twoArrays.length); 
    alert("Sprachkurs Nr. 1 : " + sprachKursList + " \nSprachkurs Nr. 2 : " + sprachKursList2);
   }
 });

 // Levels und Kosten berechnen

 let levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
 let prices = [400, 500, 550, 600, 650, 700];
 

 document.getElementById('levelPriceButton').addEventListener('click', function(event){
    event.preventDefault();
    let priceCounter = 0;
    let fromLevel = document.getElementById('levelsOpt').value;
    let toLevel = document.getElementById('levelsOpt2').value;
    let indexOfStartLevel = levels.indexOf(fromLevel);
    let indexOfEndLevel = levels.indexOf(toLevel);
    if(indexOfStartLevel > indexOfEndLevel ){
        alert("Sie haben die Sprachlevels falsch ausgewählt");
    } else {
    for (let index = indexOfStartLevel; index <= indexOfEndLevel; index++) {
        priceCounter += prices[index];
    }
    alert("Gesamtpreis für die gewählten Levels: " + priceCounter + " Euro");
}
 });

 // Level berechnen

 document.getElementById('levelCounter').addEventListener('click', function() {
    let budget = parseInt(document.getElementById('budget').value);
    let actLevel = '';
    let budgetcounter = 0;

    for (let i = 0; i < prices.length; i++) {
        if (budget >= (budgetcounter + prices[i])) {
            budgetcounter += prices[i];
            actLevel = levels[i]; 
        } else {
            break; 
        }
    }

    alert("Mit dem Budget von " + budget + " können Sie bis " + actLevel + " erreichen.");
});

// Beispiel 6
let studentsPerCourse = [
    ["Max", "Monika"], // Erster Kurs
    ["Erik", "Erika"] // Zweiter Kurs
    ]
    // Die Anzahl der Teilnehmer berechnen
    document.getElementById('totalNmOfStudButton').addEventListener('click', function(){
        let allStudents = 0;

        studentsPerCourse.forEach(element => {
            element.forEach(student =>{
                allStudents++; 
            });
            
        });
        alert("In unseren Kursen sind insgesamt: " + allStudents + " Studenten eingeschrieben.");
    });

    // Ein Student löschen
    document.getElementById("deleteBtn").addEventListener("click", function() {
        let deletedName = document.getElementById('nameForDelete').value;
        let found = false;

        studentsPerCourse.forEach((course, index) => {
            const studentIndex = course.indexOf(deletedName);
            if (studentIndex !== -1) {
                studentsPerCourse[index].splice(studentIndex, 1);
                found = true;
                alert(deletedName + " wurde aus dem Kurs entfernt.");
                // Nach dem Löschen eines Studenten, brechen wir die Schleife ab
                return;
            }
        });

        if (!found) {
            alert(deletedName + " ist nicht eingeschrieben.");
        }
    });

    const courses = [
        ['Christian', 'Annika'],
        ['Julian', 'Lisa', 'Tobias']
    ]

    function getSmallestCourse(){
        for (let index = 0; index < courses.length; index++) {
            var indexOfCourse = 0;
            var actCourse = courses[index].length;
            var smallestKurs = 0;
            if (smallestKurs <= actCourse){
                smallestKurs = actCourse;
            
            }
            else{
                smallestKurs = courses[index].length;
                indexOfCourse = index;
            }
            
        }
        console.log("Der Kurs "+ indexOfCourse + " ist aktuell der kleinste \n" + " und hat " + smallestKurs + " Teilnehmer.");
        return indexOfCourse;
        
    }

    function addStudent(name){
        const smallestKurs = getSmallestCourse();
        courses[smallestKurs].unshift(name);
        console.log(name + " wurde zugefügt")
    }

    // Übung 8, Wörterbuch

    const LANGUAGE_DE = ["hallo","heute","sprachkurs","willkommen","mikrofon","und"]
    const LANGUAGE_EN = ["hello","today","language course","welcome","microphone","and"]


    function translateWord(word) {
        let existWord = LANGUAGE_DE.includes(word.toLowerCase());
        if(existWord){
            let indexOFWord = LANGUAGE_DE.indexOf(word.toLowerCase());
            return LANGUAGE_EN[indexOFWord];
        }
        else{
            return word;
        }
    
    }

    function ucFirst(word){
        if(word == ""){return "";} 
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1); 
    
        return firstLetter + restOfWord;

    }

    function translateSentence(sentence) {
        let splitedSentence = sentence.split(" ");
        let engWords = [];  
        for (let index = 0; index < splitedSentence.length; index++) {
            if(index == 0){
                let transeW = translateWord(splitedSentence[0]);
                engWords.push(ucFirst(transeW));
                
            }
            else{
                engWords.push(translateWord(splitedSentence[index]));
            }
            
        }
        let completedSentencse = engWords.join(" ");
        
        return completedSentencse;
    }

    console.log(translateSentence("Hallo und willkommen beim Sprachkurs"));



    























































