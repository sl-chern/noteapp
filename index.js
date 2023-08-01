import { renderNotes, renderEditForm, renderCreatingForm, removeCreatingForm, renderStats } from "./rendering.js"
import { updateNote } from "./processing.js";
import { initialNotes } from "./data.js"

const notesBlock = document.querySelector('.notes')
const noteCreatingBlock = document.querySelector('.note-creating')
const showAllCheckBox = document.querySelector('.show-all')
let notes = [...initialNotes]
let showAll = false

window.addEventListener("load", () => {
  renderNotes(notes)
  renderStats(notes)
})

notesBlock.addEventListener('click', e => {
  const id = e.target.parentNode.parentNode.dataset.id || e.target.parentNode.parentNode.parentNode.dataset.id

  if(e.target.classList.contains("edit")) {
    renderEditForm(id, notes)
    renderStats(notes)
  }
    
  if(e.target.classList.contains("archive")) {
    const editedNotes = updateNote(id, notes, { archived: true })
    notes = editedNotes
    renderNotes(notes, { all: showAll })
    renderStats(notes)
  }

  if(e.target.classList.contains("unarchive")) {
    console.log('f')
    const editedNotes = updateNote(id, notes, { archived: false })
    notes = editedNotes
    renderNotes(notes, { all: showAll })
    renderStats(notes)
  }

  if(e.target.classList.contains("delete")) {
    notes = notes.filter(item => item.id !== id)
    renderNotes(notes, { all: showAll })
    renderStats(notes)
  }
})

notesBlock.addEventListener('submit', e => {
  e.preventDefault()
  const id = e.target.parentNode.dataset.id
  const data = new FormData(e.target)

  const editedNotes = updateNote(id, notes, { 
    name: data.get('name'),
    content: data.get('content'),
    category: data.get('category')
  })
  notes = editedNotes
  renderNotes(notes, { all: showAll })
})

noteCreatingBlock.addEventListener('click', e => {
  if(e.target.classList.contains('show-creating-form')) {
    renderCreatingForm()
  }
})

noteCreatingBlock.addEventListener('submit', e => {
  e.preventDefault()
  const data = new FormData(e.target)
  notes.push({
    id: crypto.randomUUID(),
    created: new Date(),
    name: data.get('name'),
    category: data.get('category'),
    content: data.get('content'),
    archived: false
  })
  renderNotes(notes, { all: showAll })
  renderStats(notes)
  removeCreatingForm()
})

showAllCheckBox.addEventListener('change', (e) => {
  if(e.target.checked)
    showAll = true
  else
    showAll = false
  renderNotes(notes, { all: showAll })
})