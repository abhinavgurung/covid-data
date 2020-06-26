import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
        	<Button size="small"variant="outlined">Learn More</Button>
      	</CardActions>
    	</Card>
	
		
	);
};

export default ResultItem;