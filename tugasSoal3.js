const urutDeret = (data) => {
  if (typeof data == "number") {
    if (data < Number.MAX_SAFE_INTEGER) {
      let hasil = data
        .toString()
        .split("0")
        .map((arr) => {
          return arr.split("").sort().join("");
        })
        .join("");
      console.log(hasil);
    } else {
      console.log("number melebihi batas maksimal integer");
    }
  } else {
    console.log("parameter harus number");
  }
};

urutDeret(5956560159466056);
