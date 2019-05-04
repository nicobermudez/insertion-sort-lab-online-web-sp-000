function findMinAndRemove(array){
  let min = array[0];
  array.filter(int => {
    if (int < min) {
      min = int;
    }
  })
  return min;
}

function insertionSort(array){
  
}
