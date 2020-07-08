import React from 'react'
import ResultItem from './ResultItem'
import '../styles.css'

const Result = ({
	data, country
}) => {


	return (
		<>
			<h3>Last Updated: {data.lastUpdate.substring(0, 10)}</h3>
			<h3>Results for: {country}</h3>
			<div className='flex-container'>
				<ResultItem className='results' title='Confirmed' value={data.confirmed.value}/>
				<ResultItem className='results' title='Recovered' value={data.recovered.value} />
				<ResultItem className='results' title='Deaths' value={data.deaths.value}/>
		</div>
		</>
		
	);
};

export default Result;