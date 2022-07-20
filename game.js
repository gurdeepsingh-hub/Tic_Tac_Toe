let clicks = 0;
function callOnClick(num){
    clicks++;
    if(clicks%2 == 1){
        setSymbol('circle', num);
    }else{
        setSymbol('cross', num);
    }
}
function setSymbol(InputSymbol, num){
    if(InputSymbol == 'circle'){
        document.getElementById('btn'+ num).classList.add('circle', 'center');
    }else if(InputSymbol == 'cross'){
        document.getElementById('btn'+ num).classList.add('cross', 'center', 'disabled');
        document.getElementById('btn'+ num).innerText = 'x';
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
