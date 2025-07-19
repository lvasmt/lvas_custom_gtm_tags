function getUTCTimestamp() {
  var now = new Date();

  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  var year = now.getUTCFullYear();
  var month = pad(now.getUTCMonth() + 1);
  var day = pad(now.getUTCDate());
  var hours = pad(now.getUTCHours());
  var minutes = pad(now.getUTCMinutes());
  var seconds = pad(now.getUTCSeconds());

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC';
}
