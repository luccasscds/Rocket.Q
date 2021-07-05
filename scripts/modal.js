// Variaveis
const modalWrapper = document.querySelector('.modal-wrapper')
const cancelButton = document.querySelector('.button.cancel')

// Funções
cancelButton.addEventListener('click', close)
function open(){
    modalWrapper.classList.add('active')
}
function close(){
    modalWrapper.classList.remove('active')
}