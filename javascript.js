// alert("Selamat datang..");

// let lagi = "true";

// while(lagi){
//    let name = prompt("Masukkan Nama : ");
//    alert("Hallo " + name);

//    lagi = confirm("coba lagi gak?..");
// }
// alert("Terimakasih:)");

// for(let i=0 ; i<=5 ; i++){
//    alert("Aku rindu");
// }
// alert("selesai");

// let a = prompt("Masukkan Angka : ");
// if(a % 2 == 0){
//    document.write("Angka " + a + " genap" + "<br>");
//    if(a > 0){
//       document.write("Angka " + a + " positif" + "<br>");
//    }else{
//       document.write("Angka " + a + " Negatif" + "<br>");
//    }
// }else{
//    document.write("Angka " + a + " ganjil" + "<br>");
//    if(a > 0){
//       document.write("Angka " + a + " positif" + "<br>");
//    }else{
//       document.write("Angka " + a + " Negatif" + "<br>");
//    }
// }

// let ulang='true';

// while(ulang){
//    alert("Selamat Anda Memesan Ayam bakar");

//    ulang = confirm("Apakah ingin memesan lagi?");
// }

// alert("Terimakasih");

// for(let a=0 ; a<10 ; a++){
//    document.write(`<p> per-${a} mantap</p>`);
// }


// let ulang= 1;

// while(ulang <= 5){
//    document.write(ulang + " Selamat Anda Memesan Ayam bakar" + "<p>");

//    // ulang = confirm("Apakah ingin memesan lagi?");
//    ulang++;
// }

// alert("Terimakasih");

// let jumlahBuah = 10;
// let buah = 1;

// while(buah  <=  jumlahBuah){
//    if(buah <= 5){
//       document.write(buah + " buahnya enak" + "<p>");
//    }else{
//       document.write(buah + " buahnya ga enak" + "<p>");
//    }
//    buah++;
// }

// let makanan = prompt("Masukan Makanan Yang anda pilih(sate, bakso, mie ayam) : ");
// switch(makanan){
//    case "sate":
//       document.write("Sate makanan yang enak");
//       break;
//    case "bakso":
//       document.write("Bakso makanan yang enak");
//       break;
//    case "mie ayam":
//       document.write("Mie Ayam makanan yang enak");
//       break;
// }

// FUNCTION

// function jumlahVolumeDuaKubus(a,b){
//    let kubusA;
//    let kubusB;
//    let total;

//    kubusA = a * a * a;
//    kubusB = b * b * b;

//    total = kubusA + kubusB;

//    return total;

// }

// jumlahVolumeDuaKubus(8 , 3)
// document.write(total);


// OBJECK

// let mahasiswa = {
//    nama : "Efengsi",
//    Lulus : "true",
//    IpSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
//    IpKumulatif : function() {
//       let total = 0;
//       let ips = this.IpSemester;
//       for(let i=0 ; i<ips.length ; i++){
//          total += ips[i];
//       }
//       return total/ips.length;
//    }
// }

// =================================================================

//objeck literal
// let mahasiswa = {
//    nama : "Efengsi",
//    umur : 23,
//    tinggi : "165cm",
//    berat : "49kg",
//    IpSemester : [3.90, 3.97, 3.99, 3.98, 3.96],
//    //objeck
//    alamat : {
//       jalan : "Purnama NO. 02",
//       kota : "Pekan baru",
//       provinsi : "Riau"
//    } 
// }

// document.write(mahasiswa.nama);
// document.write(mahasiswa.alamat.jalan);
// document.write(mahasiswa.IpSemester[2]);

// ===================================================================

//objeck function declaration
function mahasiswa(nama, umur, jurusan, nim, hobi, alamat){
   //deklarasikan variabel
   //sebagai objeck
   let mhs = {};
   mhs.nama = nama;
   mhs.umur = umur;
   mhs.jurusan = jurusan;
   mhs.nim = nim;
   mhs.hobi = hobi;
   mhs.alamat = alamat;
   return mhs;
}

let alamat = {
  jalan : "purnama",
  kota : "pekan baru",
  provinsi : "riau"
}

let abu = mahasiswa("Efengsi", 22, "Manajemen Informatika", "02042311012", ["berenang","mancing","volleyball"], alamat);
// mhs2.umur = 25
// delete mhs2.umur
// document.write(mhs2.umur);
// document.write(mhs2.hobi);
document.write(abu.hobi);



