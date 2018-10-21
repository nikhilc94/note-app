

const filtersReducer = (state = { text: '', color: '' }, action) => {
    switch (action.type) {

        case 'TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'COLOR_FILTER':
            return {
                ...state,
                color: action.color
            }

        case 'CLEAR_FILTER':
            return {
                text: '',
                color: ''
            }

        default:
            return state;

    }
}


export default filtersReducer;