/* Enter the code to remove the main node element under this comment */
console.log('hello')

main.remove()

/* Create your new element here and assign it to newHeader */
let newHeader = document.createElement('h1')
newHeader.id = "victory"
newHeader.innerText = "Grace is the champion!"

document.body.appendChild(newHeader)
