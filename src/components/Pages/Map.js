import { Container, Stack } from '@mui/material';
import { useState, useEffect }from 'react';
import { useNavigate } from 'react-router';
import useWindowDimensions from '../../utils/useWindowDimensions';
import Page from '../page';
import mapImage from '../../assets/background.png';
import stickMan from '../../assets/man.png';
import locationIndicator from '../../assets/locationIndicator.png';
import { borderColor } from '@mui/system';

const Map = () => {
	const { height, width } = useWindowDimensions();
	const navigation = useNavigate();
	const [isOutOfBounds, setIsOutOfBounds] = useState(true);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);

	useEffect(() => {
		if (navigator.geolocation) {
			askForGPSPermission();
		} else {
			alert('It\'s 2021 and yet your phone doesn\'t support GPS. Like how is that even possible, even 1100 has GPS in 2021!!');
		}
	}, []);

	const askForGPSPermission = () => {
		// navigator.permissions
		// 	.query({ name: 'geolocation' })
		// 	.then(function (result) {
		// 		if (result.state === 'granted') {
		// 			console.log(result.state);
		// 			//If granted then you can directly call your function here
		// 			trackUser();
		// 		} else if (result.state === 'prompt') {
		// 			console.log(result.state);
		// 		} else if (result.state === 'denied') {
		// 			alert('Either quit the game or enable GPS !!!')
		// 		}
		// 		result.onchange = function () {

		// 			if (result.state === 'granted') {
		// 				console.log(result.state);
		// 				trackUser();
		// 			} else if (result.state === 'prompt') {
		// 				console.log(result.state);
		// 			} else if (result.state === 'denied') {
		// 				alert('Either quit the game or enable GPS !!!');
		// 			}
		// 		};
		// 	});
		// trackUser();
		setIsOutOfBounds(false);
		// 35.71276534150955, 51.392054326737664;
		// 35.709986, 51.392143;
		// 35.710937, 51.396121;
		// 35.70922374941138, 51.390619802901234
		const lat = 35.709224;
		const long = 51.390620;
		const t =
			(width * 1088) / 826 -
			(((lat - 35.707547) / (35.715665 - 35.707547)) * width * 1088) /
				826;
		const l = ((long - 51.389454) / (51.396816 - 51.389454)) * width;
		setTop(t);
		setLeft(l);

		// 		35.715665, 51.389323
		// 35.707547 51.396816
	}

	const trackUser = () => {

		navigator.geolocation.getCurrentPosition(function(position) {
			calculateXandY(position.coords.latitude, position.coords.longitude);

		}, () => {
			alert('Either quit the game or enable GPS !!!')
		});

		navigator.geolocation.watchPosition(function (position) {
			calculateXandY(position.coords.latitude, position.coords.longitude);
		}, () => {
			alert('Either quit the game or enable GPS !!!')
		});
	}

	const calculateXandY = (lat, long) => {
	// 			35.7158, 51.3894;
	// 			35.7158, 51.3967;
	// 			35.7076, 51.3894;
	// 			35.7076, 51.3967;

		console.log(lat, long);

		if (lat >= 35.7076 && lat <= 35.7158 && long <= 51.3967 && lat >= 51.3894) {

			setIsOutOfBounds(false);
			const t = (((lat - 35.7076) / (35.7158 - 35.7076)) * width * 1088) / 826;
			const l = ((long - 51.3894) / (51.3967 - 51.3894)) * width;
			setTop(t);
			setLeft(l);
		} else {

			setIsOutOfBounds(true);
		}
	}

	return (
		<Page title="Map">
			<Stack>
				{isOutOfBounds ? (
					<p>You are not in the game's designated location</p>
				) : (
					<img
						src={locationIndicator}
						style={{
							overflow: 'hidden',
							width: 32,
							height: 32,
							position: 'absolute',
							top: top - 16,
							left: left - 16,
						}}
						alt="Shit's fucked"
					/>
					// <div
					// 	style={{
					// 		position: 'absolute',
					// 		top,
					// 		left,
					// 		width: 12,
					// 		height: 12,
					// 		borderRadius: 6,
					// 		backgroundColor: '#fc8405',
					// 		borderColor: 'white',
					// 		borderWidth: 2,
					// 		borderStyle: 'ridge',
					// 	}}
					// />
				)}
				<img
					src={mapImage}
					style={{
						overflow: 'hidden',
						width,
					}}
					alt="Shit's fucked"
				/>
				<Container>
					<p style={{ direction: 'rtl' }}>راهنما</p>
					<p style={{ direction: 'rtl' }}>۱. آمفی تئاتر روباز</p>
					<p style={{ direction: 'rtl' }}>۲. آبنمای مرکزی</p>
					<p style={{ direction: 'rtl' }}>۳. زمین بازی کودکان</p>
					<p style={{ direction: 'rtl' }}>۴. زمین بازی کودکان</p>
					<p style={{ direction: 'rtl' }}>۵. باغ ژاپنی</p>
					<p style={{ direction: 'rtl' }}>۶. آبنمای سنگی</p>
					<p style={{ direction: 'rtl' }}>۷. کانون پرورش فکری</p>
					<p style={{ direction: 'rtl' }}>۸. سرویس بهداشتی</p>
					<p style={{ direction: 'rtl' }}>۹. زمین اسکیت</p>
					<p style={{ direction: 'rtl' }}>۱۰. زمین فوتبال</p>
					<p style={{ direction: 'rtl' }}>۱۱. لوازم بدن سازی</p>
					<p style={{ direction: 'rtl' }}>۱۲. مجسمه خیام</p>
					<p style={{ direction: 'rtl' }}>۱۳. آبنمای پلکانی</p>
					<p style={{ direction: 'rtl' }}>۱۴. آبنمای پلکانی</p>
					<p style={{ direction: 'rtl' }}>۱۵. مسجد</p>
					<p style={{ direction: 'rtl' }}>۱۶. زمین چمن مصنوعی</p>
					<p style={{ direction: 'rtl' }}>۱۷. باغ لرزان</p>
				</Container>
			</Stack>
		</Page>
	);
};

export default Map;
