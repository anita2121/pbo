// Map
let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("002", "Citra");
mahasiswa.set("003", "Citra");
console.log(mahasiswa.get("002"));
console.log(mahasiswa.get("003"));
// Output: citra citra

// Generik TypeScript
function printItems<T>(items: T[]): void {
 items.forEach(item => console.log(item));
}
// Bisa digunakan untuk berbagai tipe data
printItems<number>([1, 2, 3, 4]);
printItems<string>(["Andi", "Budi", "Citra"]);

// Generik Javascript
function printItems(items) {
 items.forEach(item => console.log(item));
}
printItems([1, 2, 3]); // Output: 1, 2, 3
printItems(["A", "B", "C"]); // Output: A, B, C
printItems([1, 2, 3, "A", "B", "C"]);

// Sistem Manajemen Mahasiswa
let mahasiswa = new Map();
mahasiswa.set("22001", { nama: "Andi", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });
console.log(mahasiswa.get("22001").nama); // Output: Andi

// Aplikasi Todo List
let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP");
// Tidak akan ditambahkan karena sama persis 
console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas', 'Belajar OOP'}

// Analisis Data
// Data transaksi dalam bentuk array of objects
let transaksi = [
{ user: "Andi", jumlah: 50000, kategori: "Makanan" },
{ user: "Budi", jumlah: 75000, kategori: "Transportasi" },
{ user: "Andi", jumlah: 20000, kategori: "Minuman" },
{ user: "Citra", jumlah: 100000, kategori: "Belanja" },
{ user: "Budi", jumlah: 50000, kategori: "Makanan" }
   ];
// Analisis: Total pengeluaran per user
let totalPerUser = {};
transaksi.forEach(trx => {
if (!totalPerUser[trx.user]) {
totalPerUser[trx.user] = 0;
}
totalPerUser[trx.user] += trx.jumlah;
});
console.log(totalPerUser);
// Output: { Andi: 70000, Budi: 125000, Citra: 100000 }

