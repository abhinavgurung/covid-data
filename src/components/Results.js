import React from 'react'
import ResultItem from './ResultItem'
import '../styles.css'

const Result = ({
	data
}) => {


	return (
		<>
			<h3>Last Updated: {data.lastUpdate}</h3>
			<div className='container'>
				<ResultItem title='Confirmed' value={data.confirmed.value}/>
				<ResultItem title='Recovered' value={data.recovered.value} />
				<ResultItem title='Deaths' value={data.deaths.value}/>
		</div>
		</>
		
	);
};

export default Result;