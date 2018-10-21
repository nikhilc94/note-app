
import moment from 'moment';
import notesReducer from '../../reducers/notes';


const notes = [
    {
        note: 'Buy milk',
        created: '19th Oct 2018, 01:59 PM',
        color: '#db3e00'
    },
    {
        note: 'Go to the ATM.',
        created: '18th Oct 2018, 08:27 PM',
        color: '#008b02'
    },
    {
        note: 'Buy bread',
        created: '17th Oct 2018, 01:54 PM',
        color: '#b80000'
    },
    {
        note: 'Walk the dog.',
        created: '19th Oct 2018, 06:30 PM',
        color: '#008b02'
    },
];


test('Should add a note.', () => {
    const timestamp = moment().format('Do MMM YYYY, hh:mm A');
    const action = {
        type: 'ADD_NOTE',
        note: 'Test note',
        created: timestamp,
        color: '#006b76'
    };
    expect(notesReducer(notes, action)).toEqual([...notes, {
        note: 'Test note',
        created: timestamp,
        color: '#006b76'
    }])
});


test('Should delete a note.', () => {
    const action = {
        type: 'DELETE_NOTE',
        note: 'Buy bread'
    };
    expect(notesReducer(notes, action)).toEqual(notes.filter(obj => obj.note !== action.note));
});