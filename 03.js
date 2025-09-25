// ===== CLASS INDUK =====
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;       // Attribute 1
    this.nim = nim;         // Attribute 2
    this.jurusan = jurusan; // Attribute 3
  }

  belajar() { // Method 1
    console.log(`${this.nama} sedang belajar.`);
  }

  biodata() { // Method 2
    console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}`);
  }
}

// ===== CLASS ANAK 1 =====
class MahasiswaAktif extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan) {
    super(nama, nim, jurusan);
    this.angkatan = angkatan; // Attribute 4
  }

  ikutOrganisasi(namaOrganisasi) { // Method 3
    console.log(`${this.nama} mengikuti organisasi ${namaOrganisasi}.`);
  }
}

// ===== CLASS ANAK 2 =====
class MahasiswaLulus extends Mahasiswa {
  constructor(nama, nim, jurusan, tahunLulus) {
    super(nama, nim, jurusan);
    this.tahunLulus = tahunLulus; // Attribute 5
  }

  bekerja(perusahaan) { // Method 4
    console.log(`${this.nama} bekerja di perusahaan ${perusahaan}.`);
  }
}

// ===== OBJECT =====
const mhs1 = new Mahasiswa("Andi", "123456", "Informatika"); 
const mhs2 = new MahasiswaAktif("Budi", "654321", "Sistem Informasi", 2023);
const mhs3 = new MahasiswaLulus("Citra", "789012", "Teknik Elektro", 2022);

// ===== PEMANGGILAN METHOD =====
mhs1.belajar();
mhs1.biodata();

mhs2.belajar();
mhs2.ikutOrganisasi("Himpunan Mahasiswa Informatika");

mhs3.biodata();
mhs3.bekerja("PT Teknologi Nusantara");

