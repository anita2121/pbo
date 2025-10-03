class Mahasiswa {
  constructor(nama, nim, jurusan, alamat, status) {
    // Atribut publik
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;

    // Atribut privat pakai closure
    let _alamat = alamat;
    let _status = status;

    // Getter & Setter alamat
    this.getAlamat = function () {
      return _alamat;
    };

    this.setAlamat = function (alamatBaru) {
      if (alamatBaru.length > 5) {
        _alamat = alamatBaru;
      } else {
        console.log("Alamat terlalu pendek!");
      }
    };

    // Getter & Setter status
    this.getStatus = function () {
      return _status;
    };

    this.setStatus = function (statusBaru) {
      const statusValid = ["aktif", "cuti", "lulus"];
      if (statusValid.includes(statusBaru.toLowerCase())) {
        _status = statusBaru;
      } else {
        console.log("Status tidak valid! Pilih: aktif, cuti, atau lulus.");
      }
    };
  }
}

// Membuat beberapa objek mahasiswa
let mhs1 = new Mahasiswa("Nita", "12345", "Psikologi", "Jl. Melati No. 10", "aktif");
let mhs2 = new Mahasiswa("Andi", "67890", "Teknik Informatika", "Jl. Mawar No. 5", "cuti");
let mhs3 = new Mahasiswa("Siti", "54321", "Hukum", "Jl. Kenanga No. 7", "lulus");

// --- Fungsi cetak ---
function cetakData(mahasiswa, namaObjek, alamatBaru, statusBaru) {
  console.log(`\n=== Data ${namaObjek} ===`);

  // Data awal
  console.log(">> Data Awal");
  console.log("Nama:", mahasiswa.nama);
  console.log("NIM:", mahasiswa.nim);
  console.log("Jurusan:", mahasiswa.jurusan);
  console.log("Alamat:", mahasiswa.getAlamat());
  console.log("Status:", mahasiswa.getStatus());

  // Update
  if (alamatBaru) mahasiswa.setAlamat(alamatBaru);
  if (statusBaru) mahasiswa.setStatus(statusBaru);

  console.log("\n>> Data Update");
  console.log("Nama:", mahasiswa.nama);
  console.log("NIM:", mahasiswa.nim);
  console.log("Jurusan:", mahasiswa.jurusan);
  console.log("Alamat:", mahasiswa.getAlamat());
  console.log("Status:", mahasiswa.getStatus());
}

// Cetak semua data (dengan update berbeda)
cetakData(mhs1, "Mahasiswa 1", "Jl. Merpati No. 20", "cuti");
cetakData(mhs2, "Mahasiswa 2", "Jl. Anggrek No. 15", "aktif");
cetakData(mhs3, "Mahasiswa 3", "Jl. Cemara No. 30", "cuti");
