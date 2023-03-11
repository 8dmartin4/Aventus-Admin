import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/header';
import StatBox from '../../components/StatBox';


const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'> 
			<Box 
				display='flex' 
				justifyContent='center' 
				alignItems='center'
			>
				<Header 
					title='Aventus Dashboard' 
				/>
			</Box>
			{/*Grid*/}
			<Box
				display='grid'
				gridTemplateColumns ='repeat(12, 1fr)'
				gridAutoRows='130px'
				gap='20px'
			>
				{/*Col 1*/}
				<Box 
					gridColumn='span 4' 
					gridRow='span 5'
					backgroundColor={colors.primary[400]}
					display='flex'
					justifyContent='center'
				>
					<StatBox
						title='Current Event'
						subtitle='BOTW Callisto'
					/>
				</Box>
				{/*Col 2*/}
				<Box 
					gridColumn='span 4' 
					gridRow='span 5'
					backgroundColor={colors.primary[400]}
					display='flex'
					justifyContent='center'
				>
					<StatBox
						title='Previous Event'
						subtitle='SOTW Agility'
					/>
				</Box>
				{/*Col 3*/}
				<Box 
					gridColumn='span 4'
					gridRow='span 5'
					backgroundColor={colors.primary[400]}
					display='flex'
					justifyContent='center'
				>
					<StatBox
						title='Clan Members'
						subtitle='______'
					/>
				</Box>

				{/**/}
			</Box>
		</Box>
	)
};

export default Dashboard;