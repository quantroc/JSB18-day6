# Nội dung bài hôm nay

- học về vòng lặp `for`
- tài liệu xem lại: https://200lab.io/blog/vong-lap-trong-javascript/

## Loop

- for (khởi tạo giá trị biến lăp; điều kiện lặp; cập nhật biến lặp hoặc thục hiện gì đó sau khi thục hiện xong hành động)
  {các lệnh cần lặp}
- B1. Khởi tạo giá trị biến lặp, chỉ thực hiện 1 lần duy nhất
- B2. Kiểm tra điều kiện lặp, nếu điều kiện sai => Chuyển sang B5
- B3. Thực hiện nội dung lặp ở trong thân vòng lặp
- B4. Cập nhật giá trị biến lặp => Quay lại B2
- B5. Kết thúc vòng lặp
  - nếu bỏ trống vị trí đầu thì cần khai báo trước đó
  - nếu bỏ trống vị trí hai thì cần break không thì sẽ lặp vô hạn
  - nếu bỏ trống vị trí 3 thì vòng lặp k tiếp tục được, cần thực thi tiếp
    `for (let i = 0; i < 10; i++) {
    console.log(i);
}`

# Tìm hiểu nội dung bài sau:

- `for of` trong javascript : trong link ở trên keeos xuống phần for..of
- `function` trong javascript: https://200lab.io/blog/function-trong-javascript/

## function

`function sayHello(name) {
    console.log('Hello ' + name);
    console.log(`Hello ${name}`);
}
sayHello('Quân');`

# Bài 1

- cho một biến n, in ra các số chia hết cho 3 từ 0 đến n
- tính tổng các số chia hết cho 3 từ 0 đến n

# Bài 2

- cho một biến n, in ra các số chia hết cho 2 từ 1 đến n
- cho một biến n, in ra các số chia hết cho 2 từ 1 đến n nhưng không đùng if else, gợi ý: thay đổi i++

# Bài 3

- cho hai biến n,m giá trị trong khoảng từ 1 đến 10, in ra n mũ m(n^m)
