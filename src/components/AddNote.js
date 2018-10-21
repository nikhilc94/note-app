

import React from 'react';
import moment from "moment";
import { connect } from 'react-redux';
import { GithubPicker } from 'react-color';

import { addNote } from '../actions/notes';


class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            inputText: '',
            inputColor: ''
        };
        this.colorList = ['#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf'];
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(e) {
        this.setState({
            error: '',
            inputText: e.target.value
        });
    }

    handleColorChange(color) {
        this.setState({
            inputColor: color.hex
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.inputText) {
            return this.setState({
                error: 'Enter a valid note!'
            });
        }
        let noteExists = false;
        for (let obj of this.props.notes) {
            if (obj.note === this.state.inputText) {
                noteExists = true;
            }
        }
        if (noteExists) {
            this.setState({
                error: 'The note already exists!'
            });
        }
        else {
            this.props.addNote(this.state.inputText, moment().format('Do MMM YYYY, hh:mm A'), this.state.inputColor);
            this.setState({
                inputText: '',
                inputColor: '',
            });
        }
    }

    render() {
        return (
            <div className="section1">
                <div className="container">
                    <h2>Add a note</h2>
                    {this.state.error && <p className="error">{this.state.error}</p>}

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.inputText} onChange={this.handleTextChange} />
                        <button>Add note</button>
                    </form>

                    <GithubPicker
                        color={this.state.inputColor}
                        triangle='hide'
                        width='188px'
                        onChangeComplete={this.handleColorChange}
                        colors={this.colorList}
                    />
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    notes: state.notes
});

const mapDispatchToProps = dispatch => ({
    addNote: (note, created, color) => dispatch(addNote(note, created, color))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddNote);