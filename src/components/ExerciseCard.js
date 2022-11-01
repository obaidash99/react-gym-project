import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
	return (
		<Link to={`/exercise/${exercise.id}`} className="exercise-card">
			<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
			<Stack direction="row">
				<Button
					className="card-btn"
					sx={{
						ml: '21px',
						color: '#FFF',
						background: '#FFA9A9',
						fontSize: '14px',
						fontWeight: 'bold',
						borderRadius: '20px',
						textTransform: 'capitalize',
					}}
				>
					{exercise.bodyPart}
				</Button>
				<Button
					className="card-btn"
					sx={{
						ml: '21px',
						color: '#FFF',
						background: '#fcc757',
						fontSize: '14px',
						fontWeight: 'bold',
						borderRadius: '20px',
						textTransform: 'capitalize',
					}}
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				ml="21px"
				color="#000"
				fontWeight="bold"
				mt="11px"
				pb="10px"
				textTransform="capitalize"
			>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
