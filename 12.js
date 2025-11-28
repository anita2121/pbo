// Data pendaftar
const pendaftar = [
    { nama: "Anita", email: "anita@gmail.com", gender: "Perempuan" }
];

// Simpan ke localStorage
localStorage.setItem("pendaftar", JSON.stringify(pendaftar));
console.log("Data pendaftar disimpan!");

// Ambil data
const dataString = localStorage.getItem("pendaftar");
const daftarPendaftar = JSON.parse(dataString);

// Tampilkan data
console.log("Daftar Pendaftar:");
daftarPendaftar.forEach(function(p) {
    console.log(`${p.nama} - ${p.email} - ${p.gender}`);
});


// Data mahasiswa
const mahasiswa = [
    { nama: "Andi", umur: 21, jurusan: "Informatika" },
    { nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];

// Simpan ke localStorage
localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
console.log("Data mahasiswa disimpan di localStorage!");

// Ambil kembali
const jsonString = localStorage.getItem("mahasiswa");
const mahasiswaList = JSON.parse(jsonString);

// Tampilkan
console.log("Daftar Mahasiswa:");
mahasiswaList.forEach(mhs =>
  console.log(`${mhs.nama} - ${mhs.jurusan}`)
);
