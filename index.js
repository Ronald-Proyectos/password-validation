// Variables
const passwordInput = document.querySelector(".pass-field input"),
      eyeIcon = document.querySelector(".pass-field i"),
      requirementsList = document.querySelectorAll(".requirement-list li")

    
// Un Array de requisitos de contraseña con sus correspondientes   
// Expresión regular e índice del elemento de la lista de requisitos
const requirements = [
    {regex: /.{8,}/, index: 0}, // Al menos 8 caracteres de longitud
    {regex: /[0-9]/, index: 1}, // Al menos un numero
    {regex: /[a-z]/, index: 2}, // Al menos una letra minuscula
    {regex: /[^A-Za-z0-9]/, index: 3}, //Al menos un caracter especial
    {regex: /[A-Z]/, index: 4} //Al menos una letra mayuscula
]

// Eventos
eyeIcon.addEventListener("click", () => {
    // Alternar el 'type' del 'input' entre 'password' y 'text'
    passwordInput.type = passwordInput.type === "password" ? "text" : "password"

    // Actualizar la clase del icono de ojo en función del tipo de entrada de contraseña
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`
})

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach((item) => {
        // Comprobar si la contraseña coincide con la ExpReg
        const isValid = item.regex.test(e.target.value)
        const requirementItem = requirementsList[item.index]

        // Actualizar la clase y el icono del elemento si el requisito coincide o no
        if(isValid){
            requirementItem.firstElementChild.className = "fa-solid fa-check"
            requirementItem.classList.add("valid")
        }else{
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
            requirementItem.classList.remove("valid")
        }
    })
})