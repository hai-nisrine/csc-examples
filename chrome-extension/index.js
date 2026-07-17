
const saveButton = document.querySelector("#input-btn")

let myLeads = []
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")

saveButton.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
})



function renderLeads() {
    let listItems = ""

    for (let i =0; i<myLeads.length; i++) {
        listItems += `<li>
                            <a target='_blank' href='${myLeads[i]}'> 
                                ${myLeads[i]}
                            </a>
                      </li>`
    }
    ulEl.innerHTML = listItems 
}