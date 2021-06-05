import React from 'react';
import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Drawer,
	Button
} from '@material-ui/core';
import {Business} from '@material-ui/icons';
import useStyles from './styles';

const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Business className={classes.icon}/>
					<Typography variant='h6'>
						Business Name
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div className={classes.container}>
					<Container maxWidth='sm'>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							Business Name
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aperiam
							   aut, blanditiis consequatur culpa, cumque cupiditate earum facilis illo itaque laudantium
							   molestiae neque nihil nobis quia quidem reprehenderit sequi.
						</Typography>
						<div className={classes.button}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Button variant='contained' color='primary'>
										Call to Action
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Learn More
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					<Grid container spacing={4}>
						<Grid>

						</Grid>
					</Grid>
				</Container>
			</main>
		</>
	);
};

export default App;