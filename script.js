var n = 10;
var speed = 0.2;
const array = [];
function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.random();
  }
  console.clear();
  console.log(array);

  showBars();
}
function showBars(moveObject) {
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    if (moveObject && moveObject.indices.includes(i)) {
      bar.style.backgroundColor = moveObject.type == "swap" ? "red" : "blue";
    }
    container.appendChild(bar);
  }
}
function play() {
  const copy = [...array];
  moves = bubbleSort(copy);
  //showBars();
  animate(moves);
}
function animate(moves) {
  if (moves.length == 0) {
    showBars();
    return;
  }
  const currentMove = moves.shift();
  const [i, j] = currentMove.indices;
  if (currentMove.type == "swap") {
    [array[i], array[j]] = [array[j], array[i]];
  }
  showBars(currentMove);
  setTimeout(function () {
    animate(moves);
  }, speed);
}
/*
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
*/
function bubbleSort(arr) {
  const moves = [];
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        moves.push({ indices: [j, j + 1], type: "swap" });
      } else {
        moves.push({ indices: [j, j + 1], type: "compare" });
      }
    }
  }

  // Print the sorted array
  // console.log(arr);

  return moves;
}
//change input clicked
function changeConfig(view) {
  cardInput.style.visibility = view;
}
function submitConfig() {
  n = inputArray.value;
  speed = inputSelect.value;
  cardInput.style.visibility = "hidden";
}
