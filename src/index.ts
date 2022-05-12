const name1Input = document.getElementById("name-1") as HTMLInputElement;
const name2Input = document.getElementById("name-2") as HTMLInputElement;

const sternzeichen1Auswahl = document.getElementById("sternzeichen-1") as HTMLDivElement;
const sternzeichen2Auswahl = document.getElementById("sternzeichen-2") as HTMLDivElement;

const sternzeichen1Input = document.getElementById("sternzeichen-1-input") as HTMLDivElement;
const sternzeichen2Input = document.getElementById("sternzeichen-2-input") as HTMLDivElement;

const jetztBerechnen = document.getElementById("jetztBerechnen") as HTMLButtonElement;

const ergebnis = document.getElementById("ergebnis") as HTMLDivElement;
const ergebnisText = document.getElementById("ergebnis-text") as HTMLDivElement;
const ladebalkenAnteil = document.getElementById("ladebalken-anteil") as HTMLDivElement;
const ladebalkenProzent = document.getElementById("ladebalken-prozent") as HTMLDivElement;

const closeErgebnis = document.getElementById("closeErgebnis") as HTMLDivElement;

// 75 - 100%
const arrayA = [
  "Steinbock:Fische",
  "Fische:Skorpion",
  "Zwilling:Stier",
  "Waage:Widder",
  "Widder:Steinbock"
];

// 50 - 74%
const arrayB = [
  "Wassermann:Wassermann",
  "Steinbock:Steinbock",
  "Jungfrau:Jungfrau",
  "Widder:Widder",
  "Zwillinge:Zwillinge",
  "Schütze:Widder",
  "Stier:Waage",
  "Löwe:Widder",
  "Skorpion:Fische"
];


// 25 - 49%
const arrayC = [
  "Steinbock:Jungfrau",
  "Steinbock:Stier",
  "Steinbock:Skorpion",
  "Wassermann:Waage",
  "Wassermann:Zwillinge",
  "Fische:Krebs",
  "Widder:Wassermann",
  "Stier:Krebs",
  "Stier:Jungfrau",
  "Zwillinge:Waage",
  "Zwillinge:Löwe",
  "Krebs:Löwe",
  "Krebs:Skorpion",
  "Löwe:Waage",
  "Jungfrau:Krebs",
  "Jungfrau:Skorpion",
  "Schütze:Löwe",
  "Schütze:Waage",
  "Schütze:Wassermann"
];


// 0 - 24%
const arrayD = [
  "Steinbock:Waage",
  "Steinbock:Widder",
  "Wassermann:Widder",
  "Wassermann:Skorpion",
  "Fische:Löwe",
  "Fische:Jungfrau",
  "Fische:Schütze",
  "Widder:Stier",
  "Widder:Krebs",
  "Stier:Wassermann",
  "Zwillinge:Skorpion",
  "Krebs:Zwillinge",
  "Krebs:Schütze",
  "Krebs:Waage",
  "Löwe:Stier",
  "Löwe:Jungfrau",
  "Löwe:Skorpion",
  "Jungfrau:Zwillinge",
  "Jungfrau:Waage",
  "Jungfrau:Wassermann",
  "Waage:Skorpion",
  "Waage:Fische",
  "Skorpion:Widder",
  "Skorpion:Stier",
  "Schütze:Stier",
  "Schütze:Jungfrau"
];



jetztBerechnen.addEventListener("click", berechnen);



function sternzeichenMenu(){
  let elemente = document.getElementsByClassName("steinzeichen-element");

  for(let i=0; i<elemente.length; i++){
    elemente[i].addEventListener("click", sternzeichenAngeklickt)
  }
}

sternzeichenMenu();

function sternzeichenAngeklickt(){
  let angeklicktesElement = event?.target as HTMLDivElement;

  let elternElement  = angeklicktesElement.parentElement as HTMLDivElement;
  let grosselternElement = elternElement.parentElement as HTMLDivElement;

  let aktivesElement = grosselternElement.getElementsByClassName("sternzeichen-aktiv")[0] as HTMLDivElement;

  aktivesElement.innerHTML = angeklicktesElement.innerHTML;
}


