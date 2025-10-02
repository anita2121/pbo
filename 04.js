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
    this.getAlamat = function() {
      return _alamat;
    };

    this.setAlamat = function(alamatBaru) {
      if (alamatBaru.length > 5) {
        _alamat = alamatBaru;
      } else {
        console.log("Alamat terlalu pendek!");
      }
    };

    // Getter & Setter status
    this.getStatus = function() {
      return _status;
    };

    this.setStatus = function(statusBaru) {
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

console.log("=== Data Mahasiswa 1 ===");
console.log("Nama:", mhs1.nama);
console.log("NIM:", mhs1.nim);
console.log("Jurusan:", mhs1.jurusan);
console.log("Alamat:", mhs1.getAlamat());
console.log("Status:", mhs1.getStatus());

console.log("\n=== Data Mahasiswa 2 ===");
console.log("Nama:", mhs2.nama);
console.log("NIM:", mhs2.nim);
console.log("Jurusan:", mhs2.jurusan);
console.log("Alamat:", mhs2.getAlamat());
console.log("Status:", mhs2.getStatus());

console.log("\n=== Data Mahasiswa 3 ===");
console.log("Nama:", mhs3.nama);
console.log("NIM:", mhs3.nim);
console.log("Jurusan:", mhs3.jurusan);
console.log("Alamat:", mhs3.getAlamat());
console.log("Status:", mhs3.getStatus());

// --- Update semua status & alamat ---
mhs1.setAlamat("Jl. Merpati No. 20");
mhs1.setStatus("cuti");

mhs2.setAlamat("Jl. Flamboyan No. 88");
mhs2.setStatus("aktif");

mhs3.setAlamat("Jl. Anggrek No. 15");
mhs3.setStatus("aktif");

// --- Cek hasil update ---
console.log("\n=== Setelah Update ===");
console.log("Mhs1:", mhs1.nama, "-", mhs1.getAlamat(), "-", mhs1.getStatus());
console.log("Mhs2:", mhs2.nama, "-", mhs2.getAlamat(), "-", mhs2.getStatus());
console.log("Mhs3:", mhs3.nama, "-", mhs3.getAlamat(), "-", mhs3.getStatus());

