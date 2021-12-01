import { forwardRef } from 'react';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', ...other }, ref) =>  {
	return (
		<Box ref={ref} {...other}>
            <title>{title}</title>
			{children}
		</Box>
	);
}

);

export default Page;