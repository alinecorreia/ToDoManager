;(function () {
    $('#busca')
    .removeClass('no-js')
    .on('input', function (){
        const digitado = this.value.trim();
        const regex = new RegExp (digitado, 'i');
        $('.cartao')
        .hide()
        .filter (function (){
            const texto = $(this).find('.cartao-conteudo').text();
            return regex.test (texto); 
        })

        .show();

});
}()); 

