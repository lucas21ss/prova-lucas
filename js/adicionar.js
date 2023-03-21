let botaoAdicionar = document.querySelector('#adicionar-agendamento')
botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let adiciona = document.querySelector('#form-adiciona')

    let agendamento = obterValoresDoAdiciona(adiciona)
    let erros = validaAgendamento(agendamento)

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }

    adicionaAgendamento(agendamento)


})

function validaAgendamento(agendamento) {
    let erros = []

    if (agendamento.nome.length == 0) {
        erros.push('O nome é obrigatório')
    }

    if (agendamento.tel.length == 0) {
        erros.push('O telefone de contato é obrigatório')
    }
    if (agendamento.email.length == 0) {
        erros.push('O e-mail de contato é obrigatório')
    }
    if (agendamento.serviço.length == 0) {
        erros.push('O seriviço solicitado é obrigatório')
    }

    return erros
}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaAgendamento(agendamento) {
    let agendamentoTr = montarTr(agendamento)
    let tabela = document.querySelector('#tabela-agendamentos')

    tabela.appendChild(agendamentoTr)
}

function montarTr(agendamento) {
    let agendamentoTr = document.createElement('tr')
    agendamentoTr.classList.add('agendamento')

    agendamentoTr.appendChild(montarTd(agendamento.nome, 'info-nome'))
    agendamentoTr.appendChild(montarTd(agendamento.tel, 'info-tel'))
    agendamentoTr.appendChild(montarTd(agendamento.email, 'info-email'))
    agendamentoTr.appendChild(montarTd(agendamento.serviço, 'info-serviço'))


    return agendamentoTr
}

function montarTd(dado, classe) {
    //criando um elemeto td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoAdiciona(adiciona) {
    let agendamento = {
        nome: adiciona.nome.value,
        tel: adiciona.tel.value,
        email: adiciona.email.value,
        serviço: adiciona.serviço.value,

    }
    return agendamento
}