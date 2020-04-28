// ## Requisitos
//     OK 1- Adicionar itens na lista (ta sobrescrevendo)
//     OK 2- Marcar itens concluídos individualmente
//    3 - Excluir itens individualmente
//   OK 4 - Validar campo de texto para não entrar itens vazios (falta o espaço)
//     5 - Limpar campo de texto depois que insere o item na lista


// selecionando os elementos do html para manipular os evento

window.addEventListener('DOMContentLoaded', function () {

    const input = document.querySelector('#todoInput')
    // console.log (input)

    const addTarefas = document.querySelector('#todoSubmit')
    // console.log (addTarefas)

    const lista = document.querySelector('#todoLista')
    // console.log (lista)

    let item = document.createElement('li')

    //     - Adicionar itens na lista
    function addItens(e) {
        if (input.value !== '' && input.value !== ' ') {
            e.preventDefault()
            item.innerText = input.value
            lista.appendChild(item)
        }
    }

    addTarefas.addEventListener('click', addItens)

    // Marcar itens concluídos individualmente
    function itemConcluido() {
        item.classList.add('itemConcluido');

    }

    item.addEventListener('click', itemConcluido)
 



})






