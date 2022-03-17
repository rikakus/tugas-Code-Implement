// mendeteksi teks palindrom
const cekKata = (kata) => {
  if (typeof kata == "string") {
    let hasil = "";
    for (i = kata.length - 1; i >= 0; i--) {
      hasil = hasil + kata[i];
    }
    if (hasil.toLowerCase() == kata.toLowerCase()) {
      console.log("kata palindrom");
    } else {
      console.log("kata bukan palindrom");
    }
  } else {
    console.log("parameter harus string");
  }
};

cekKata("Malam");

//reverse word
const balikKalimat = (kata) => {
  if (typeof kata == "string") {
    let hasil = kata.split(" ").reverse().join(" ");
    console.log(hasil);
  } else {
    console.log("parameter harus string");
  }
};

// balikKalimat("Saya belajar Javascript")
