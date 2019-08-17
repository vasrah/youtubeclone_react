import React from 'react';
import ReactDOM from 'react-dom';

import { Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';

// import youtube from './api/youtube';

class App extends React.Component {
    render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12} >
                            <SearchBar/>
                        </Grid>
                        <Grid item xs={8} >
                            <VideoDetail/>
                        </Grid>
                        <Grid item xs={4} >
                            { /* VIDEO */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;