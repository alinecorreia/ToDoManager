"use strict";

;

(function () {
  var btnSync = $("#btnSync");
  btnSync.click(function () {
    btnSync.addClass("botaoSync--esperando");
    btnSync.removeClass("botaoSync--sincronizado");
    var salvadorDeCartoes = new XMLHttpRequest();
    salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
    salvadorDeCartoes.setRequestHeader("Content-type", "application/json");
    var infosDoMural = {
      usuario: "aline.correia31@gmail.com",
      cartoes: Array.from($(".cartao")).map(function (cartao) {
        return {
          conteudo: cartao.querySelector(".cartao-conteudo").innerHTML,
          cor: getComputedStyle(cartao).getPropertyValue("background-color")
        };
      })
    };
    salvadorDeCartoes.send(JSON.stringify(infosDoMural));
    salvadorDeCartoes.addEventListener("load", function () {
      var response = JSON.parse(salvadorDeCartoes.response);
      console.log("".concat(response.quantidade, " cartoes salvos em ").concat(response.usuario));
      btnSync.removeClass("botaoSync--esperando");
      btnSync.addClass("botaoSync--sincronizado");
    });
    salvadorDeCartoes.addEventListener("error", function () {
      btnSync.removeClass("botaoSync--esperando");
      btnSync.addClass("botaoSync--deuRuim");
    });
  });
  btnSync.removeClass('no-js');
})();