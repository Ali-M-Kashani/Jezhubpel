import { ThemeProvider, createTheme } from '@mui/material';
import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Map from './components/Pages/Map';
import Loader from './components/Pages/loader';
import LoginPage from './components/Pages/LoginPage';

const darkTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#fafafa',
		},
		text: {
			primary: '#fff',
			secondary: 'rgba(255, 255, 255, 0.7)',
			disabled: 'rgba(255, 255, 255, 0.5)',
		},
		action: {
			active: '#fff',
			hover: 'rgba(255, 255, 255, 0.08)',
			selected: 'rgba(255, 255, 255, 0.16)',
			disabled: 'rgba(255, 255, 255, 0.3)',
			disabledBackground: 'rgba(255, 255, 255, 0.12)',
		},
		background: {
			default: '#121212',
			paper: '#121212',
		},
		divider: 'rgba(255, 255, 255, 0.12'
	},
});

const App = () => {


  return (
		<ThemeProvider theme={darkTheme}>
			<Router>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Map />} />
						{/* <Route path="/" element={<Home />} /> */}
						{/* <Route path="login" element={<LoginPage />} /> */}
						{/* <Route path="dashboard" element={}> */}
						{/* <Route path */}

						{/* </Route>       */}
					</Routes>
				</Suspense>
			</Router>
		</ThemeProvider>
  );
};

export default App;
