import { renderNotes, renderEditForm, renderCreatingForm, removeCreatingForm } from "./rendering.js"
import { updateNotes } from "./processing.js";
import { initialNotes } from "./data.js"

const notesBlock = document.querySelector('.notes')
const noteCreatingBlock = document.querySelector('.note-creating')
let notes = initialNotes

window.addEventListener("load", () => renderNotes(notes))

notesBlock.addEventListener('click', e => {
  const id = e.target.parentNode.parentNode.dataset.id || e.target.parentNode.parentNode.parentNode.dataset.id

  if(e.target.classList.contains("edit"))
    renderEditForm(id, notes)
    
  if(e.target.classList.contains("archive")) {
    const editedNotes = updateNotes(id, notes, { archived: true })
    notes = editedNotes
    renderNotes(notes)
  }

  if(e.target.classList.contains("delete")) {
    notes = notes.filter(item => item.id !== id)
    renderNotes(notes)
  }
})

notesBlock.addEventListener('submit', e => {
  e.preventDefault()
  const id = e.target.parentNode.dataset.id
  const data = new FormData(e.target)

  const editedNotes = updateNotes(id, notes, { 
    name: data.get('name'),
    content: data.get('content'),
    category: data.get('category')
  })
  notes = editedNotes
  renderNotes(notes)
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
  renderNotes(notes)
  removeCreatingForm()
})