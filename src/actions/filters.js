

export const textFilter = text => ({
    type: 'TEXT_FILTER',
    text
});


export const colorFilter = color => ({
    type: 'COLOR_FILTER',
    color
});


export const clearFilter = () => ({
    type: 'CLEAR_FILTER',
});