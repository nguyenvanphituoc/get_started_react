import React, { Component } from 'react';

class AddPlayerForm extends Component {

    inputRefs = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addPlayer({
            name: this.inputRefs.current.value
        });

        event.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a Player's name"
                    ref = {this.inputRefs}
                />

                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;