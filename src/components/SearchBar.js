import React from 'react';

import { Paper, textField, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchterm: '',
    }

    handleChange = (event) => this.setState({ searchterm: event.target.value });

    handleSubmit = (e) => {
        const { searchterm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchterm);

        e.preventDefault();
        
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search ..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;