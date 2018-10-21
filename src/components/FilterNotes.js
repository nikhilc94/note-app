
import React from 'react';
import { connect } from 'react-redux';
import { GithubPicker } from 'react-color';

import { textFilter, colorFilter, clearFilter } from '../actions/filters';



class FilterNotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterColor: ''
        };
        this.colorList = ['#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf'];
        this.handleClear = this.handleClear.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleClear() {
        this.setState({
            filterText: '',
            filterColor: ''
        });
        this.props.clearFilter();
    }

    handleTextChange(e) {
        this.setState({
            filterText: e.target.value
        });
        this.props.textFilter(e.target.value);
    }

    handleColorChange(color) {
        this.setState({
            filterColor: color.hex
        });
        this.props.colorFilter(this.state.filterColor);
    }

    render() {
        return (
            <div className="section2">
                <div className="container">
                
                    <h2>Search notes</h2>

                    <input type="text" value={this.state.filterText} onChange={this.handleTextChange} />
                    <button onClick={this.handleClear}>Clear Filters</button>

                    <GithubPicker
                        color={this.state.filterColor}
                        triangle='hide'
                        width='188px'
                        onChangeComplete={this.handleColorChange}
                        colors={this.colorList}
                    />

                </div>
            </div >
        )
    }

}

const mapDispatchToProps = dispatch => ({
    textFilter: (text) => dispatch(textFilter(text)),
    colorFilter: (color) => dispatch(colorFilter(color)),
    clearFilter: () => dispatch(clearFilter())
})

export default connect(null, mapDispatchToProps)(FilterNotes);