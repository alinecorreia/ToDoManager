
;(function() {
    let numeroDoCartao = 0;
    const form = document.querySelector ('.formNovoCartao')
    form.addEventListener ('submit', function (event) {
        event.preventDefault ()
        const textarea = form.querySelector ('.formNovoCartao-conteudo')
        const titulo = form.querySelector ('.formNovoCartao-titulo')
        const isTextAreaVazio = textarea.value.trim() .length === 0

        if (isTextAreaVazio) {
            const msgErro = document.createElement ('div')
            msgErro.classList.add ('formNovoCartao-msg')
            msgErro.textContent = 'Formulário inválido. Nao digite varios nada.'

            const btnSubmit = form.children [form.children.length-1]
            form.addEventListener ('animationend', function (event) {
                event.target.remove ()
            }) 

            form.insertBefore (msgErro, btnSubmit)
      } else { 
          //enviar info pro servidor
          $.ajax({
              url:'http://localhost:3000/tasks', 
              method:' POST', 
              contentType:'application/json', 
              data:{
                  title:titulo,
                  description:textarea,
                  isPriority:false,
                  isDone:false
              }})
              .then(()=>{
                  alert('ok');
              });
    }


    })


    form.classList.remove('no-js')

})()