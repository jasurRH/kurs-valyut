var elForm = document.querySelector('.js-form');
var elInput = document.querySelector('.js-input');
var elButton = document.querySelector('.btn');
var elSelect = document.querySelector('.js-select');
var elResult = document.querySelector('.js-result');
var elUsd = document.querySelector('.js-usd');
var elEuro = document.querySelector('.js-euro');
var elRubl = document.querySelector('.js-rubl');


var USD_KURS = 11000;
var EURO_KURS = 11800;
var RUBL_KURS = 188;

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var sum = elInput.value;
  var sumb = elSelect.value;
  var natija = 0;

  if ( sumb == "usd") {
    natija = (sum / USD_KURS);
    elResult.textContent = `${natija}`;
  } else  if ( sumb == "euro") {
    natija = (sum / EURO_KURS);
    elResult.textContent = `${natija}`;
  } else if ( sumb == "rubl" ) {
    natija = (sum / RUBL_KURS);
    elResult.textContent = `${natija}`;
  }
})