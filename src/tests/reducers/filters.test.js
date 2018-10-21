
import filtersReducer from '../../reducers/filters';


test('Should setup default filter values.', () => {
    const action = { 
        type: '@@INIT' 
    };
    expect(filtersReducer(undefined, action)).toEqual({ 
        text: '',
        color: ''
    });
});


test('Should set text filter.', () => {
    const action = {
        type: 'TEXT_FILTER',
        text: 'Test filter text'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toEqual(action.text);
});


test('Should set color filter.', () => {
    const action = {
        type: 'COLOR_FILTER',
        color: '#db3e00'
    }
    const state = filtersReducer(undefined, action)
    expect(state.color).toEqual(action.color);
});


test('Should clear all filters.', () => {
    const action = {
        type: 'CLEAR_FILTER'
    }
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        text: '',
        color: ''
    });
});

