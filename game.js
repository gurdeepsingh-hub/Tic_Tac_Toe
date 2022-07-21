let clicks = 0;
let player1,player2;
let matrix = Array(8).fill(3);


function callOnClick(num){
    clicks++;
    if(clicks%2 == 1){
        setSymbol('circle', num, player1);
    }else{
        setSymbol('cross', num, player2);
    }
}


function setSymbol(InputSymbol, num){
    if(InputSymbol == 'circle'){
        document.getElementById('btn'+ num).classList.add('circle', 'center');
        fillMatrix(num,0);
    }else if(InputSymbol == 'cross'){
        document.getElementById('btn'+ num).classList.add('cross', 'center', 'disabled');
        document.getElementById('btn'+ num).innerText = 'x';
        fillMatrix(num,1);
    }
}


function fillMatrix(num, fillValue){
    matrix[num]= fillValue;
    checkResult(num,fillValue);
}


function checkResult(num,fillValue){
        let Result = matrix[0] == matrix[1] && matrix[0] == matrix[2] && (matrix[0] == 1 || matrix[0] == 0)
        || matrix[3] == matrix[4] && matrix[3] == matrix[5] && (matrix[3] == 1 || matrix[3] == 0)
        || matrix[6] == matrix[7] && matrix[6] == matrix[8] && (matrix[6] == 1 || matrix[6] == 0)
        || matrix[0] == matrix[3] && matrix[3] == matrix[6] && (matrix[0] == 1 || matrix[0] == 0)
        || matrix[1] == matrix[4] && matrix[4] == matrix[7] && (matrix[1] == 1 || matrix[1] == 0)
        || matrix[2] == matrix[5] && matrix[2] == matrix[8] && (matrix[2] == 1 || matrix[2] == 0)
        || matrix[0] == matrix[4] && matrix[0] == matrix[8] && (matrix[0] == 1 || matrix[0] == 0)
        || matrix[6] == matrix[4] && matrix[6] == matrix[2] && (matrix[6] == 1 || matrix[6] == 0);

        if(Result == true){
            if(fillValue == 0){
                document.getElementById("PlayerWin").innerHTML= 'Player 1 (circle) wins';
                document.getElementById("PlayerWin").hidden= false;
                click[0].disabled= true;
                click[1].disabled= true;
                click[2].disabled= true;
                click[3].disabled= true;
                click[4].disabled= true;
                click[5].disabled= true;
                click[6].disabled= true;
                click[7].disabled= true;
                click[8].disabled= true;
                
            }else{
                document.getElementById("PlayerWin").innerHTML= 'Player 2 (cross) wins';
                document.getElementById("PlayerWin").hidden= false;  
                click[0].disabled= true;
                click[1].disabled= true;
                click[2].disabled= true;
                click[3].disabled= true;
                click[4].disabled= true;
                click[5].disabled= true;
                click[6].disabled= true;
                click[7].disabled= true;
                click[8].disabled= true;
            }
        }else if(clicks >= 9){
            document.getElementById("PlayerWin").innerHTML= 'Match Tie';
            document.getElementById("PlayerWin").hidden= false;
            document.getElementById("Restart").hidden= false;  

        }
}


const click = document.getElementsByClassName("boxesButton");
click[0].onclick = ()=>{
    click[0].disabled = true;
    callOnClick(0);
    
};
click[1].onclick = ()=>{
    click[1].disabled = true;
    callOnClick(1);
   
};
click[2].onclick = ()=>{
    click[2].disabled = true;
    callOnClick(2);
    
};
click[3].onclick = ()=>{
    click[3].disabled = true;
    callOnClick(3);
};
click[4].onclick = ()=>{
    click[4].disabled = true;
    callOnClick(4);
};
click[5].onclick = ()=>{
    click[5].disabled = true;
    callOnClick(5);
};
click[6].onclick = ()=>{
    click[6].disabled = true;
    callOnClick(6);
};
click[7].onclick = ()=>{
    click[7].disabled = true;
    callOnClick(7);
};
click[8].onclick = ()=>{
    click[8].disabled = true;
    callOnClick(8);
};
