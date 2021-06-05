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
import levi from '../src/img/levi.jpg'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia className={classes.cardMedia} image={levi} title='image title'/>
									<CardContent className={classes.cardContent}>
										<Typography gutterBottom variant='h5'>
											Heading
										</Typography>
										<Typography>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, asperiores, atque aut cumque ea est eveniet impedit incidu.
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small' color='primary'>Action1</Button>
										<Button size='small' color='primary'>Action2</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant='h6' align='center' gutterBottom>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, dolorum harum in, ipsam magnam molestiae nam natus nesciunt.
				</Typography>
				<Typography variant='subtitle1' align='center' color='textSecondary'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</Typography>
			</footer>
		</>
	);
};

export default App;