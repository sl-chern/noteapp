import { categoryIconsPathes } from './data.js'

export const renderNotes = (notes, options = {}) => {
  const notesBlock = document.querySelector('.notes')

  const { all } = options
  let filteredNotes

  if(all)
    filteredNotes = notes
  else
    filteredNotes = notes.filter(item => !item.archived)

  let displayNotes = ""
  filteredNotes.forEach(note => {
    displayNotes += generateNote(note)
  })

  notesBlock.innerHTML = displayNotes
}

export const generateNote = (note) => {
  try {
    const dateReg = /\d{1,2}\/\d{1,2}\/\d{4}/g
    const datesInContent = note.content.match(dateReg)
  
    return `
      <div data-id="${note.id}" class="flex flex-row font-oswald justify-between items-center rounded p-2 border-solid border-light-300 border-[1px]">
        <div>
          <img class="text-dark-200 w-6 h-6" src="${categoryIconsPathes[note.category].src}" alt="${categoryIconsPathes[note.category].alt}"/>
        </div>
        <div class="w-40">
          <p class="default-text">${note.name}</p>
        </div>
        <div class="w-40">
          <p class="default-text">${note.created.toLocaleDateString()}</p>
        </div>
        <div class="w-40">
          <p class="default-text">${note.category}</p>
        </div>
        <div class="w-96">
          <p class="default-text line-clamp-1">${note.content}</p>
        </div>
        <div class="w-40">
          <p class="default-text">${datesInContent?.join(', ') || ""}</p>
        </div>
        <div class="flex flex-row gap-2">
          <button type="button" class="edit rounded-full bg-opacity-0 bg-light-300 p-1 overflow-hidden hover:bg-opacity-30 transition-all duration-300">
            <img class="w-6 h-6 edit" src="./Assets/pencil.svg" alt="archive" >
          </button>
          <button type="button" class="archive rounded-full bg-opacity-0 bg-light-300 p-1 overflow-hidden hover:bg-opacity-30 transition-all duration-300">
            <img class="archive w-6 h-6" src="./Assets/archive.svg" alt="archive" >
          </button>
          <button type="button" class="delete rounded-full bg-opacity-0 bg-light-300 p-1 overflow-hidden hover:bg-opacity-30 transition-all duration-300">
            <img class="delete w-6 h-6" src="./Assets/trashcan.svg" alt="trashcan">
          </button>
        </div>
      </div>
    `
  }
  catch {
    return ""
  }
}

export const renderEditForm = (id) => {
  const noteBlock = document.querySelector(`[data-id=${id}]`)
  noteBlock.innerHTML = ``
}

export const renderCreatingForm = () => {
  const creatingBlock = document.querySelector(`.note-creating`)
  creatingBlock.innerHTML = ``

  const form = document.createElement('form')
  form.setAttribute('class', 'creating-note-form flex flex-row gap-4 w-full')
  form.innerHTML = `
    <label class="flex flex-col text-light-300 font-roboto text-lg">
      Name
      <input name="name" type="text" required class="bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto w-[200px]"/>
    </label>
    <label class="flex flex-col text-light-300 font-roboto text-lg">
      Category
      <select name="category" required class="w-[200px] h-12 bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto">
        <option value="" disabled selected>Select category</option>
        ${
          Object.keys(categoryIconsPathes)
            .map(item =>
              `<option value="${item}" class="text-dark-200 font-roboto p-2">${item}</option>`
            )
            .join("")
        }
      </select>
    </label>
    <label class="flex flex-col text-light-300 font-roboto text-lg grow">
      Content
      <textarea name="content" type="text" required class="bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto resize-none h-24"></textarea>
    </label>
    <button type="submit" class="show-creating-form rounded-sm bg-light-300 py-2 px-8 mx-auto h-12 mt-7">
      <p class="font-oswald font-normal text-xl text-dark-200">Create</p>
    </button>
  `
  creatingBlock.appendChild(form)
}

export const removeCreatingForm = () => {
  const creatingBlock = document.querySelector(`.note-creating`)
  creatingBlock.innerHTML = `
    <button class="show-creating-form rounded-sm bg-light-300 p-2 mx-auto font-oswald font-normal text-xl text-dark-200">
      Create Note
    </button>
  `
}