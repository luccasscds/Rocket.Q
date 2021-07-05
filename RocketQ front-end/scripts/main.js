const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Marcar como lida
const checkButtons = document.querySelectorAll('.actions a.check')
checkButtons.forEach( button => {
    button.addEventListener("click", handleClick )
})

// Delete
const deleteButtons = document.querySelectorAll('.actions a.delete')
deleteButtons.forEach( button => {
    button.addEventListener("click", event => handleClick(event, false) )
})

// Handle
function handleClick(event, check = true) {
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id


    const form = document.querySelector('.modal form')
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?"`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`


    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    open()
}

const roomCode = document.querySelector('#room-id')
roomCode.addEventListener('click', copying)