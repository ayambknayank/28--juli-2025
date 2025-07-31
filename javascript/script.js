console.log("ini adalah output dari eksternal javascript");

// const -> tetap tidak bisa diubah
const gender = "laki laki";

// let -> bisa di ubah
let usia = 19;

//menggabungkan 2 tipe data
let teks = `fadhil sekarang berusia ${usia} tahun`;
console.log(teks);

//number (int, float, NaN, Infonity)
let jumlah = 100;
const phi = 3.14;
let salah = "bakso" / 2;
let hasil = 100 - 200;
let tes = "ga ada tes aja";

console.log(tes);

//boolean -> nilai kebenaran
let check = true;
check = false;
console.log(check);

//undifined -> variabel yg tidak terdeteksi nilainya
//note : wajib menggunakan let
let car;
console.log(car);

//null -> nilai kosong pada sebuah variabel
let kosong = null;
const koosong = null;
console.log(kosong);

console.log(typeof "hello");
console.log(typeof 25);
console.log(typeof null);
console.log(typeof undifined);
console.log(typeof true);

function klik() {
  console.log("perintah diterima");
}

//cara memanggil console.log
let panggilan = "fadhil";
let umur = 19;
let asal = "batam";

// 1
console.log(
  "haloo nama saya " +
    panggilan +
    " saya berusia " +
    umur +
    ", saya berasal dari " +
    asal
);

// 2
console.log(
  `haloo nama saya ${panggilan} saya berusia ${umur}, saya berasal dari ${asal}`
);

//tipe data non-primitive

let kelas = {
  nama_kelas: "Web Basic IDN",
  jenis_kelas: "Programming",
  total_peserta: 20,
  is_active: true,
  data_trainer: {
    nama_tariner: "fahmi",
    umur: 36,
  },
};
//cara memanggilnya agar tidak berantakan
// 1
console.log(kelas.nama_kelas);

// 2
console.log(kelas["total_peserta"]);

//challange
console.log(
  "saya sedang mengikuti kelas " +
    kelas.nama_kelas +
    " dengan jumlah peserta " +
    kelas.total_peserta +
    " dan trainernya adalah Mr." +
    kelas.data_trainer.nama_tariner
);
console.log(
  `saya sedang mengikuti kelas ${kelas["nama_kelas"]} dengan jumlah peserta ${kelas["total_peserta"]} dan trainernya adalah Mr.${kelas.data_trainer["nama_tariner"]}`
);
console.log(
  `saya sedang mengikuti kelas ${kelas.nama_kelas} dengan jumlah peserta ${kelas.total_peserta} dan trainernya adalah Mr.${kelas.data_trainer.nama_tariner}`
);

// array
let buah = ["apel", "mangga", "anggur", "pir", "jeruk"];
console.log(buah[3]);
console.log(buah.length); //menghitung jumlah elemen di dalam array

//menambahkan data pada array
buah.push("jambu"); //untuk menambahkan item
buah.pop(); // untuk menghapus item di akhir
buah.shift(); // untuk menghapus item di awal
buah.unshift("durian"); //untuk menambahkan item di awal

console.log(buah.length);
console.log(buah);

// operator
let bil1 = 10,
  bil2 = 80;

console.log(`hasil dari ${bil1} + ${bil2} adalah ${bil1 + bil2}`);
console.log(`hasil dari ${bil1} - ${bil2} adalah ${bil1 - bil2}`);
console.log(`hasil dari ${bil1} * ${bil2} adalah ${bil1 * bil2}`);
console.log(`hasil dari ${bil1} / ${bil2} adalah ${bil1 / bil2}`);
console.log(`hasil dari ${bil1} mod ${bil2} adalah ${bil1 % bil2}`);
console.log(`hasil dari ${3} ^ ${5} adalah ${3 ** 5}`); // pangkat

//penugasan
let skor = 10;
console.log(skor);
console.log((skor += 30));
console.log((skor -= 30));
console.log((skor /= 5));
console.log((skor %= 5));

// operator perbandingan
console.log(5 == "5"); // true, karena sama sama 5
console.log(5 === "5"); // false, karena beda tipe data

console.log(5 != 5); //false
console.log(5 != "5"); //true
console.log(5 !== "5"); //true

//operator itenary

let age = 21;
let ktp = age >= 17 ? "dapet KTP" : "belum cukup umur";
console.log(ktp);

//convert tipe data
//
let lima = 5;
console.log(lima);
console.log("ini sudah diubah jadi string", String(lima));
// tanda kalau int/number adalah output nya bewarna ungu

//else if
let ujian = 100;

if (ujian >= 90 && ujian <= 100) {
  console.log("nilai kamu A");
} else if (ujian >= 80 && ujian < 90) {
  console.log("nilai kamu B");
} else if (ujian >= 0 && ujian < 80) {
  console.log("kamu remedial");
} else {
  console.log("DATA ERROR");
}

// switch case
let today;

switch (today) {
  case "senin":
    console.log("mager dah");
    break;
  case "selasa":
  case "rabu":
  case "kamis":
    console.log("harus semangat");
    break;
  case "jumat":
    console.log("bentar lagi libur nih");
    break;
  case "sabtu":
  case "minggu":
    console.log("yeee libur");
    break;
  default:
    console.log("ngetik apasih...");
}

//for
for (let i = 0; i < 5; i++) {
  console.log("angka ke", i);
}

// while
// let cnt = 0;
// while(cnt < 5){
//   console.log('bilangan ke-', cnt);
//   cnt++;
// }

//function tradisional/sederhana
function sayHello() {
  console.log("Hallo");
  alert("ini pop up nya");
}

//arrow function 
const persegi = () => {
  console.log('ini arrow function => persegi');
}

//expression
const luasPersegi = () => alert('berapa ya luasnya??');

//proses
let waktu = 'pagi';
let namakuu = document.getElementById("namaku");
console.log('ini paling akhir');
console.log(namakuu);
function sapadong(nama, waktu){

  console.log(`selamat ${waktu} Mr.${nama}`);
}

//challange
const phii = 3.14;
function luasLingkaran(jari){
  let rumusLuasLingkaran = phii * (jari**2);
  return rumusLuasLingkaran;
}
let iniLuasLingkaran = luasLingkaran(14);
console.log('luas lingkaran itu adalah = ', iniLuasLingkaran);













//====================================================================================

const nilai = document.getElementById("darkMode");
const body = document.body;

function darkmode() {
  console.log("test darkmode");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  nilai.checked = true;
}

nilai.addEventListener("change", darkmode);

//warm mode
const nilai2 = document.getElementById("warmMode");

function warmmode() {
  console.log("test warm mode");
  body.classList.toggle("warm");

  if (body.classList.contains("warm")) {
    localStorage.setItem("warMode", "enabled");
  } else {
    localStorage.setItem("warMode", "disabled");
  }
}

if (localStorage.getItem("warmMode") === "enabled") {
  body.classList.add("warm");
  nilai2.checked = true;
}

nilai2.addEventListener("change", warmmode);

function resetlah() {
  location.reload();
}
