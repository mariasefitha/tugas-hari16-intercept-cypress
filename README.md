# Tugas Hari 16 - Bootcamp Sanbercode - How to using Intercept in cypress

Repository ini berisi tugas **Hari 16 - How to using Intercept in cypress** untuk menguji fungsionalitas **Login** pada aplikasi [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/).

## 🚀 Fitur Test
- **Login Test**  
  - Memasukkan username & password valid  
  - Menggunakan `cy.intercept()` untuk memantau request login (`/web/index.php/auth/validate`)  
  - Verifikasi status code `302` dari server  
  - Verifikasi berhasil masuk ke halaman dashboard
 
---

## 📂 Struktur Folder
<img width="133" height="90" alt="image" src="https://github.com/user-attachments/assets/0fa8c8f4-1174-48e4-b62b-8971fd5bd58a" />

---

## ⚡ Instalasi & Menjalankan
1. Clone repo ini atau copy folder project.
2. Install dependencies:
   ```bash
   npm install
3. Jalankan Cypress GUI:
   ```bash
   npx cypress open
4. Atau jalankan via terminal (headless):
   ```bash
   npx cypress run

---

✅ Hasil
- Test login berhasil dijalankan
  <img width="1366" height="720" alt="image" src="https://github.com/user-attachments/assets/8a1c1214-1e40-41c0-9d00-b65974b867ca" />

- Intercept sukses mendeteksi request login dan redirect ke dashboard
