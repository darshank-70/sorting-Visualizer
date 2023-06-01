const n=10;
const array=[];
function init(){
    for(let i=0;i<10;i++){
        array[i]=Math.random();
    }
    console.clear();
    console.log(array);
    
    showBars();
}
function showBars(moveObject){
    
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");
        if(moveObject && moveObject.indices.includes(i)){
            bar.style.backgroundColor=moveObject.type=="swap"?"red":"blue";
        }
        container.appendChild(bar);

    }
}
function play(){
    const copy=[...array];
    moves=bubbleSort(copy);
    //showBars();
    animate(moves);
}
function animate(moves){
    if(moves.length==0){
        showBars();
        return;
    }
    const currentMove=moves.shift();
    const [i,j]=currentMove.indices;
    if(currentMove.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
    }
    showBars(currentMove);
    setTimeout(function(){
        animate(moves);
    },200);
}

function bubbleSort(array){
    //sorting Algorithm
    const moves=[];
do{
    var swapped=false;
    for(let i=1;i<array.length;i++){
       if(array[i-1]>array[i]){
        swapped=true;
        moves.push({indices:[i-1,i],type:"swap"});
        [array[i-1],array[i]]=[array[i],array[i-1]]
       }
       moves.push({indices:[i-1,i],type:"compare"});

    }
}while(swapped);
return moves;
}