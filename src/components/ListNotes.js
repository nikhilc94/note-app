
import React from 'react';
import { connect } from 'react-redux';

import { deleteNote } from '../actions/notes';
import filterFunction from '../selectors/filterFunction';



const ListNotes = ({ notes, allNotes, deleteNote }) => (
    <div className="container last">

        <p className="summary">{`Viewing ${notes.length} of ${allNotes} note(s).`}</p>

        <div className="list-header">
            <h3>Note</h3>
            <h3>Color code</h3>
            <h3>Created</h3>
            <h3></h3>
        </div>

        {
            notes.map(obj =>
                <div className="list-row" key={obj.note}>

                    <p className="list-item list-item-left">{obj.note}</p>

                    <div className="list-item">
                        <div className="list-item-color" style={{ backgroundColor: obj.color, width: '25px', height: '25px' }}></div>
                    </div>

                    <p className="list-item">{obj.created}</p>

                    <div className="list-item">
                        {/* <i className="material-icons">edit</i> */}
                        <i className="material-icons" onClick={() => deleteNote(obj.note)}>delete</i>
                    </div>

                </div>
            )
        }
    </div>
);


const mapStateToProps = state => ({
    allNotes: state.notes.length,
    notes: filterFunction(state.notes, state.filters)
});


const mapDispatchToProps = dispatch => ({
    deleteNote: note => dispatch(deleteNote(note))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListNotes);