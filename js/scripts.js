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
  $('#candidateForm').submit(function(event){
    if ($('#candidate').val() === 'Sheikh Hasina') {
      $('.dict').hide();
      $('.sheikhDiv').show();
    } else if ($('#candidate').val() === 'Vlad III the Impaler') {
      $('.dict').hide();
      $('.vladDiv').show();
    } else if ($('#candidate').val() === 'Saddam Hussein') {
      $('.dict').hide();
      $('.saddamDiv').show();
    }
    event.preventDefault();
  });
});
