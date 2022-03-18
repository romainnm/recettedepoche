export function minToH(time) {
  if (time === 0) {
    return "-";
  }
  if (time > 60) {
    var hours = time / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    if (rminutes === 0) {
      rminutes = null;
      return rhours + "h";
    }
    return rhours + "h" + rminutes + " min";
  } else {
    return time + " min";
  }
}
