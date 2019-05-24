"use strict";

;

(function () {
  var btnAjuda = document.querySelector('#btnAjuda');
  btnAjuda.addEventListener("click", function () {
    //pegador der ajudas
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
    xhr.responseType = "json";
    xhr.send();
    xhr.addEventListener("load", function () {
      var objeto = xhr.response;
      var ajudas = objeto.instrucoes;
      ajudas.forEach(function (ajuda) {
        adicionarCartaoNoMural(ajuda);
      });
    });
  });
  btnAjuda.classList.remove('no-js');
})();