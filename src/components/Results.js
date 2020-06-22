import React from 'react'
import ResultItem from './ResultItem'
import '../styles.css'

const Result = ({
	data
}) => {


	return (
		<div className='container'>
			<ResultItem title='Confirmed' value={data.confirmed.value}/>
			<ResultItem title='Recovered' value={data.recovered.value} />
			<ResultItem title='Deaths' value={data.deaths.value}/>
		</div>
	);
};

export default Result;