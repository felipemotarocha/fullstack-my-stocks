import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { default as NewsTabPanel } from '../news-tab-panel/news-tab-panel.container';

function a11yProps(index: any) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderRadius: '10px',
		width: '100%',
		backgroundColor: theme.palette.primary.main,
	},
}));

interface NewsTabProps {
	stocks: string[];
}

const NewsTab: React.FunctionComponent<NewsTabProps> = ({ stocks }) => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='scrollable'
					scrollButtons='auto'
					aria-label='scrollable auto tabs example'
				>
					{stocks.map((stock, index) => (
						<Tab label={stock} {...a11yProps({ index })} />
					))}
				</Tabs>
			</AppBar>
			{stocks.map((stock, index) => (
				<NewsTabPanel value={value} index={index} stock={stock}>
					{stock}
				</NewsTabPanel>
			))}
		</div>
	);
};

export default NewsTab;
