let tabela = document.querySelector('#tabela-agendamentos')

tabela.addEventListener('dblclick', function (event) {
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 300)

})