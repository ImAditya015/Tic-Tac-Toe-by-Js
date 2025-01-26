let btn= document.querySelectorAll(".btn");
let reset= document.querySelector("#reset");
let newGame= document.querySelector("#new-game");

let turnO = true; //true for player O and false for player X

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

btn.forEach((btn) => {
btn.addEventListener("click", () => {
    console.log("Box was clicked");
    if ( turnO) {
        btn.innnerText= "O";
        turnO= "false";
    } else {
        btn.innnerText= "X";
        turnO= "true";
    }
    btn.disabled = true;
    
    checkForWinner();
})

})

const  checkForWinner = () => {
    for (let pattern of winPatterns){
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if( pos1 === pos2 && pos2 === pos3){
                console.log("Winner");
            }
        }
    }
}
