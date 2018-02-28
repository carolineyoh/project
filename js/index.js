window.onload = function(){

  var auxbout = document.getElementById('Auxbout');
  document.getElementById('auxboutButton').addEventListener('click',scrollToAuxbout);

  function scrollToAuxbout() {
      auxbout.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Auxbout');
  }

  var seund = document.getElementById('Seund');
  document.getElementById('seundButton').addEventListener('click',scrollToSeund);

  function scrollToSeund() {
      seund.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Seund');
  }

  var showy = document.getElementById('Showy');
  document.getElementById('showyButton').addEventListener('click',scrollToShowy);

  function scrollToShowy() {
      showy.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Showy');
  }

  var limits = document.getElementById('Limits');
  document.getElementById('limitsButton').addEventListener('click',scrollToLimits);

  function scrollToLimits() {
      limits.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Limits');
  }



}
