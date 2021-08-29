function bblSort(arr) {
    var temp = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {         
                      
                if (arr[i] < arr[j]) {
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
                
            }
        }
        return arr;
    }
}
// console.log(bblSort([1,5,8,2,3]))
// ----------------------------------------------------------------------------
function bubbleSort(arr){
    
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = 0 ; j<arr.length ; j++){
            console.log(arr)
            if(arr[j]> arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([1,3,5,2]))
// ----------------------------------------------------------------------------
function sort(list){
for (var j = 0; j < list.length - 1; j++) {
    for (var i = 0, swapping; i < list.length - 1; i++) {
      if (list[i]> list[i + 1]) {
        swapping = list[i + 1];
        list[i + 1] = list[i];
        list[i] = swapping;
        }; 
    }; 
};
}

// ----------------------------------------------------------------------------
function mergeSort(list1,list2){
    let newArr= []
  
    while(list1.length && list2.length){
      if(list1[0]<list2[0]){
        newArr.push(list1.shift())
      }
      else{
        newArr.push(list2.shift())
      } 
    }
    newArr= newArr.concat(list1)
    newArr= newArr.concat(list2)
    return newArr
  }
  
  console.log(sorted([1,5,2],[2,3,6]))
  console.log(sorted([3, 4, 7],[2, 5]))

// ----------------------------------------------------------------------------
function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}
// ----------------------------------------------------------------------------
var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quicksort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quicksort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quicksort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quicksort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

// ----------------------------------------------------------------------------



function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]


// ----------------------------------------------------------------------------
function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };


  // ----------------------------------------------------------------------------
  const quicksort = arr =>
  arr.length <= 1
    ? arr
    : [
        ...quicksort(arr.slice(1).filter((el) => el < arr[0])),
        arr[0],
        ...quicksort(arr.slice(1).filter((el) => el >= arr[0])),]