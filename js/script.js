// ============================================
// TUGAS AKHIR PEMROGRAMAN WEB
// Universitas Handayani Makassar
// Nama : Mince
// NPM  : 2024020067
// ============================================


// ===============================
// VALIDASI FORM KONTAK
// ===============================

function kirimPesan() {

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let subjek = document.getElementById("subjek").value;
    let pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" || subjek == "" || pesan == "") {

        alert("Semua data harus diisi!");

        return;

    }

    alert("Pesan berhasil dikirim.");

    document.getElementById("formKontak").reset();

}



// ===============================
// VALIDASI FORM PENDAFTARAN
// ===============================

function daftar() {

    let nama = document.getElementById("nama").value;
    let tempat = document.getElementById("tempat").value;
    let tanggal = document.getElementById("tanggal").value;
    let alamat = document.getElementById("alamat").value;
    let hp = document.getElementById("hp").value;
    let email = document.getElementById("email").value;
    let asal = document.getElementById("asal").value;

    if (
        nama == "" ||
        tempat == "" ||
        tanggal == "" ||
        alamat == "" ||
        hp == "" ||
        email == "" ||
        asal == ""
    ) {

        alert("Silakan lengkapi seluruh data.");

        return;

    }

    alert(

        "Selamat!\n\n" +
        "Pendaftaran berhasil dilakukan.\n\n" +
        "Terima kasih telah memilih\n" +
        "Universitas Handayani Makassar."

    );

    document.getElementById("formDaftar").reset();

}



// ===============================
// KONFIRMASI MENU
// ===============================

const menu = document.querySelectorAll("nav a");

menu.forEach(function(item){

    item.addEventListener("mouseover", function(){

        this.style.color = "#ffd700";

    });

    item.addEventListener("mouseout", function(){

        this.style.color = "white";

    });

});



// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0px 3px 12px rgba(0,0,0,0.3)";

    }else{

        header.style.boxShadow = "none";

    }

});



// ===============================
// TOMBOL BACK TO TOP
// ===============================

const tombol = document.createElement("button");

tombol.innerHTML = "↑";

tombol.style.position = "fixed";
tombol.style.bottom = "20px";
tombol.style.right = "20px";
tombol.style.padding = "12px 16px";
tombol.style.fontSize = "20px";
tombol.style.border = "none";
tombol.style.background = "#003366";
tombol.style.color = "white";
tombol.style.cursor = "pointer";
tombol.style.borderRadius = "8px";
tombol.style.display = "none";

document.body.appendChild(tombol);

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        tombol.style.display = "block";

    }else{

        tombol.style.display = "none";

    }

});

tombol.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};



// ===============================
// EFEK MUNCUL SAAT SCROLL
// ===============================

const box = document.querySelectorAll(".box");

window.addEventListener("scroll", tampilkanBox);

function tampilkanBox(){

    const tinggi = window.innerHeight;

    box.forEach(function(item){

        const posisi = item.getBoundingClientRect().top;

        if(posisi < tinggi - 100){

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

box.forEach(function(item){

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = "1s";

});

tampilkanBox();



// ===============================
// JAM DIGITAL
// ===============================

const jam = document.createElement("div");

jam.style.position = "fixed";
jam.style.left = "15px";
jam.style.bottom = "20px";
jam.style.background = "#003366";
jam.style.color = "white";
jam.style.padding = "10px";
jam.style.borderRadius = "8px";
jam.style.fontSize = "14px";

document.body.appendChild(jam);

function waktu(){

    const sekarang = new Date();

    jam.innerHTML = sekarang.toLocaleTimeString("id-ID");

}

setInterval(waktu,1000);

waktu();



// ===============================
// TAHUN OTOMATIS FOOTER
// ===============================

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    footer.innerHTML.replace("2026",new Date().getFullYear());

}