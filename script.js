// ## Requisitos
//     OK 1- Adicionar itens na lista (ta sobrescrevendo)
//     OK 2- Marcar itens concluídos individualmente
//    OK 3 - Excluir itens individualmente
//   OK 4 - Validar campo de texto para não entrar itens vazios 
//     5 - Limpar campo de texto depois que insere o item na lista


// selecionando os elementos do html para manipular os evento

window.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector('#todoInput')
    // console.log (input)

    const addTarefas = document.querySelector('#todoSubmit')
    // console.log (addTarefas)

    const lista = document.querySelector('#todoLista')
    // console.log (lista)


    //criando botão para excluir item
    const botaoExcluir = document.createElement('button')
    botaoExcluir.innerText = 'X'

    //criando a div do item da lista
    // const divTarefas = document.querySelector('#todoTarefas')

    const item = document.createElement('li')

    function addItens(e) {
        // 4- validar input não vazio
        if (input.value.trim()!== '') {
            e.preventDefault()
            item.innerText = input.value
            lista.appendChild(item)
            // console.log (item)
                        
            item.appendChild(botaoExcluir)
            // console.log (botaoExcluir)

            // 5- resetar input
            // input.reset()
        } else {
            alert ('Escreva uma tarefa!')
        }
    }

    
    //resolução com for
    // function addItens(e) {
    //     for (i = lista.length - 1; i >= 0; i--) {
    //         if (input.value.length !== 0 || input.value.trim()) {
    //             e.preventDefault()
    //             item.innerText = input.value
    //             item = (lista[i])
    //             lista.appendChild(item)
    //             // console.log (item)

    //             item.appendChild(botaoExcluir)
    //             // console.log (botaoExcluir)
    //         }
    //     }
    // }

    addTarefas.addEventListener('click', addItens)

    // Marcar itens concluídos individualmente
    function itemConcluido() {
        item.classList.add('itemConcluido');

    }

    item.addEventListener('click', itemConcluido)

    //3 - Excluir itens individualmente

    function excluirItem (){
        lista.removeChild (item)
    }

    botaoExcluir.addEventListener ('click', excluirItem)







})






