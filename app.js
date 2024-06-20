let body = document.querySelector("body");
let heading = document.querySelector("#heading");

let btns = document.querySelectorAll(".btns");

let resetBtn = document.querySelector("#restart-btn");
let colorBtn = document.querySelector("#clr-change");

//==============================================>

let turn = true; // If true the print X otherwise print O.

//==============================================>

const winningPatterns = [ // Winning patterns, game will end if any of these will match with our game pattern.
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//==============================================>

btns.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkPattern();
    })
});

//==============================================>

// This part of code decides the winner.

const checkPattern = ()=>{
    for(let pattern of winningPatterns) {
        let patOne = btns[pattern[0]].innerText;
        let patTwo = btns[pattern[1]].innerText;
        let patThree = btns[pattern[2]].innerText;

        if(patOne!="" && patTwo!="" && patThree!="") {
            if(patOne==patTwo && patTwo==patThree) {
                heading.innerText = `Congratulations, "${patOne}" is the winner!`
                for(btn of btns) {
                    btn.disabled = true;
                }
            }
        }
    }
}

//==============================================>

// Code for reset button.

resetBtn.addEventListener("click",()=>{
    turn=true;
    for(btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
    heading.innerText = "Tic Tac Toe";
})

//==============================================>

// Code for color changing button.

function three() {
    colorBtn.addEventListener('click',()=>{
        body.classList.remove("change-clr-three");
        body.classList.add("normal");
        zero();
    })
}

function two() {
    colorBtn.addEventListener('click',()=>{
        body.classList.remove("change-clr-two");
        body.classList.add("change-clr-three");
        three();
    })
}

function one() {
    colorBtn.addEventListener('click',()=>{
        body.classList.remove("change-clr");
        body.classList.add("change-clr-two");
        two();
    })
}

function zero() {
    colorBtn.addEventListener('click',()=>{
        body.classList.remove("noraml");
        body.classList.add("change-clr");
        one();
    })
}

zero();

//==============================================>