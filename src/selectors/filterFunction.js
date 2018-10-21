

export default (notes, {text, color}) => {
    return notes.filter(obj => {
        const textFilter = text ? obj.note.toLowerCase().includes(text.toLowerCase()) : true;
        const colorFilter = color ? obj.color === color : true;
        return textFilter && colorFilter;
    });
}