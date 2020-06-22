import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
		minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
		marginBottom: 12,
		
  },
});

const cardStyle = {
	backgroundColor: 'red',
}

const ResultItem = ({
	title, value
}) => {
	const classes = useStyles();
  
	return (
	
			<Card className={classes.root} variant="outlined" raised={true}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
					{title}
					<br /> <br />
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