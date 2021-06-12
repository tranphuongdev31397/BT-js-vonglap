var getEle = function (id) {
    return document.getElementById(id)
}
/*Bài 1 Số nguyên dương nhỏ nhất n sao cho 1 + 2 +...+ n >10000
B1 : Input : Tìm số n thỏa đề
B2 : Handle
Tạo biến S = 0 là tổng của = 1 +2 + .. + n
var i = 1 
Sử dụng vòng lặp while S <= 10000 :
S = S + i 
i++
}
Lúc này i max thoát khỏi vòng lặp là số n cần tìm
B3 : Output : In ra số n
*/
var ketQua = getEle('ketQua')
var S = 0;
S = Number(S)
var i = 1;
while (S <= 10000) {
    S = S + i;
    i++;
}
var n = i;
ketQua.innerHTML = 'Số nguyên dương n nhỏ nhất để 1 + 2 + ... + n >10000 là: ' + n

/* Bài 2 Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 + … + x^n 
B1 : Input : Cho người dùng nhập vào x và n
B2 : Handle
Phân tích bài toán :
x + x^2 + ... + x^n 
=> x^(i=1) + x^(i++) + .. + x^(i=n)
var S = 0
Viết hàm tính tổng S(n)
if x = 0 , n = 0 => S(n) = 1
else if x = 0 ,n != 0 => S(n) = 0
else if x!= 0 , n = 0 =>  S(n) = 1
else{
    if(n>0){
        for (var i = 1 , i<= n , i++)
        S += x**i
    }
    else (n<0)
    for (var i = 1 , i >= n , i--){
        S += x**i
    }
}
B3: in ra kết quả
*/
var btnTong = getEle('btnTong')
var xemKetQua = getEle('xemKetQua')
//Hàm tính tổng
var Sum = function (soX, soN) {
    if (soN !== Number(soN) || soX !== Number(soX)) {
        alert('Vui lòng điền vào một số');
        xemKetQua.style.display = 'none'
    } else {
        var tongSum = 0
        if (soN == 0) {
            tongSum = 1
        }
        else if (soX == 0 && soN != 0) {
            tongSum = 0
        }
        else if (soX !== 0 && soN !== 0) {
            if (soN > 0) {
                for (var i2 = 1; i2 <= soN; i2++) {
                    tongSum += ((soX) ** (i2))
                }
            }
            else if (soN < 0) {
                for (var i2 = -1; i2 >= soN; i2--) {
                    tongSum += ((soX) ** (i2))
                }
            }
        }
        xemKetQua.style.display = 'block'
        return tongSum
    }

}

// Hàm bắt giá trị

var tinhTong = function () {
    var soX = Number(getEle('soX').value)
    var soN = Number(getEle('soN').value)
    var tongSum = Sum(soX, soN)
    xemKetQua.innerHTML = 'Tổng S(n) là: ' + tongSum
}
//Bắt sự kiện click

btnTong.addEventListener('click', tinhTong)


/* Bài 3
B1 :Input : cho người dùng nhập vào số n
B2: Handle
Tạo hàm tính giaiThua 
Tạo biến tinhGiaiThua = 1 
if (soNB3 = 0 ) => giaiThua = 0
else if (soNB3 > 0 ) => 
 Vòng lặp i = 1 , i<= n i++ => giaiThua *= (i)  
 else (soNB3 < 0 ) =>
 Vòng lặp i = -1 , i>=n i-- => giaiThua *= (i) 
 
 B3 : Output : In ra giaiThua 
 */
var btnTinhTong = getEle('btnTinhTong');
var ketQuaB3 = getEle('ketQuaB3');
var giaiThua = function (soNB3) {
    var tinhGiaiThua = 1;
    if (soNB3 !== Number(soNB3)) {
        alert('Vui lòng nhập một số')
        ketQuaB3.style.display = 'none';
    } else {
        if (soNB3 === 0) {
            tinhGiaiThua = 0
        } else if (soNB3 > 0) {
            for (var i3 = 1; i3 <= soNB3; i3++) {
                tinhGiaiThua *= (i3)
            }
        } else if (soNB3 < 0) {
            for (var i3 = -1; i3 >= soNB3; i3--) {
                tinhGiaiThua *= (i3)
            }
        }
        ketQuaB3.style.display = 'block';
    }
    return tinhGiaiThua
}

var tinhTich = function () {
    var soNB3 = Number(getEle('soNB3').value);
    var ketQuaGiaiThua = giaiThua(soNB3)
    ketQuaB3.innerHTML = 'Tích của các số trên là: ' + ketQuaGiaiThua
}

btnTinhTong.addEventListener('click', tinhTich)
/* Bài 4
B1 : Input: 10 div , chẵn background xanh , lẻ background đỏ
B2 : Handle
Sử dụng vòng lặp lồng if else
i % 2 == 0 => div background xanh : background đỏ
B3 : In kết quả trong sự kiện click
*/
var taoDiv = ''
for (var i4 = 1; i4 <= 10; i4++) {
    i4 % 2 == 0 ? taoDiv += '<div style="background-color:red ; color:white">' + 'Đây là div chẵn : ' + i4 + '</div>' : taoDiv += '<div style="background-color:blue ; color:white">' + 'Đây là div lẻ : ' + i4 + '</div>'
}
var divChanLe = getEle('divChanLe');
var btnIn = getEle('btnIn')

btnIn.onclick = function () {
    divChanLe.style.display = "block";
    divChanLe.innerHTML = taoDiv
}