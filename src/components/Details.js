import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
	});

	const StyledTableCell = withStyles((theme) => ({
  head: {
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


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
					<Table className={classes.table} size="medium" aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell align="center">Country</StyledTableCell>
								<StyledTableCell align="center">Province</StyledTableCell>
								<StyledTableCell align="center">Confirmed</StyledTableCell>
								<StyledTableCell align="center">Recovered</StyledTableCell>
								<StyledTableCell align="center">Deaths</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{list.map((item) => (
								<StyledTableRow key={item.uid}>
									<StyledTableCell component="th" scope="row" align="center">
										{item.countryRegion}
									</StyledTableCell>
									<StyledTableCell align="center">{item.provinceState}</StyledTableCell>
									<StyledTableCell align="center">{item.confirmed}</StyledTableCell>
									<StyledTableCell align="center">{item.recovered}</StyledTableCell>
									<StyledTableCell align="center">{item.deaths}</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			}
		</div>
		
	);
};

export default Details;