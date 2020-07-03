import React from 'react'
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
		minWidth: 175,
  },
  title: {
		fontSize: 34,
		textDecoration: 'underline',
  },
  pos: {
		marginBottom: 12,
	},
	content: {
			backgroundColor: '#666699',
	}
});


const ResultItem = ({
	title, value
}) => {
	const classes = useStyles();
  
	return (
			<Card className={classes.root} variant="outlined" raised={true}>
			<CardContent className={classes.content}>
        <Typography className={classes.title} color="secondary" gutterBottom>
					{title}
					<br /> 
				</Typography>
				{value}
      </CardContent>
      	<CardActions>
        	{/* <Button size="small"variant="outlined">Learn More</Button> */}
      	</CardActions>
    	</Card>
	);
};

export default ResultItem;