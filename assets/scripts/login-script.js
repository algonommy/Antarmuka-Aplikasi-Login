/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* comment : Membuat variabel untuk setiap elemen view. */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* comment : Membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function (event) {
  event.preventDefault();

  /* comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan. */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* TODO 2 : Buat Logika perbandingan dengan kondisi:
     Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
     Jika tidak, maka panggil fungsi showPopUp().
   */
  /* comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* comment : Jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();

  } else {
    
    /* comment : Namun jika tidak sesuai maka akan menampilkan bahwa input salah. */
    showPopUp();
  }
});
