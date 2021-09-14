document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square")
    let restart = document.querySelector("#restart")
    let reset = document.querySelector("#resetPoints")

    squares.forEach((square)=>{
        square.addEventListener("click", handleClick)
    })

    restart.addEventListener("click", restartGame)
    reset.addEventListener("click", resetPoints)
})

function handleClick(event){
    
    let square = event.target;
    let position = square.id;
    let scorePlayer = document.querySelectorAll(".scorePlayer")

   if(handleMove(position)){
       setTimeout(()=>{

            if(playerTime == 0){
                alert("Jogador 1 foi vencedor")
                score[0]++
                scorePlayer[0].innerHTML = score[0]
                restartGame()
            } else{
                alert("Jogador 2 foi vencedor")
                score[1]++
                scorePlayer[1].innerHTML = score[1]
                restartGame()
            }
       }, 100)
   }
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class = ${symbol}></div>`
}

function restartGame(){
    let squares = document.querySelectorAll(".square")
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;

    squares.forEach(e=>{
        e.innerHTML = "";
    })
}

function resetPoints(){
   let scorePlayer = document.querySelectorAll(".scorePlayer")
   score = [0,0];

   scorePlayer.forEach(e=>{
       e.innerHTML = "0"
   })
}