function berechnen(){
  
  let name1 = name1Input.value;
  let name2 = name2Input.value;

  let sternzeichen1 = sternzeichen1Input.innerHTML;
  let sternzeichen2 = sternzeichen2Input.innerHTML;

  let error = false;

  if(sternzeichen1 == "Bitte wählen..." || sternzeichen2 == "Bitte wählen...") {
    error = true;
  }
  else if(name1.length == 0 || name2.length == 0 ) {
    error = true;
  }

  if(!error){
    let kombi1: string = sternzeichen1 + ":" + sternzeichen2;
    let kombi2: string = sternzeichen2 + ":" + sternzeichen1;

    let punkte = 0;

    if( arrayA.indexOf( kombi1 ) > -1 || arrayA.indexOf( kombi2 ) > -1 ){
      punkte = rechnungA();
    }
    else if( arrayB.indexOf( kombi1 ) > -1 || arrayB.indexOf( kombi2 ) > -1 ){
      punkte = rechnungB();
    }
    else if( arrayC.indexOf( kombi1 ) > -1 || arrayC.indexOf( kombi2 ) > -1 ){
      punkte = rechnungC();
    }
    else if( arrayD.indexOf( kombi1 ) > -1 || arrayD.indexOf( kombi2 ) > -1 ){
      punkte = rechnungD();
    }
    else{
      punkte = rechnungE();
    }

    showErgebnis(punkte, name2);

  }
  else{
    alert("Bitte Namen eingeben und Sternzeichen auswählen.");
  }

}

function showErgebnis(punkte: number, name2: string){
  ladebalkenProzent.innerHTML = punkte + '%';
  ergebnis.classList.add("in");

  let widthAsPercent = ladebalkenProzent.clientWidth / 100 * punkte;
  ladebalkenAnteil.style.width = widthAsPercent + 'px';


  let text = "";


  if(punkte >= 75){
    text = "Love is in the air! Ihr beide seid wie für einander gemacht. Dir und " + name2 + " steht nichts im Weg. Vergiss nicht, yourcrush. als deinen persönlichen Amor in deiner Hochzeitsrede zu erwähnen!";
  }
  else if(punkte >= 50){
    text = "So wie es aussieht, passen du und " + name2 + " gut zusammen. Wie in jeder Beziehung könntet auch ihr gute und schlechte Zeiten erleben – was euch jedoch nicht davon abhalten sollte, es miteinander zu probieren! Wenn mal was nicht läuft wie du es willst, solltest du dich nicht scheuen es vor " + name2 + " anzusprechen. So könnte wirklich was aus euch beiden werden!";
  }
  else if(punkte >= 25){
    text = "Da knistert es, doch für die große Liebe reicht es leider nicht. Sowohl du, als auch " + name2 + " müssen in einer Beziehung einige Kompromisse eingehen. Ihr müsst euch bewusst sein, dass der Aufwand, den ihr für eure Beziehung betreibt, vielleicht umsonst sein könnte.";
  }
  else{
    text = "Ups! Wie es aussieht, harmoniert ihr wohl überhaupt nicht miteinander. Solltet ihr euch dennoch dazu entscheiden ein Paar zu werden, muss euch bewusst sein, dass ihr ständig an eurer Beziehung arbeiten müsst. Das heißt: nix da mit zurücklehnen!";
  }

  ergebnisText.innerHTML = text;
}


function rechnungA(){
  // 75-100%
  return Math.floor(Math.random() * 26 + 75);
}

function rechnungB(){
  // 50-74%
  return Math.floor(Math.random() * 25 + 50);
}

function rechnungC(){
  // 25-49%
  return Math.floor(Math.random() * 25 + 25);
}

function rechnungD(){
  // 0-24%
  return Math.floor(Math.random() * 25);
}

function rechnungE(){
  // Sonstige
  return Math.floor(Math.random() * 100);
}


closeErgebnis.addEventListener("click", ergebnisSchliessen);

function ergebnisSchliessen(){
  ergebnis.classList.remove("in");

  window.setTimeout(function(){
    ladebalkenAnteil.style.width = "0px";
    ladebalkenProzent.innerHTML = "0";
  }, 600);

}