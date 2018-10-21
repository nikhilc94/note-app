
import { textFilter, colorFilter, clearFilter } from '../../actions/filters';


test('Should setup textFilter action creator.', () => {
    expect(textFilter('test text')).toEqual({
        type: 'TEXT_FILTER',
        text: 'test text'
    });
});

test('Should setup colorFilter action creator.', () => {
    expect(colorFilter('#eacb31')).toEqual({
        type: 'COLOR_FILTER',
        color: '#eacb31'
    });
});

test('Should setup clearFilter action creator.', () => {
    expect(clearFilter()).toEqual({
        type: 'CLEAR_FILTER'
    });
});