import React, { useState, useEffect}  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SelectCountries from './SelectCountries';

import axios from 'axios';
import Result from './Results';
import 'babel-polyfill';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Main = () => {
	const classes = useStyles();
	const [country, setCountry] = useState('Global');
	const [data, setData] = useState(null);
	let url = 'https://covid19.mathdro.id/api';

	

	useEffect( () => {
		if (country !== 'Global') {
			url = 'https://covid19.mathdro.id/api/countries/'+country
		}
		
		async function fetchData() {
			const result = await axios(url);
			setData(result.data);
		};
		
		fetchData();
	}, [country]);
	
	
	const handleCountryChange = (country) => {
		console.log('main handlecange');
		setCountry(country);
	};

	return (
		<div className="main">
			<SelectCountries handleCountryChange={handleCountryChange}/><br/><br/>
			{
				
				(data && <Result data={data} country={country}/>)
			}
		</div>
			

	);
};

export default Main;