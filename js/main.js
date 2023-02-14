function domID(id){
    return document.getElementById(id);
}
/* Bài 1: QUẢN LÝ TUYỂN SINH */
function ketQuaThi() {
    //input
    var mon1 = Number(domID('diemThuNhat').value);
    var mon2 = Number(domID('diemThuHai').value);
    var mon3 = Number(domID('diemThuBa').value);
    var diemKhuVuc = Number(domID('khuVuc').value);
    var diemDoiTuong = Number(domID('doiTuong').value);
    var diemChuan = Number(domID('diemChuan').value);
    //output
    var ketqua1 = '';
    //process
    var diemTB = mon1 + mon2 + mon3;
    var diemTong = diemTB + diemKhuVuc + diemDoiTuong;

    if (mon1 <= 0 || mon2 <= 0 || mon3 <= 0){
        ketqua1 = 'Rất tiếc!Bạn đã rớt.Hãy cố gắng lần sau nhé!';
    } else if (diemTong < diemChuan) {
        ketqua1 = 'Rất tiếc!Bạn đã rớt.Hãy cố gắng lần sau nhé!';
    } else {
        ketqua1 = 'Chúc mừng,Bạn đã thi đậu !';
    }

    domID('ketQua1').innerHTML = ketqua1;
}

//Bài 2: Tính tiền điện
function tinhTien(){
    //input
    var soKw = Number(domID('dienTieuThu').value);
    var hoTen = domID('hoTen').value;
    //output
    var tienDien = 0;
    //process
    if (soKw <= 50){
        tienDien = soKw * 500;
    } else if(soKw >50 && soKw <= 100){
        tienDien = (soKw - 50)*650 + 50*500;
    }
    else if(soKw > 100 && soKw <= 200){
        tienDien = (soKw - 100)*850 + 50*650 + 50*500;
    }
    else if(soKw > 200 && soKw <= 350){
        tienDien = (soKw - 200)*1100 + 100*850 + 50*650 + 50*500;
    } else {
        tienDien = (soKw - 350)*1300 + 150*1100 + 100*850 + 50*650 + 50*500;
    }

    domID('ketQua2').innerHTML = "Họ tên KH: " + hoTen + ";Tiền điện của quý khách là " + tienDien.toLocaleString();
}

//Bài 3: Tính thuế thu nhập cá nhân
function tinhThueThuNhap(){
    //input
    var hoTen = domID('hoTen1').value;
    var tongThuNhap = Number(domID('tongThuNhap').value);
    var soNguoi = Number(domID('nguoiPhuThuoc').value);
    //output
    var tienThue = 0;
    //process
    var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoi*1600000);
    if (thuNhapChiuThue > 960000000){
        tienThue = thuNhapChiuThue * 0.35;
    } else if (thuNhapChiuThue > 624000000){
        tienThue = thuNhapChiuThue * 0.3;
    } else if (thuNhapChiuThue > 384000000){
        tienThue = thuNhapChiuThue * 0.25;
    } else if (thuNhapChiuThue > 210000000){
        tienThue = thuNhapChiuThue * 0.2;
    } else if (thuNhapChiuThue > 120000000){
        tienThue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue > 60000000){
        tienThue = thuNhapChiuThue * 0.1;
    } else {
        tienThue = thuNhapChiuThue * 0.05;
    }

    domID('ketQua3').innerHTML = "Họ tên: " + hoTen + ";Tiền thuế thu nhập cá nhân: " + tienThue.toLocaleString() + " VND";
}

//Bài 4: Tính tiền cáp
function hienThi(){
    var x = Number(domID('loaiKH').value);
    if (x === 2) {
        domID('soKetNoi').style.display = 'block';
    } else {
        domID('soKetNoi').style.display = 'none';
    }
}

function tinhTienCap(){
    //input
    var loaiKH = Number(domID('loaiKH').value);
    var maKH = domID('maKH').value;
    var kenh = Number(domID('soKenh').value);
    var soKetNoi = Number(domID('soKetNoi').value);

    //output
    var tien = 0;

    //process
    if (loaiKH === 1) {
        tien = 4.5 + 20.5 + (kenh * 7.5);
    } else if (loaiKH === 2) {
        if (soKetNoi > 10) {
            tien = 15 + (kenh * 50) + (soKetNoi - 10) * 5 + 75;
        } else {
            tien = 15 + (kenh * 50) + 75;
        }
    } else {
        alert('Bạn chưa chọn loại KH');
    }

    domID('ketQua4').innerHTML = 'Họ tên KH: ' + maKH + ' ;Tiền cáp của quý vị: $' + tien.toFixed(2);
}