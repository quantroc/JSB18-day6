let arr= [1,2,4,7,98789, 99, 44,2,3, 345]
let max = arr[0]
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
}
console.log(max);
//for : vòng lặp 
// for sẽ được sử dụng khi động đến mảng
// let arr= [1,22,3,4,5,0,10];
// cú pháp của for :
// for(1; 2; 3){
//     4
// }
// 1 : là giá trị bắt đầu chạy của dòng for
// 2  : là điều kiện để thực thi công việc trong 
// for  nếu là true => thực hiện công việc thứ 4 cho đến khi 2 trả về giá trị là false
// 3 : điều tác động để thoát vòng lặp :
//  nếu 3 sai,không có hoặc k đúng logic thì sẽ gặp trường hợp vòng lặp vô hạn
//for ( let i=0 ;i<3; i++) {
    // lần 1 : i = 0 => true | log(i)=> 0 | i=i+1 hay viết tắt i++ => i=1
    // lần 2 : i = 1 => true | log(i)=> 1 | i=i+1 hay viết tắt i++ => i=2
    // lần 3 : i = 2 => true | log(i)=> 2 | i=i+1 hay viết tắt i++ => i=3
    // lần 4 : i = 3 => false => thoát vòng lặp
//     console.log(i);
// }
// {} được gọi là block code


//bài 1: in ra màn hình từ 1 đến n. n là một biến khai báo
//nếu không dùng for: phải dùng 50 câu lệnh console.log()
let n = 20
for(let i = 1; i <= n; i++)
{
    console.log(i);
}

//bài 2: in ra tất cả các giá trị trong 1 mảng cho trước
// a = [1,5,7,8,5,3,11,33,55,7,8,'hello']

