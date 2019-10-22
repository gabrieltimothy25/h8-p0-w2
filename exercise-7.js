// SOAL 1
var rows1 = 5; // input the number of rows
// do loops to display asterisks in the console.
for (var deret = 0; deret < rows1; deret++) {
  console.log('*');
}

// SOAL 2
var rows2 = 5;
let str;
for (var deret = 0; deret < rows2; deret++) {
  str = '';
  for (var deret2 = 0; deret2 < rows2; deret2 ++){
    str += '*'
  }
  console.log(str)
}

// SOAL 3
var rows3 = 5;
let str2;
for (var deret = 1; deret <= rows3; deret++) {
  str2= '';
  for (var deret2 = 0; deret2 < deret; deret2++) {
    str2 += '*'
  }
  console.log(str2)
}