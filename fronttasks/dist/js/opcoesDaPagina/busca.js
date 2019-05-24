"use strict";

;

(function () {
  $('#busca').removeClass('no-js').on('input', function () {
    var digitado = this.value.trim();
    var regex = new RegExp(digitado, 'i');
    $('.cartao').hide().filter(function () {
      var texto = $(this).find('.cartao-conteudo').text();
      return regex.test(texto);
    }).show();
  });
})();