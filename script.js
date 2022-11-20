// destructuring variable /assignment
// 1. desctructuring array
const PERKENALAN = [`Halo`, `nama`, `saya`, `Galih Arizza`];

//jika mengambil semua array
// const [SALAM, SATU, DUA, NAMA] = PERKENALAN;

//jika mengambil salah satu/skipped item
// const [SALAM, , , NAMA] = PERKENALAN;
// console.log(SALAM);

//swap items
// let a = 1, //menggunakan let karena isinya berubah
//   b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

//rest parameter, jika tidak tahu berapa banyak arraynya
// const [A, ...VALUES] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(A);
// console.log(VALUES);

// 2. DESTRUCTURING PADA OBJECT
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
// };

// const { nama, umur } = MHS; //jika object nama dalam desctructuringnya harus sama dengan property pada objectnya
// console.log(nama);

//asignment tanpa declarasi object
// ({ nama, umur } = {
//   nama: `Galih Arizza`,
//   umur: 30,
// });
// console.log(umur);

//assign ke variable baru
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
// };

// const { nama: n, umur: u } = MHS; //seperti di set as dengan menggunakan ":"
// console.log(u);

// memberikan default value
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
//   email: `emailasli@email.com`,
// };

// const { nama, umur, email = `emaildefault@email.com` } = MHS; //jika odalam object dia tidak ada property email, maka dengan deklarasi seperti diatas email akan diisi dengan nilai yang diinputkan pada destructuringnya(di set default jika tidak ada), sebaliknya tidak dalam object terdapat email.
// console.log(email);

// memeberikan nilai default dan assign ke variable baru
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
//   email: `emailasli@email.com`,
// };

// const { nama: n, umur: u, email: e = `emaildefault@email.com` } = MHS;
// console.log(e);

// memberikan rest parameter
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
//   email: `emailasli@email.com`,
// };

// const { nama, ...VALUES } = MHS;
// console.log(VALUES);

// mengambil field pada object, setelah dikirim sebagai paramenter untuk function
const MHS = {
  id: 123123,
  nama: `Galih Arizza`,
  umur: 30,
  email: `emailasli@email.com`,
};

function getIDMhs({ id }) {
  //object mhs dibongkar dulu disini untuk mendapatkan id
  return id;
}

console.log(getIDMhs(MHS));
