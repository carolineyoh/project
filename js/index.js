window.onload = function(){

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementsByTagName('nav')[0].classList.toggle('flex');
  });

  var auxbout = document.getElementById('Auxbout');
  document.getElementById('auxboutButton').addEventListener('click',pressAux);

  function pressAux() {
    scrollToAuxbout();
    auxToAuxbout();
  }

  function scrollToAuxbout() {
      auxbout.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Auxbout');
  }

  var seund = document.getElementById('Seund');
  document.getElementById('seundButton').addEventListener('click',pressSend);

  function pressSend() {
    scrollToSeund();
    sendToSeund();
  }

  function scrollToSeund() {
      seund.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Seund');
  }

  var showy = document.getElementById('Showy');
  document.getElementById('showyButton').addEventListener('click',pressShitty);

  function pressShitty() {
    scrollToShowy();
    shittyToShowy();
  }

  function scrollToShowy() {
      showy.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Showy');
  }

  var limits = document.getElementById('Limits');
  document.getElementById('limitsButton').addEventListener('click',pressLimits);

  function pressLimits() {
    scrollToLimits();
    limitsToLimits();
  }

  function scrollToLimits() {
      limits.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
      console.log('Scroll to Limits');
  }

// document.getElementById('auxboutButton').addEventListener('click',auxToAuxbout);
// document.getElementById('seundButton').addEventListener('click',sendToSeund);
// document.getElementById('showyButton').addEventListener('click',shittyToShowy);
// document.getElementById('limitsButton').addEventListener('click',limitsToLimits);

var aux = document.getElementById('auxboutButton').innerHTML;
var send = document.getElementById('seundButton').innerHTML;
var shitty = document.getElementById('showyButton').innerHTML;

function menuOrig () {
  var returntoAux = aux.replace(/AUXBOUT/g, 'AUX');
  document.getElementById('auxboutButton').innerHTML = returntoAux;
  var returntoSend = send.replace(/SEUND/g, 'SEND');
  document.getElementById('seundButton').innerHTML = returntoSend;
  var returntoShitty = shitty.replace(/SHOWY/g, 'SHITTY');
  document.getElementById('showyButton').innerHTML = returntoShitty;
}

function auxToAuxbout() {
  menuOrig();
  var changetoAuxbout = aux.replace(/AUX/g, 'AUXBOUT');
  document.getElementById('auxboutButton').innerHTML = changetoAuxbout;
}

function sendToSeund() {
  menuOrig();
  var changetoSeund = send.replace(/SEND/g, 'SEUND');
  document.getElementById('seundButton').innerHTML = changetoSeund;
}

function shittyToShowy() {
  menuOrig();
  var changetoShowy = shitty.replace(/SHITTY/g, 'SHOWY');
  document.getElementById('showyButton').innerHTML = changetoShowy;
}

function limitsToLimits() {
  menuOrig();
}

}
