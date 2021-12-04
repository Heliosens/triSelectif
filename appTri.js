// get <a> for start button
let recycle = document.querySelector("a");

// get waste frame
let wasteFrame = document.getElementById("waste").querySelector('div');

// screen height
let main = document.querySelector("main");
main.style.height = innerHeight + "px";

// get dust frame
let dustFrame = document.getElementById('dustFrame').getElementsByTagName('div');

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
    [0, "url('waste/yellow/assouplissant.jpg)"],
    [1, "url('waste/green/bocal.png')"],
    [1, "url('waste/green/glassBottle.jpg')"],
    [2, "url('waste/blue/cardboard.jpg')"],
    [2, "url('waste/blue/cardboard01.jpg')"],
    [2, "url('waste/blue/paper01.jpg')"],
    [3, "url('waste/brown/bag01.jpg')"],
    [3, "url('waste/brown/food01.jpg')"],
    [3, "url('waste/brown/food02.jpg')"],
]

console.log(waste);

recycle.addEventListener("click", function (event){
    event.preventDefault();
    recycle.style.display = 'none';
    // give waste background = random waste
    let item = Math.floor(Math.random() * waste.length);
    wasteFrame.style.backgroundImage = waste[item][1];
    // shake array
    for(let i = 0 ; i < waste.length ; i++){
        let tempo = waste[i];
        let x = Math.floor(Math.random() * waste.length);
        waste[i] = waste[x];
        waste[x] = tempo;
    }
    console.log(waste);
})
