import { Button, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Page from '../page';

const Home = () => {
	const { height, width } = useWindowDimensions();
	const navigation = useNavigate();

	return (
		<Page title="Loading">
			<Container style={{ backgroundColor: 'black' }}>
				<Stack
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height,
					}}
					spacing={4}
				>
					<Typography
						align="center"
						style={{ color: 'white', fontSize: '20px' }}
					>
						If you know what you are doing here
					</Typography>
					<Button
						variant="contained"
						style={{ maxWidth: '200px', width: '75%' }}
						onClick={() => navigation('login')}
					>
						Press Me
					</Button>
				</Stack>
			</Container>
		</Page>
	);
};

export default Home;
