// SOAL 1
console.log('Looping Pertama')
var counter = 2;
while (counter <= 20) {
  console.log(`${counter} - I love coding`)
  counter += 2
}
console.log('Looping Kedua')
var counter = 20;
while (counter >= 2) {
  console.log(`${counter} - I will become fullstack developer`)
  counter -= 2
}

// SOAL 2
console.log('Looping Pertama')
for (var counter = 1; counter <= 20; counter ++) {
  console.log(`${counter} - I love coding`)
}
console.log('Looping Kedua')
for (var counter = 20; counter >= 1; counter --) {
  console.log(`${counter} - I will become fullstack developer`)
}


// SOAL 3

// Ganjil Genap
for (var counter = 1; counter <= 100; counter ++) {
  if (counter % 2 === 0) {        // check untuk genap
    console.log('GENAP')
  } else {
    console.log('GANJIL')        // check untuk ganjil
  }
}

// PERTAMBAHAN COUNTER 2 DAN CEK KELIPATAN 3
for (var counter = 1; counter <= 100; counter += 2) {
  if (counter % 3 === 0) {
    console.log(`${counter} KELIPATAN 3`) // Check kelipatan tiga
  }
}

// PERTAMBAHAN COUNTER 5 DAN CEK KELIPATAN 6
for (var counter = 1; counter <= 100; counter += 5) {
  if (counter % 6 === 0) {
    console.log(`${counter} KELIPATAN 6`) // Check kelipatan enam
  }
}

// PERTAMBAHAN COUNTER 9 DAN CEK KELIPATAN 10
for (var counter = 1; counter <= 100; counter += 9) {
  if (counter % 10 === 0) {
    console.log(`${counter} KELIPATAN 10`) // Check kelipatan 10
  }
}