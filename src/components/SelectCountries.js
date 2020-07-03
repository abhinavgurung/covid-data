import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import axios from 'axios';

const inputStyle = {
	display: "flex",
	justifyContent: "left",
	alignItems: "center"
};

const SelectCountries = ({ handleCountryChange}) => {

	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchCountires = async () => {
			setCountries(await getCountries());
		};

		fetchCountires();
	
	}, []);

	const getCountries = async () => {
		
		const result = await axios.get('https://covid19.mathdro.id/api/countries');
		const array = result.data.countries;
		return array.map((element) => element.name);
	};
	return (
		<FormControl style={inputStyle}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
	);
};

export default SelectCountries;