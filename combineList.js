
//sort 2 array , and combine
const combineList = ([x, ...xrest], y = []) => {
    return x === undefined ? y : [x, ...combineList(y, xrest)]
  };

//if x == undefined , return y 
// else 
// 1,combineList(ini jadi x =[2,5], ini jadi y = [5,3])
//   2, combineList([5,3],[5])
//     5,combineList([5] , [3])
//         5,combineList([3] ,x = undefined])
//             karena x undefined , return 3





console.log(combineList([1,5,3],[2,5]))