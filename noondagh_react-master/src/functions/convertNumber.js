module.exports = function (number, separator = true) {
  let str = number + "";

  if (separator) {
    str = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let persianNumber = str.replace(/[0-9]/g, function (w) {
    return id[+w];
  });

  return persianNumber;
};
