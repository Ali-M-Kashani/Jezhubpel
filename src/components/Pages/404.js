import { CircularProgress, Container } from '@mui/material';
import * as React from 'react';
import Page from '../page';

const Loader = () => {

    return (
        <Page title="Loading" >
            <Container>
                <CircularProgress />
            </Container>
        </Page>
    )
}

export default Loader;
