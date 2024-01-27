let boxes=document.querySelectorAll(".box ");
let restbtn=document.querySelector(".reset-btn");
let newbtn=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");

let turnx=true;//playerX playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

//rest game function 

const resetgame=()=>{
    turnx=true;
    count=0;
    enabledBoxes();
    msgcontainer.classList.add("hide");



}

//adding event for every button
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turnx){
            box.innerText="X";
            
            turnx=false;
            
    }else{
        box.innerText="O";
        turnx=true;
        
    }
    count++;
    box.disabled=true;
    let iswinner=checkwinner();
if(count===9 && !iswinner){
    drawgame();
}

        
    });
});

//enabled boxes function
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}


//disabled boxes function
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

const showwinner=(winner)=>{
    msg.innerText=`Congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();

}
const drawgame=()=>{
    msg.innerText=`Game is Draw`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 ){
                showwinner(pos1);

            }

        }
    }
}


newbtn.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);
