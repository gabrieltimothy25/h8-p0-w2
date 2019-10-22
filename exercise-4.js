var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 5; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let month;
switch (bulan) {
  case 1:
  month = 'Januari';
  break;

  case 2:
  month = 'Februari';
  break;

  case 3:
  month = 'Maret';
  break;

  case 4:
  month = 'April';
  break;

  case 5:
  month = 'Mei';
  break;

  case 6:
  month = 'Juni';
  break;

  case 7:
  month = 'Juli';
  break;

  case 8:
  month = 'Agustus';
  break;

  case 9:
  month = 'September';
  break;

  case 10:
  month = 'October';
  break;

  case 11:
  month = 'November';
  break;

  case 12:
  month = 'December';
  break;
}

console.log(`${tanggal} ${month} ${tahun}`)