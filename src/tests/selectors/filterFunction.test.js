
import filterFunction from '../../selectors/filterFunction';


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


test('Should filter notes based on text.', () => {
    expect(filterFunction(notes, { text: 'buy' })).toEqual([
        notes[0], notes[2]
    ]);
});


test('Should filter notes based on color.', () => {
    expect(filterFunction(notes, { color: '#008b02' })).toEqual([
        notes[1], notes[3]
    ]);
});