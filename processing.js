export const archiveNote = (id, notes) => {
  const itemIndex = notes.findIndex(item => item.id === id)
  let editedNotes = notes
  editedNotes[itemIndex].archived = !editedNotes[itemIndex].archived
  return editedNotes
}