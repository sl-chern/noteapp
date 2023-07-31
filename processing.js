export const updateNote = (id, notes, data) => {
  const itemIndex = notes.findIndex(item => item.id === id)
  let editedNotes = notes

  for(const key in data) {
    editedNotes[itemIndex][key] = data[key]
  }

  return editedNotes
}