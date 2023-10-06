function characterCheck(text) {
  var dieuKien = new RegExp("^[A-Za-z]+$");
  var kiemTra;
  if (text.trim()) {
    if (dieuKien.test(text)) {
      kiemTra = true;
    } else {
      kiemTra = false;
    }
  } else {
    kiemTra = false;
  }
  return kiemTra;
}
