


const notesReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_NOTE':
            return [...state, {
                note: action.note,
                created: action.created,
                color: action.color
            }];

        case 'DELETE_NOTE':
            return state.filter(obj => obj.note !== action.note);

        default:
            return state;

    }
}

export default notesReducer;