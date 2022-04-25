"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  var suma = 0;
  for (var i = 0; i < num.length; i++){
    suma += +num[i] * 2 ** (num.length -1 -i);
   }
   return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var bin = [];
  for (var i = num; i > 0;){
    bin.unshift(i % 2)
    i = Math.floor(i / 2);
  }
  return bin.join ("");
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
