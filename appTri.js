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
let dustFrame = document.getElementsByClassName('dropzone');

let dustbin = [
    "url('dustImg/yellowDust.png')",
    "url('dustImg/greenDust.png')",
    "url('dustImg/blueDust.png')",
    "url('dustImg/brownDust.png')",
];

for(let i = 0 ; i < dustFrame.length ; i++){
    dustFrame[i].style.backgroundImage = dustbin[i];
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
let line;
let count;
let loose;

restart();

start.addEventListener('click', ()=>restart);

function restart (){
    main.style.display = "flex";
    nextPage.style.display = "none";

    // shake array
    for(let i = 0 ; i < waste.length ; i++){
        let tempo = waste[i];
        let x = Math.floor(Math.random() * waste.length);
        waste[i] = waste[x];
        waste[x] = tempo;
    }

    // display none start button
    line = 0;
    start.addEventListener("click", function (event){
        event.preventDefault();
        start.style.display = 'none';

        // display waste background
        wasteFrame.style.backgroundImage = waste[line][1];

    })

    //point counter
    count = 0;
    loose = 0
    // listen dustbin
    for(let i = 0 ; i < dustFrame.length ; i++){
        dustFrame[i].addEventListener('click', function (){

            // is the right dustbin ?
            if(i === waste[line][0]){
                count++;

            }


            // next waste
            line++;
            let resultDiv = document.createElement('div');
            result.prepend(resultDiv);
            // end game
            if(line < 10){
                wasteFrame.style.backgroundImage = waste[line][1];

                // next page
                // create element for each line
                // create inner element
                let selectDb = document.createElement('div');
                let selectW = document.createElement('div');
                let goodOne = document.createElement('div');
                selectDb.className = "dustbinUsed";
                selectW.className = "currentWaste";
                goodOne.className = "rightDustbin";
                resultDiv.appendChild(selectDb);
                resultDiv.appendChild(selectW);
                resultDiv.appendChild(goodOne);
            }
            else {
                main.style.display = "none";
                nextPage.style.display = "flex";

                console.log(count + " points");
            }
        })
    }
}

// affect animation
// selectW.style.animationName = "toTheGoodOne";

// todo affect background to result div