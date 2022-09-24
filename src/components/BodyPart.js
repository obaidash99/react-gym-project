import React from 'react';
import { Stack, Typography } from '@mui/system';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				BorderBottomLeftRadius: '20px',
				width: '270px',
				height: '280px',
				cursor: 'pointer',
				gap: '47px',
				borderTop: bodyPart === item ? '4px solid #ff2625' : '',
			}}
		>
			<img src={Icon} alt="dumbbell" styles={{ width: '40px', height: '40px' }} />
		</Stack>
	);
};

export default BodyPart;
