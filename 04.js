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

// Membuat objek
let mhs1 = new Mahasiswa("Nita", "202401110052", "informatika", "Jl. Melati No. 10", "aktif");

// Akses publik
console.log("Nama:", mhs1.nama);
console.log("NIM:", mhs1.nim);
console.log("Jurusan:", mhs1.jurusan);

// Akses privat via getter
console.log("Alamat:", mhs1.getAlamat());
console.log("Status:", mhs1.getStatus());

// Ubah alamat & status
mhs1.setAlamat("Jl. Kenanga No. 25");
mhs1.setStatus("cuti");

// Cek setelah diubah
console.log("Alamat baru:", mhs1.getAlamat());
console.log("Status baru:", mhs1.getStatus());
