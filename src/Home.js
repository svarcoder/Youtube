import React from "react";
import {
	makeStyles,
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Button,
	List,
	Typography,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Box,
	Grid,
	Hidden,
	Switch,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import VideoCall from "@material-ui/icons/VideoCall";

import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";

import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";

import AddCircle from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		backgroundColor: theme.palette.background.dark,
	},
	appBar: {
		boxShadow: "none",
		zIndex: theme.zIndex.drawer + 1,
	},
	logo: {
		height: 25,
	},
	drawer: {
		width: 240,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 240,
		borderRight: "none",
	},
	menuIcon: {
		paddingRight: theme.spacing(5),
		paddingLeft: theme.spacing(6),
	},
	icons: {
		paddingRight: theme.spacing(5),
	},
	grow: {
		flexGrow: 1,
	},
	listItemText: {
		fontSize: 14,
	},
	listItem: {
		paddingTop: 4,
		paddingBottom: 4,
	},
	subheader: {
		textTransform: "uppercase",
	},
}));

const videos = [
	{
		id: 1,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 2,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 3,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 4,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 5,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 6,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 7,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
	{
		id: 8,
		title:
			"Srivalli (Video) | Pushpa | Allu Arjun, Rashmika Mandanna | Javed Ali | DSP | Sukumar",
		channel: "T-Series",
		views: "6.5M",
		date: "2 days ago",
		avatar:
			"https://yt3.ggpht.com/DzaZaTX6gdgjjPI_vkNc2dPbI794UroI9fTAunua0fa7lukDj5NDkjfhS5-w2KXuvXS02r92=s68-c-k-c0x00ffffff-no-rj",
		thumb:
			"https://i.ytimg.com/vi/hcMzwMrr1tE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCPLjzJf6KQX7ZQ2cjZXj0uP12g",
	},
];

function Home({ darkMode, setDarkMode }) {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div className={classes.root}>
			<AppBar color='inherit' className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuIcon}
						aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<img
						src={
							theme.palette.type === "dark"
								? "/images/branco.png"
								: "/images/preto.png"
						}
						alt='logo'
						className={classes.logo}
					/>
					<div className={classes.grow} />
					<Switch
						value={darkMode}
						onChange={() => setDarkMode(!darkMode)}
						className={classes.icons}
					/>
					<IconButton className={classes.icons}>
						<VideoCall />
					</IconButton>
					<IconButton className={classes.icons}>
						<Apps />
					</IconButton>
					<IconButton className={classes.icons}>
						<MoreVert />
					</IconButton>
					<Button
						startIcon={<AccountCircle />}
						variant='outlined'
						color='secondary'>
						SIGN IN
					</Button>
				</Toolbar>
			</AppBar>
			<Box display='flex'>
				<Hidden mdDown>
					<Drawer
						className={classes.drawer}
						variant='permanent'
						classes={{
							paper: classes.drawerPaper,
						}}>
						<Toolbar />
						<div className={classes.drawerContainer}>
							<List>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>{<HomeIcon />}</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Home"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>{<Whatshot />}</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Explore"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>{<Subscriptions />}</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Subscriptions"}
									/>
								</ListItem>
							</List>
							<Divider />
							<List>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<VideoLibrary />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Library"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<History />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"History"}
									/>
								</ListItem>
							</List>
							<Divider />
							<Box p={7}>
								<Typography variant='body2'>
									Sign in to like videos, comment and subscribe.
								</Typography>
								<Box mt={2}>
									<Button
										variant='outlined'
										color='secondary'
										startIcon={<AccountCircle />}>
										SIGN IN
									</Button>
								</Box>
							</Box>
							<Divider />
							<List
								component='nav'
								aria-labelledby='nested-list-subheader'
								subheader={
									<ListSubheader
										component='div'
										id='nested-list-subheader'
										className={classes.subheader}>
										BEST OF YOUTUBE
									</ListSubheader>
								}>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Music"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Sport"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Gaming"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Filmes"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Films"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"News"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"Live"}
									/>
								</ListItem>
								<ListItem button classes={{ root: classes.listItem }}>
									<ListItemIcon>
										<AddCircle />
									</ListItemIcon>
									<ListItemText
										classes={{
											primary: classes.listItemText,
										}}
										primary={"360 Videos"}
									/>
								</ListItem>
							</List>
							<Divider />
							<ListItem button classes={{ root: classes.listItem }}>
								<ListItemIcon>
									<AddCircle />
								</ListItemIcon>
								<ListItemText
									classes={{
										primary: classes.listItemText,
									}}
									primary={"Browse Channels"}
								/>
							</ListItem>
							<Divider />
						</div>
					</Drawer>
				</Hidden>

				<Box p={8}>
					<Toolbar />
					<Typography
						variant='h5'
						color='textPrimary'
						style={{ fontWeight: 600 }}>
						Recommended
					</Typography>

					<Grid container spacing={4}>
						{videos.map((item, index) => (
							<Grid item lg={3} md={4} sm={6} xs={12}>
								<Box>
									<img
										style={{ width: "100%" }}
										alt={item.title}
										src={item.thumb}
									/>
									<Box>
										<Typography variant='body2' color='textSecondary'>
											<img
												style={{
													width: "40px",
													height: "40px",
													borderRadius: "25px",
													marginTop: "10px",
												}}
												alt={item.title}
												src={item.avatar}
											/>
										</Typography>

										<Typography
											style={{
												fontWeight: 600,
												marginLeft: "50px",
												marginTop: "-45px",
											}}
											gutterBottom
											variant='body1'
											color='textPrimary'>
											{item.title}
										</Typography>
										<Typography
											style={{ marginLeft: "50px" }}
											display='block'
											variant='body2'
											color='textSecondary'>
											{item.channel}{" "}
										</Typography>
										<Typography
											variant='body2'
											color='textSecondary'
											style={{ marginLeft: "50px" }}>
											{`${item.views} • ${item.date}`}
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</div>
	);
}

export default Home;
