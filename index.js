function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  array.filter(int => {
    if (int < min) {
      min = int;
    }
  })
  array.splice(minIndex, 1)
  return min;
}

function insertionSort(array){

}
