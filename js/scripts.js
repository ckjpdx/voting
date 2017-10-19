$('document').ready(function(){
  var userAge;
  var checkAge = function(){
    userAge = parseInt(prompt("Enter your age!"));
      if (userAge > 120) {
        alert('Hey jerk - enter your real age. Voting is a serious thing. That\'s the problem with kids these days. No respect.');
        window.location.reload();
      } else if (userAge >= 18) {
        $('.votingInfo').show();
      } else {
        $('.under18').show();
      }
  };
  checkAge();
});
