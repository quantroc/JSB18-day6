//- cho một mảng 5 số nguyên , tìm phần tử lớn nhất trong mảng
let arr = [99,5,7,11111,10]

let max = arr[0];
console.log(max);
if(max < arr[1]) {
    max = arr[1] 
    console.log(max)
}
if(max < arr[2]) {
    max = arr[2]
    console.log(max)
}
// else if(max < arr[2]) {
//     max = arr[2]
//     console.log(max)
// }
if(max < arr[3]) {
    max = arr[3]
    console.log(max)
}
if(max < arr[4]) {
    max = arr[4]
    console.log(max)
}

console.log(max);
