import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarVideos from '../components/SimilarVideos.js';
import { exerciseOptions, fetchData, youtubeOptions } from '../utilities/fetchData';

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const [exerciseVideos, setExerciseVideos] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

			const exerciseDetailData = await fetchData(
				`${exerciseDbUrl}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setExerciseDetail(exerciseDetailData);

			const exerciseVideosData = await fetchData(
				`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,
				youtubeOptions
			);
			setExerciseVideos(exerciseVideosData);
		};

		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
			<SimilarVideos />
		</Box>
	);
};

export default ExerciseDetail;
