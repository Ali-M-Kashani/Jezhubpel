import React, { useState } from 'react';
import { Container, TextField, Stack, Button } from '@mui/material';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Page from '../page';
import { alpha, styled } from '@mui/material/styles';

const group2 = ['erfan', 'tannaz', 'negin', 'nilufar', 'maryam'];
const group3 = ['samin', 'elika', 'mahmood', 'mahmoud', 'ali'];
const group4 = ['soroush', 'soroosh', 'surush', 'mahtab', 'fateme', 'alireza'];



const LoginPage = () => {

	const { height, width } = useWindowDimensions();
	const [nextButtonVisible, setNextButtonVisible] = useState(false);
	const [name, setName] = useState('');
	const [buttonTitle, setTitle] = useState('I think that\'s my name');

	const checkName = () => {

		const q = name.toLowerCase();

		if (q === 'mahdi') {
			localStorage.setItem('name', name);
			// login mahdi
		} else if (group2.includes(q)) {
			localStorage.setItem('name', name);

		} else if (group3.includes(q)) {
			localStorage.setItem('name', name);

		} else if (group4.includes(q)) {
			localStorage.setItem('name', name);

		} else {
			setTitle('Either you can\'t spell your name or you are not invited :) \n TRY AGAIN');
			setTimeout(() => {
				setTitle("I think that's my name");
			}, 4000);
		}

	}

    return (
		<Page title="Loading">
			<Container style={{ backgroundColor: 'black', height }}>
				<Stack
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						height,
					}}
					spacing={4}
				>
					<TextField
						label="What's your name?"
						variant="outlined"
						color="primary"
						onChange={e => {
							if (e.target.value) {
								setNextButtonVisible(true);
							} else {
								setNextButtonVisible(false);
							}
							setName(e.target.value);
						}}
					/>
					{nextButtonVisible && (
						<Button
							variant="text"
							style={{ maxWidth: '200px', width: '75%' }}
							onClick={() => checkName()}
						>
							{buttonTitle}
						</Button>
					)}
				</Stack>
			</Container>
		</Page>
	);
}

export default LoginPage
