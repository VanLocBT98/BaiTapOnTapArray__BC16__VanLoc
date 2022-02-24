var arrN = [3, 5, -12, 98, -100, 24, 77, -86, 69, 96, 0];

var inner = document.getElementById('btninner').onclick = function () {
    document.querySelector('#input_inner').value = arrN.toString();
}
document.getElementById('btnpush').onclick = function () {
    // input là giá trị user nhập vào
    var pushIndex = Number(document.getElementById('pushindex').value);
    // output hiển thị giá trị người dùng nhập vào array

    arrN.push(pushIndex);
    inner;
    document.getElementById('pushindex').value = "";
    // phần bài tập 1
}
// câu số 1
document.querySelector('#btnCau1').onclick = function () {
    document.querySelector('#spanmang').innerHTML = arrN.toString();
    // xử lý câu 1
    var tongD = 0;
    for (var i = 0; i < arrN.length; i++) {
        var index = arrN[i]
        // xử lý kết quả của cấu 1
        if (index >= 0) {
            tongD += arrN[i];
        }
    }


    document.querySelector('#spanIner').innerHTML = tongD;

};
// Câu số 2
document.querySelector('#btnCau2').onclick = function () {
    document.querySelector('#spanmang2').innerHTML = arrN.toString();
    // xử lý câu 2
    var dem = 0;
    for (var i = 0; i < arrN.length; i++) {
        var index = arrN[i]
        // xử lý kết quả của cấu 2
        if (index > 0) {
            dem++;
        }
    }


    document.querySelector('#spanDem').innerHTML = 'Có ' + dem + ' số dương trong mảng';

};
// Câu số 3
document.querySelector('#btnCau3').onclick = function () {
    document.querySelector('#spanmang3').innerHTML = arrN.toString();
    // xử lý câu 3
    var min = arrN[0];
    for (var i = 0; i < arrN.length; i++) {
        var index = arrN[i]
        // xử lý kết quả của cấu 2
        if (index < min) {
            min = index;
        }
    }


    document.querySelector('#spanMin').innerHTML = 'phần tử nhỏ nhất trong mảng là :' + min;
}
// Câu số 4
document.querySelector('#btnCau4').onclick = function () {
    document.querySelector('#spanmang4').innerHTML = arrN.toString();
    // xử lý câu 4

    for (var i = 0; i < arrN.length; i++) {
        var index = arrN[i]
        var min = 0;
        // tìm 1 số lớn hơn 0
        if (index > 0) {
            min = index;
            break;
        }
        

    }
    for (var j = 0; j < arrN.length; j++) {
        var index = arrN[j];
        // tìm 1 số bé hơn min và là số dương
        if (index > 0 && index < min) {
            min = index
        }

    }



    document.querySelector('#spanMinD').innerHTML = 'phần tử nhỏ nhất trong mảng là :' + min;
}
// câu số 5 
document.querySelector('#btnCau5').onclick = function () {
    document.querySelector('#spanmang5').innerHTML = arrN.toString();
    // xử lý câu 5

    var chanCuoi = -1;
    for (var i = arrN.length - 1; i >= 0; i--) {
        var index = arrN[i];

        if (index % 2 == !0 || index == 0) {
            chanCuoi;
        } else {
            chanCuoi = index;
            break;
        }
    }



    document.querySelector('#spanChancuoi').innerHTML = 'phần tử chẳn cuối trong mảng là :' + chanCuoi;
}
// câu số 6
document.querySelector('#btnCau6').onclick = function () {
    document.querySelector('#spanmang6').innerHTML = arrN.toString();
    // lấy giá trị user nhập vào
    var nuSt = Number(document.querySelector('#nuSt').value);
    var nuNd = Number(document.querySelector('#nuNd').value);
    // gán vị trí trong mảng
    var vitrST = arrN[nuSt];
    var vitriND = arrN[nuNd];
    var stemp = arrN[nuSt];
    vitrST = vitriND;
    vitriND = stemp;
    // đổi vị trí mảng
    [arrN[nuSt], arrN[nuNd]] = [arrN[nuNd], arrN[nuSt]];
    // kết quả thu được
    document.querySelector('#giatrithunhat').innerHTML = 'Giá trị của phần tử thứ nhất cần thay đổi trong mảng :' + arrN[nuNd];
    document.querySelector('#giatrithuhai').innerHTML = 'Giá trị của phần tử thứ hai cần thay đổi trong mảng :' + arrN[nuSt];

    document.querySelector('#spandoivitri').innerHTML = arrN.toString();

}
// câu số 7
document.querySelector('#btnCau7').onclick = function () {
    document.querySelector('#spanmang7').innerHTML = arrN.toString();

    for (var i = 0; i < arrN.length -1; i++) {
        for (var j = 0; j < arrN.length -i -1; j++) {
            var NuJ = Number(arrN[j]);
            if (NuJ > arrN[j +1]) {
                var temp = arrN[j];
                arrN[j] = arrN[j +1];
                arrN[j +1] = temp;
            }
        }
    }
    document.querySelector('#spansapxep').innerHTML = arrN.toString();

}
// câu số 8
// tạo hàm kiểm tra một số có phải là nguyên tố hay không .
function isPrime(n) {
    // đặt cờ kiểm tra số nguyên tố
    var test = true;
    // nếu test = true thì n lá số nguyên tố
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            test = false;
        }
    }
    // trả về output
    return test;
}
document.querySelector('#btnCau8').onclick = function () {
    // mảng đã cho 
    document.querySelector('#spanmang8').innerHTML = arrN.toString();
    var soNtDau = -1;
    for (var i = 0; i < arrN.length; i++) {
        var nu = arrN[i];
        if (isPrime(nu) === true && nu >= 2) {
            soNtDau = 'Số Nguyên Tố đầu tiên trong mảng là : ' + nu;
            break;
        }
    }


    document.querySelector('#spansoNT').innerHTML = soNtDau;
};
// câu 9
document.querySelector('#btnCau9').onclick = function () {
    document.querySelector('#spanmang9').innerHTML = arrN.toString();
    // tạo biến đếm 
    var dem = 0;
    for (var i = 0; i < arrN.length; i++) {
        var nu = arrN[i];
        if (Number.isInteger(nu) === true) {
            dem++
        }
    }
    document.querySelector('#spanDemSoN').innerHTML = 'Có ' + dem + ' số nguyên ở trong mảng';

}
// câu 10
document.querySelector('#btnCau10').onclick = function () {
    document.querySelector('#spanmang10').innerHTML = arrN.toString();
    // tạo biến đếm cho só dương và số âm
    var demDuong = 0;
    var demAm = 0;
    var output = 'Số dương và số âm trong mảng bằng nhau';
    for (var i = 0; i < arrN.length; i++) {
        var nu = arrN[i]
        if (nu <= 0) {
            demAm++
        } else {
            demDuong++
        }
    }
    if (demDuong > demAm) {
        output = 'Số dương trong mảng nhiều hơn số âm'
    } else if (demDuong < demAm) {
        output = 'Số âm trong mảng nhiều hơn số dương'
    }
    document.querySelector('#spanSS').innerHTML = output;

}
