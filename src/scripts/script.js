const addBookBtn = document.querySelector(".addBook")
let count = 0

function addBookPopUp(){


const titleContainerDiv = document.createElement("div")
titleContainerDiv.className = 'titleContainer'

const body = document.querySelector("body")
body.appendChild(titleContainerDiv)

const title = document.createElement("div")
title.className = 'title'
titleContainerDiv.appendChild(title)

const addBookPElement = document.createElement("p")
addBookPElement.textContent = 'Add Book'
title.appendChild(addBookPElement)

const addBookContainer = document.createElement("div")
addBookContainer.className = 'addBookContainer'
titleContainerDiv.appendChild(addBookContainer)   

const fieldsHeader = document.createElement("h4")
fieldsHeader.className = 'fieldsHeader'
fieldsHeader.textContent = 'All Fields Are Required'
addBookContainer.appendChild(fieldsHeader)

const titleInput = document.createElement("input")
titleInput.className = 'addBookContainerInput'
titleInput.setAttribute('type','text')
titleInput.setAttribute('name','title')
titleInput.setAttribute('id','title')
titleInput.setAttribute('placeholder','Title...')
addBookContainer.appendChild(titleInput)

const authorInput = document.createElement("input")
authorInput.className = 'addBookContainerInput'
authorInput.setAttribute('type','text')
authorInput.setAttribute('name','author')
authorInput.setAttribute('id','author')
authorInput.setAttribute('placeholder','Author...')
addBookContainer.appendChild(authorInput)

const pageCountInput = document.createElement("input")
pageCountInput.className = 'addBookContainerInput'
pageCountInput.setAttribute('type','text')
pageCountInput.setAttribute('name','pageCount')
pageCountInput.setAttribute('id','pageCount')
pageCountInput.setAttribute('placeholder','Page Count...')
addBookContainer.appendChild(pageCountInput)

const bottomContainer = document.createElement("div")
bottomContainer.className = 'bottomContainer'
addBookContainer.appendChild(bottomContainer)

const checkBoxContainer = document.createElement("div")
checkBoxContainer.className = 'checkBoxContainer'
bottomContainer.appendChild(checkBoxContainer)

const checkBoxContainerP = document.createElement("p")
checkBoxContainerP.textContent = 'Have you read this book?'
checkBoxContainer.appendChild(checkBoxContainerP)

const checkBoxInput = document.createElement("input")
checkBoxInput.setAttribute('type','checkbox')
checkBoxInput.setAttribute('name','readOrNot')
checkBoxInput.setAttribute('id','readOrNot')
checkBoxContainer.appendChild(checkBoxInput)

const buttonsContainer = document.createElement("div")
buttonsContainer.className = 'buttonsContainer'
bottomContainer.appendChild(buttonsContainer)

const cancelBtn = document.createElement("button")
cancelBtn.className = 'cancel'
cancelBtn.textContent = 'Cancel'
buttonsContainer.appendChild(cancelBtn)

cancelBtn.addEventListener("click",()=> {
    titleContainerDiv.remove()
    count = 0
})

const AddBookButton = document.createElement("button")
AddBookButton.className = 'addBook'
AddBookButton.textContent = 'Add Book'
buttonsContainer.appendChild(AddBookButton)

}


addBookBtn.addEventListener("click",()=>{
    count += 1
    if(count === 1) {
    addBookPopUp()
    }
})




let books = []

function Book(title, author, pageCount, read){
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.read = read
}

function addBookToLibrary(title, author, pageCount, read){
    
}

