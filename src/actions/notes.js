

export const addNote = (note, created, color) => ({
    type: 'ADD_NOTE',
    note,
    created,
    color
});


export const deleteNote = note => ({
    type: 'DELETE_NOTE',
    note
});