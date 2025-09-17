const addBookBtn = document.querySelector(".addBook")
const body = document.querySelector("body")
let count = 0


let books = []

function Book(title, author, pageCount, read, uuid){
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.read = read
    this.uuid = uuid
}

function connection(){
    for(let i = 0; i < books.length ;i++){
        console.log(books[i])
    }
}



function addBookPopUp(){


const mainCardPopUpContainer = document.querySelector(".mainCardPopUpContainer")


const titleContainerDiv = document.createElement("div")
titleContainerDiv.className = 'titleContainer'
mainCardPopUpContainer.appendChild(titleContainerDiv)

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
checkBoxInput.className = 'checkBoxInputVar'
checkBoxInput.setAttribute('type','checkbox')
checkBoxInput.setAttribute('name','readOrNot')
checkBoxInput.setAttribute('id','readOrNot')
checkBoxContainer.appendChild(checkBoxInput)

const checkBoxResult = document.querySelector(".checkBoxInputVar").value


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

AddBookButton.addEventListener("click", ()=>{
    function addBookToLibrary(){
    let inputedBookTitle = titleInput.value
    let arrTitle = titleInput.value
    let inputedAuthor = authorInput.value
    let inputedPageCount = pageCountInput.value
    let uuid = self.crypto.randomUUID()

    arrTitle = new Book(inputedBookTitle,inputedAuthor,inputedPageCount,checkBoxResult,uuid)
    books.push(arrTitle)
    for(let i = 0; i < books.length; i++){
        console.log(books[i].title)
    }

    function arrayToCard(){
    const bookDisplay = document.querySelector(".bookDisplay")

    const card = document.createElement("div")
    card.className = 'card'
    bookDisplay.appendChild(card)

    const cardTitle = document.createElement("div")
    cardTitle.className = 'cardTitle'
    card.appendChild(cardTitle)

    const defaultTitle = document.createElement("p")
    defaultTitle.className = 'defaultTitle'
    defaultTitle.textContent = 'Title:'
    cardTitle.appendChild(defaultTitle)

    const defaultTitleInput = document.createElement("p")
    for(let i = 0; i < books.length; i++){
        defaultTitleInput.textContent = books[i].title
    } 
    cardTitle.appendChild(defaultTitleInput)

    const cardAuthor = document.createElement("div")
    cardAuthor.className = 'cardAuthor'
    card.appendChild(cardAuthor)

    const defaultAuthor = document.createElement("p")
    defaultAuthor.className ='defaultAuthor'
    defaultAuthor.textContent = 'Author:'
    cardAuthor.appendChild(defaultAuthor)

    const defaultAuthorInput = document.createElement("p")
    defaultAuthorInput.className = 'defaultAuthorInput'
    for(let i = 0; i < books.length; i++){
        defaultAuthorInput.textContent = books[i].author
    } 
    cardAuthor.appendChild(defaultAuthorInput)

    const cardPageCount = document.createElement("div")
    cardPageCount.className = 'cardPageCount'
    card.appendChild(cardPageCount)

    const defaultPageCount = document.createElement("p")
    defaultPageCount.textContent = 'Page Count:'
    defaultPageCount.className = 'defaultPageCount'
    cardPageCount.appendChild(defaultPageCount)

    const defaultPageCountInput = document.createElement("p")
    cardPageCount.appendChild(defaultPageCountInput)
    for(let i = 0; i < books.length; i++){
        defaultPageCountInput.textContent = books[i].pageCount
    } 


    const cardRead = document.createElement("div")
    cardRead.className = 'cardPageCount'
    card.appendChild(cardRead)

    const defaultReadCount = document.createElement("p")
    defaultReadCount.className= 'defaultReadCount'
    defaultReadCount.textContent = 'Read:'
    cardRead.appendChild(defaultReadCount)

    const deletBtn = document.createElement("button")
    deletBtn.textContent = 'Delete'
    card.appendChild(deletBtn)

    deletBtn.addEventListener("click",()=>{
        for(let i = 0; i < books.length; i++){
            books.splice([i],1)
    }
    console.log(books)
    card.remove()
    })


}
    arrayToCard()
    return arrTitle
}

addBookToLibrary()
titleContainerDiv.remove()
count = 0
})

}

addBookBtn.addEventListener("click",()=>{
    count += 1
    if(count === 1) {
    addBookPopUp()
    }
})







