// get <a> for start button
let start = document.querySelector("a");

// get waste frame
let wasteFrame = document.getElementById("waste").querySelector('div');

// screen height
let main = document.querySelector("main");
main.style.height = innerHeight + "px";
let nextPage = document.getElementById('nextPage');
nextPage.style.height = innerHeight + "px";

// get result
let result = document.getElementById('result');

// get dust frame
let dropZone = document.getElementsByClassName('dropzone');

// get count div
let displayCount = document.querySelector('#displayCount');

let dustbin = [
    "url('dustImg/yellowDust.png')",
    "url('dustImg/greenDust.png')",
    "url('dustImg/blueDust.png')",
    "url('dustImg/brownDust.png')",
];

for(let i = 0 ; i < dropZone.length ; i++){
    dropZone[i].style.backgroundImage = dustbin[i];
}

let waste = [
    [0, "url('waste/yellow/bottle01.jpg')"],
    [0, "url('waste/yellow/assouplissant.jpg')"],
    [1, "url('waste/green/bocal.png')"],
    [1, "url('waste/green/glassBottle.jpg')"],
    [2, "url('waste/blue/cardboard.jpg')"],
    [2, "url('waste/blue/cardboard01.jpg')"],
    [2, "url('waste/blue/paper01.jpg')"],
    [3, "url('waste/brown/bag01.jpg')"],
    [3, "url('waste/brown/food01.jpg')"],
    [3, "url('waste/brown/food02.jpg')"],
]

// beginning state
let line = 0;
let count = 0;

// display none start button
start.addEventListener('click', function (event){
    restart();
    event.preventDefault();
    start.style.display = 'none';
    wasteFrame.style.backgroundImage = waste[line][1];
    // listen dustbin
    for(let i = 0 ; i < dropZone.length ; i++){
        // (first) line = (first) waste
        dropZone[i].addEventListener('click', function (){
            // in game
            if(line < 9){
                inGame(i);
                // next waste
                line++;
                wasteFrame.style.backgroundImage = waste[line][1];
            }
            else {
                inGame(i);
                main.style.display = "none";
                nextPage.style.display = "flex";
                displayCount.innerHTML = count + " sur 10";
                console.log(count + " points");
            }
        })
    }
});

function restart () {
    line = 0;
    // count point
    count = 0;
    // set first screen
    main.style.display = "flex";
    nextPage.style.display = "none";

    // shake array
    for (let i = 0; i < waste.length; i++) {
        let tempo = waste[i];
        let x = Math.floor(Math.random() * waste.length);
        waste[i] = waste[x];
        waste[x] = tempo;
    }
}

function inGame (i){
    // each time create elements
    let resultDiv = document.createElement('div');
    let selectW = document.createElement('div');
    let selectDb = document.createElement('div');
    let goodOne = document.createElement('div');

    // set class name
    selectW.className = "currentWaste";
    goodOne.className = "rightDustbin";
    selectDb.className = "dustbinUsed";

    // set background
    selectDb.style.backgroundImage = dustbin[i];
    selectW.style.backgroundImage = waste[line][1];

    resultDiv.appendChild(selectDb);
    resultDiv.appendChild(selectW);

    // is the right dustbin ?
    if(i === waste[line][0]){
        count++;
    }
    else {
        goodOne.style.backgroundImage = dustbin[waste[line][0]];
        selectW.style.animationName = "toTheGoodOne";
        resultDiv.appendChild(goodOne);
    }
    // end game
    result.appendChild(resultDiv);
}

