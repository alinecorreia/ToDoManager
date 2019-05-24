;(function () {

    const btnSync = $ ("#btnSync")
    btnSync.click(function() {
        btnSync.addClass("botaoSync--esperando")
        btnSync.removeClass("botaoSync--sincronizado")

        const salvadorDeCartoes = new XMLHttpRequest ()
        salvadorDeCartoes.open ('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
        salvadorDeCartoes.setRequestHeader ("Content-type", "application/json")

        const infosDoMural = {
            usuario: "aline.correia31@gmail.com"
            , cartoes: Array.from ($(".cartao")).map (function (cartao) {
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").innerHTML
                    ,cor: getComputedStyle(cartao).getPropertyValue("background-color")

                    }
                })
        }
        salvadorDeCartoes.send (JSON.stringify(infosDoMural))
        salvadorDeCartoes.addEventListener ("load", function () {
            const response = JSON.parse(salvadorDeCartoes.response)
            console.log (`${response.quantidade} cartoes salvos em ${response.usuario}`)

            btnSync.removeClass ("botaoSync--esperando")
            btnSync.addClass ("botaoSync--sincronizado")
            
        })

            salvadorDeCartoes.addEventListener ("error", function (){
                btnSync.removeClass ("botaoSync--esperando")
                btnSync.addClass ("botaoSync--deuRuim")


            }) 

})

btnSync.removeClass ('no-js')

})()