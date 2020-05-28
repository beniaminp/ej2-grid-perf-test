function setIntervalForFiftyIterations() {
  var iterations = 0;
  var intervalCall = setInterval(function () {
    if (iterations == 200) {
      clearInterval(intervalCall);
    }
    $($('.btn.btn-secondary')[1]).click();
    setTimeout(function () {
      $($('.btn.btn-secondary')[0]).click();
      iterations += 1;
    }, 500);
  }, 1000);
}
