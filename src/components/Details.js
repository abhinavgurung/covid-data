import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper } from '@material-ui/core';

	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
		head: {
			backGroundColor: '#ffab00',
		}
	});


let detailUrl = 'https://covid19.mathdro.id/api/countries/';

const Details = ({ country}) => {
	const classes = useStyles();
	const [list, setList] = useState([]);

	useEffect(() => {
		const fetchProvince = async () => {
			const result = await axios.get(detailUrl + country+'/confirmed');
			setList(result.data);
		};
		fetchProvince();
	}, [country]);

	
	return (
		<div>
			{country !== 'Global' &&
				<TableContainer component={Paper}>
					<Table className={classes.table} size="medium" aria-label="a dense table">
						<TableHead className={classes.head}>
							<TableRow>
								<TableCell align="center">Country</TableCell>
								<TableCell align="center">Province</TableCell>
								<TableCell align="center">Confirmed</TableCell>
								<TableCell align="center">Recovered</TableCell>
								<TableCell align="center">Deaths</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{list.map((item) => (
								<TableRow key={item.uid}>
									<TableCell component="th" scope="row" align="center">
										{item.countryRegion}
									</TableCell>
									<TableCell align="center">{item.provinceState}</TableCell>
									<TableCell align="center">{item.confirmed}</TableCell>
									<TableCell align="center">{item.recovered}</TableCell>
									<TableCell align="center">{item.deaths}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			}
		</div>
		
	);
};

export default Details;