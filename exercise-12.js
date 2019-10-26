function konversiMenit(menit) {
    let waktu = '';
    var jam = Math.floor(menit/60);
    var minute = menit-(60 * jam);
    waktu += jam;
    waktu += ':';
    if (minute > 10) {
        waktu += minute;
    } else {
        waktu += '0';
        waktu += minute;
    }
    return waktu;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00