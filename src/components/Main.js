import React, { useState, useEffect}  from 'react'
import SelectCountries from './SelectCountries';
import Details from './Details';
import axios from 'axios';
import Result from './Results';
import 'babel-polyfill';



const Main = () => {

	const [country, setCountry] = useState('Canada');
	const [data, setData] = useState(null);

	const globalUrl = 'https://covid19.mathdro.id/api/';
	const url = 'https://covid19.mathdro.id/api/countries/' + country;
	useEffect(() => {
		
		async function fetchData() {
			let result = null;
			if (country === 'Global') {
				result = await axios(globalUrl);
			} else {
				result = await axios(url);
			}
			setData(result.data);
		};
		
		fetchData();
	}, [country]);
	
	
	const handleCountryChange = (country) => {
		{ country ? setCountry(country) : setCountry('Global') }
	};

	return (
		<div className="main">
			<SelectCountries handleCountryChange={handleCountryChange}/><br/><br/>
			{ (data && <Result data={data} country={country}/>) }
			<Details country={country}/>
		</div>
	);
};

export default Main;