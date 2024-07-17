let boxes = document.querySelectorAll('.btn');
let reset = document.querySelector('#reset');
let turn0 = true //Player0 is Playing

const winning_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
       
        if(turn0)
        {
            box.innerHTML="X";
            turn0=false;
        }
        else
        {
            box.innerHTML="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner = ()=>{
   for(let pattern of winning_pattern){
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if(pos1!="" && pos2!="" && pos3!="")
    {
        if(pos1==pos2 && pos2==pos3)
        {
            console.log("winner");
        }
    }
   }
}

