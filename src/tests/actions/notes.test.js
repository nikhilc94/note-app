
import moment from 'moment';
import { addNote, deleteNote } from '../../actions/notes';


test('Should setup addNote action creator.', () => {
    const timestamp = moment().format('Do MMM YYYY, hh:mm A');
    expect(addNote('test note', timestamp, '#ffffff')).toEqual({
        type: 'ADD_NOTE',
        note: 'test note',
        created: timestamp,
        color: '#ffffff'
    });
});


test('Should setup deleteNote action creator.', () => {
    expect(deleteNote('test note')).toEqual({
        type: 'DELETE_NOTE',
        note: 'test note'
    });
});