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

    // Metode tambahan
    this.perkenalan = function() {
      console.log(Halo, saya ${this.nama} (${this.nim}) dari jurusan ${this.jurusan}.);
    };

    this.cekAktif = function() {
      if (_status.toLowerCase() === "aktif") {
        console.log(${this.nama} masih aktif kuliah.);
      } else {
        console.log(${this.nama} tidak aktif (status: ${_status}).);
      }
    };
  }
}

// Membuat beberapa objek
let mhs1 = new Mahasiswa("Nita", "12345", "Psikologi", "Jl. Melati No. 10", "aktif");
let mhs2 = new Mahasiswa("Andi", "67890", "Teknik Informatika", "Jl. Mawar No. 5", "cuti");
let mhs3 = new Mahasiswa("Siti", "54321", "Hukum", "Jl. Kenanga No. 7", "lulus");

// Panggil metode perkenalan
mhs1.perkenalan();
mhs2.perkenalan();
mhs3.perkenalan();

// Cek status tiap mahasiswa
mhs1.cekAktif();
mhs2.cekAktif();
mhs3.cekAktif();

// Akses privat lewat getter
console.log("Alamat mhs1:", mhs1.getAlamat());
console.log("Status mhs2:", mhs2.getStatus());

// Update data privat
mhs1.setAlamat("Jl. Merpati No. 20");
mhs2.setStatus("aktif");

// Cek perubahan
console.log("Alamat baru mhs1:", mhs1.getAlamat());
console.log("Status baru mhs2:", mhs2.getStatus());
