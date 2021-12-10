const message = ["Usuario/Senha incorretos!", "Campos Obrigatórios"]


const start = () => {
    const button = document.getElementById("enter")
    button.onclick = enterEvent
}

const enterEvent = event => {

   const user = catchValueUser()
   const pass = catchValuePass()

   if (user === "" && pass === ""){
        
        printMessage(1)
   
   }else if (user === "admin" && pass === "abc123"){

        window.location.href = "index2.html"

        
   }else{
        printMessage(0)
       
   }
   
}

const catchValueUser = () => {

    const input = document.getElementById("user")
    const aux = input.value
    return aux;
}

const catchValuePass = () => {

    const input = document.getElementById("pass")
    const aux = input.value
    return aux;
}

const printMessage = (index) => {

        const div = document.getElementById("loginAns")
        div.innerHTML = ""
        const p = document.createElement("p")
        const content = document.createTextNode(message[index])
        p.appendChild(content)
        div.insertAdjacentElement("beforeend", p)

}
start()
