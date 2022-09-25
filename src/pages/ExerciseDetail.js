import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarVideos from '../components/SimilarVideos.js';
import { exerciseOptions, fetchData } from '../utilities/fetchData';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);
		};

		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail ExerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarVideos />
		</Box>
	);
};

export default ExerciseDetail;
