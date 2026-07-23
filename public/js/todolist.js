console.log("todolist.js fonctionne")

// VARIABLES
// globales
const container_todolist = document.querySelector(".container_todolist")
let itemTodolist = []
let userItemTodolist = {}
let idItem = 0
let nameItem = ""
let stateItem = ""
let dateItem = ""
let weekItem = ""

// FUNCTIONS
function manageTodolist(){
    //variables html
    let addItemTodolist = document.createElement("input")
    addItemTodolist.className = "add_item_todolist"
    addItemTodolist.type = "text"
    container_todolist.append(addItemTodolist)

    let buttonAddItemTodolist = document.createElement("div")
    buttonAddItemTodolist.className = "button_add_item_todolist"
    buttonAddItemTodolist.textContent = "Add"
    container_todolist.append(buttonAddItemTodolist)

    let filterItemTodolist = document.createElement("div")
    filterItemTodolist.className = "filter_item_todolist"
    filterItemTodolist.textContent = "Filtre"
    container_todolist.append(filterItemTodolist)
    let filterAllItemTodolist = document.createElement("div")
    filterAllItemTodolist.className = "filter_all_item_todolist"
    filterAllItemTodolist.textContent = "All"
    container_todolist.append(filterAllItemTodolist)
    let filterTodoItemTodolist = document.createElement("div")
    filterTodoItemTodolist.className = "filter_todo_item_todolist"
    filterTodoItemTodolist.textContent = "Todo"
    container_todolist.append(filterTodoItemTodolist)
    let filterDoneItemTodolist = document.createElement("div")
    filterDoneItemTodolist.className = "filter_done_item_todolist"
    filterDoneItemTodolist.textContent = "Done"
    container_todolist.append(filterDoneItemTodolist)

    filterItemTodolist.addEventListener("click", () => {
        if(filterAllItemTodolist.style.display == "inline-block" || filterTodoItemTodolist.style.display == "inline-block" || filterDoneItemTodolist.style.display =="inline-block" ){
            filterAllItemTodolist.style.display = "none"
            filterTodoItemTodolist.style.display = "none"
            filterDoneItemTodolist.style.display = "none"
        }else{
            filterAllItemTodolist.style.display = "inline-block"
            filterTodoItemTodolist.style.display = "inline-block"
            filterDoneItemTodolist.style.display = "inline-block"
        }
    })

    let containerItemsTodolist = document.createElement("div")
    containerItemsTodolist.className = "container_items_todolist"
    container_todolist.append(containerItemsTodolist)

    let countItemsTodolist = document.createElement("div")
    countItemsTodolist.className = "count_items_todolist"
    container_todolist.append(countItemsTodolist)
    // event validation button
    function validateItemTodolist(){
        if(addItemTodolist.value === ""){

        }else{
            userItemTodolist = addItemTodolist.value
            idItem++
            nameItem = userItemTodolist
            stateItem = "todo"
            dateItem = "22/22/2022"
            weekItem = "3"

            userItemTodolist = {id: idItem, name: nameItem, state: stateItem, date: dateItem, week: weekItem}
            itemTodolist.push(userItemTodolist)
            console.log(itemTodolist)

            addItemTodolist.value = ""
            countItemsTodolist.textContent = itemTodolist.length

            showElement()
        }
    }
    // création tableau
    function showElement(){
        containerItemsTodolist.innerHTML = ""
        itemTodolist.forEach(element => {
            let elementTable = document.createElement("div")
            elementTable.className = "element_table"
            elementTable.textContent = element.name
            containerItemsTodolist.append(elementTable)
            let dateElementTable = document.createElement("div")
            dateElementTable.className = "date_element_table"
            dateElementTable.textContent = element.date + element.week
            elementTable.append(dateElementTable)
            let deletElementTable = document.createElement("div")
            deletElementTable.className = "delet_element_table"
            deletElementTable.textContent = "X"
            elementTable.append(deletElementTable)
            let doneElementTable = document.createElement("div")
            doneElementTable.className = "done_element_table"
            doneElementTable.textContent = "V"
            elementTable.append(doneElementTable)

            if (element.state === "done") {
                elementTable.style.color = "#45fd4e"
            }

            deletElementTable.addEventListener("click", () => {
                itemTodolist = itemTodolist.filter((item) => item.id !== element.id)
                showElement()
                countItemsTodolist.textContent = itemTodolist.length
            })
            doneElementTable.addEventListener("click", () => {
                if (element.state === "done") {
                    element.state = "todo"
                }else{
                    element.state = "done"
                }
                showElement()
            })
        })
    }
    // Event User
    buttonAddItemTodolist.addEventListener("click", () =>{
        validateItemTodolist()
    })
    addItemTodolist.addEventListener("keydown",(event) => {
        if(event.key === "Enter"){
            validateItemTodolist()
        }
    })
}

// CALLS CODES
manageTodolist()