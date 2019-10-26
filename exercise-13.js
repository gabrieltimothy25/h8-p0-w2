function xo(str) {
    const panjang = str.length;
    let jumlahX = 0;
    let jumlahY = 0;
    for (var i = 0; i < panjang; i++) {
        if (str[i] == 'x') {
            jumlahX++;
        } else {
            jumlahY++;
        }
    }
    if (jumlahX === jumlahY) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true