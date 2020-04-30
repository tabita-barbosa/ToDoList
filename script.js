// ## Requisitos
//     OK 1- Adicionar itens na lista (ta sobrescrevendo)
//     OK 2- Marcar itens concluídos individualmente
//    OK 3 - Excluir itens individualmente
//   OK 4 - Validar campo de texto para não entrar itens vazios 
//   OK 5 - Limpar campo de texto depois que insere o item na lista


window.addEventListener('DOMContentLoaded', function () {

    // selecionando os elementos do html para manipular os evento
    const input = document.querySelector('#todoInput')
    // console.log (input)

    const addTarefas = document.querySelector('#todoSubmit')
    // console.log (addTarefas)


    //criando a div do item da lista
    const divTarefas = document.querySelector('#todoTarefas')


    function addItens() {
        const lista = document.querySelector('#todoLista')
        // console.log (lista)
        const item = document.createElement('li')
        const botaoExcluir = document.createElement('button')
        const divBotaoExcluir = document.createElement('div')
        const form = document.querySelector('form')


        // 4- validar input não vazio
        if (input.value.trim() !== '') {
            item.innerText = input.value
            lista.appendChild(item)
            // console.log(item)

            //criar botão para excluir item
            botaoExcluir.innerText = 'X'
            item.appendChild(divBotaoExcluir)
            divBotaoExcluir.appendChild(botaoExcluir)
            // console.log (botaoExcluir)

            //resetar input
            form.reset()
        } else {
            alert('Escreva uma tarefa!')
        }

        // Marcar itens concluídos individualmente
        function esconder() {
            item.classList.toggle('itemConcluido')
        }
        item.addEventListener('click', esconder);


        //3 - Excluir itens individualmente
        function excluirItem() {
            lista.removeChild(item)

        }

        botaoExcluir.addEventListener('click', excluirItem)

        // **BÔNUS**
        // - Marcar todos os itens como feito
        // - Excluir todos os itens da lista   
        const botaoMarcarTodos = document.querySelector('#todoMarcarTodos')
        const botaoLimparTodos = document.querySelector('#todoRemoverTodos')

        function limparTodos() {
            lista.removeChild(item)
        }

        botaoLimparTodos.addEventListener('click', limparTodos)


        botaoMarcarTodos.addEventListener('click', esconder)

        //- Reorganizar a ordem "arrastando" os cards utilizando drag and drop, atribui o draggable para todo li criado
        let dragging = null

        item.setAttribute('draggable', true)
        lista.setAttribute('draggable', true)
        divTarefas.setAttribute('draggable', true)

        //Add evento ao <ul>
        lista.addEventListener('dragstart', function (e) {
            dragging = e.target.closest('li')
            //closest pega o elementomais proximo da caixa principal que o evento foi add
        })

        //dragoverarrasta o elemento.
        lista.addEventListener('dragover', function (e) {
            e.preventDefault()
            //permite que o elemento seja arrastado, pois o padrão é agarrar e soltar
            const node = e.target.closest('li')
            this.insertBefore(dragging, node)
            item.style.opacity = .5
            // lista.style.backgroundColor = 'gray'

        })

        //finaliza o ato de arrastar
        lista.addEventListener('dragend', function (e) {
            dragging = null
            //permite pegar outro elemento pra arrastar
            item.style.opacity = ''
            // lista.style.backgroundColor ='white'
        })

    }


    addTarefas.addEventListener('click', function (e) {
        e.preventDefault()
        addItens()
    })



})

