// get a for start button
let recycle = document.querySelector("a");

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

recycle.addEventListener("click", function (event){
    event.preventDefault();
    recycle.style.display = 'none';
    // give waste background = random waste
})


