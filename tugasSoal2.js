const validasi = (harga, voucher, jarak, pajak) => {
  if (
    typeof harga == "number" &&
    typeof jarak == "number" &&
    typeof pajak == "boolean"
  ) {
    if (voucher == "PIJARFOOD5") {
      if (harga < 50000) {
        return new Error(
          "Kode Promo tidak bisa dipakai \nminimal pembelian kurang"
        );
      } else {
        return harga * (50 / 100) <= 50000 ? harga * (50 / 100) : 50000;
      }
    } else if (voucher == "DITRAKTIRPIJAR") {
      if (harga < 25000) {
        return new Error(
          "Kode Promo tidak bisa dipakai \nminimal pembelian kurang"
        );
      } else {
        return harga * (60 / 100) <= 30000 ? harga * (60 / 100) : 30000;
      }
    } else if (voucher == false) {
      return "tidak menggunakan kode promo";
    } else {
      return new Error("kode promo salah");
    }
  } else {
    return new Error("parameter harus benar");
  }
};
const PijarFood = (harga, voucher, jarak, pajak) => {
  try {
    const hasil = validasi(harga, voucher, jarak, pajak);
    if (hasil instanceof Error) {
      throw Error(hasil.message);
    }

    const ongkir = jarak >= 2 ? (jarak - 2) * 3000 + 5000 : 5000;
    const fee = harga * (pajak == true ? 5 / 100 : 0);
    const subTotal =
      harga - (typeof hasil == "number" ? hasil : 0) + ongkir + fee;
    console.log(`
    Harga       : ${harga}
    Potongan    : ${hasil}
    Biaya Antar : ${ongkir}
    Pajak       : ${fee}
    SubTotal    : ${subTotal}`);
  } catch (err) {
    console.log(err.message);
  }
};

PijarFood(50000, "PIJARFOOD5", 2, true);
PijarFood("50000", "PIJARFOOD5", 2, true);//jika harga bukan number 
PijarFood(50000, "PIJAROD5", 2, true);//jika voucher salah
PijarFood(25000, "PIJARFOOD5", 2, true);//jika harga tidak memenuhi minbel voucher
PijarFood(50000, false, 2, true);//jika tidak pake voucher
PijarFood(50000, "PIJARFOOD5", "2", true);//jika jarak bukan number
PijarFood(50000, "PIJARFOOD5", 1, true);//jika jarak 1
PijarFood(50000, "PIJARFOOD5", 5, true);//jika jarak 5
PijarFood(50000, "PIJARFOOD5", 2, "true");//jika pajak bukan boolean
PijarFood(50000, "PIJARFOOD5", 2, false);//jika tidak pakai pajak
PijarFood(50000, "DITRAKTIRPIJAR", 2, true);//jika pakai voucher ditraktirpijar