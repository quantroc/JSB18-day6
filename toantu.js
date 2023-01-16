//1)Toán tử số : + - * : % ++ --
let a = 10, b =10
console.log(a++);
//a++ là tăng a lên sau khi thực hiện in a ra màn hình
console.log(a);
console.log(++b);
// thực hiện tăng b lên trước rồi mới in ra màn hình

// 2) toán tử so sánh ==, >=, <=, ===, != 
// - 2= cái so sánh giá trị chứ không so sánh kiểu dữ liểu
// - 3= so sánh cả giá trị lẫn kiểu dữ liệu
let number = 1
let string = '1'
console.log(number==string); // đều có giá trị là 1
console.log(number === string);

b = typeof(number) // kiểu dữ liệu của biến number
c = typeof(string)// kiểu dữ liệu của biến string
let d = [1,2,3,'abc']
let e = typeof(d)
console.log(e);
console.log(b);
console.log(c);

//3) toán tử logic : &&: and, ||: or, ! phủ định
// if(diemTb > 9 && toan > 8) // cả hai điều kiện phải đúng
// if(diemTb > 8 || toan > 8) // một trong hai đúng đều được
let g = true
console.log(!g);





