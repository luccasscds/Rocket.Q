export default function Copy() {  
      
    const inputCopy = document.querySelector("#copy")
    const buttonHoverOn = document.querySelector('header .buttons .button')
    const copedMessage = document.querySelector('.coped-message')

    async function copying() {
        await buttonHoverOn.classList.add('on')
        await copedMessage.classList.add('active')

        await inputCopy.select()
        await document.execCommand('copy')

        await setTimeout(() => {
            copedMessage.classList.remove('active')
            buttonHoverOn.classList.remove('on')
        }, 2000)
    }

    return { copying }
}