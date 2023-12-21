function cadastrar() {
    const inputValue = document.querySelector("input#txtNote")
    if (inputValue.value=="") {
        window.alert("O campo está vazio! Por favor preencha antes de tentar adicionar")
        return
    }

    const list = document.querySelector("#list")

    const taskContainer = document.createElement("li") 
    
    const taskCheck = document.createElement("input")
    taskCheck.setAttribute("type", "checkbox")
    taskCheck.setAttribute("onchange", "finished(this)")
    
    const taskText = document.createElement("label")
    taskText.innerText=inputValue.value

    const deleteButton = document.createElement("button")
    deleteButton.innerText="deleteElement"
    deleteButton.setAttribute("onclick", "deleteElement(this)")

    taskContainer.appendChild(taskCheck)
    taskContainer.appendChild(taskText)
    taskContainer.appendChild(deleteButton)

    inputValue.value = ""

    list.appendChild(taskContainer)
}

function deleteElement(task){

    const parentButton = task.parentElement
    parentButton.remove()
}