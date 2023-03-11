import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../theme';
import { mockDataTeam } from '../data/mockData';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const StatBox = ({ title, subtitle }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID' },
		{ 
			field: 'discord', 
			headerName: 'Username', 
			flex: 1, 
			cellClassName: 'name-column--cell'
		},
		{ 
			field: 'rsn', 
			headerName: 'RSN', 
			flex: 1, 
			cellClassName: 'name-column--cell'
		},
		{ 
			field: 'rank', 
			headerName: 'Clan Rank', 
			flex: 1, 
			renderCell: ({row: { rank }}) => {
				return (
					<Box
						width='60%'
						m='0 auto'
						p='5px'
						display='flex'
						justifyContent='center'
						backgroundColor={
							rank === 'private'
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius='4px'
					>
						{rank === 'admin' && <AdminPanelSettingsOutlinedIcon />}
						{rank === 'mod' && <SecurityOutlinedIcon />}
						{rank === 'user' && <LockOpenOutlinedIcon />}
						<Typography color={colors.gray[100]} sx={{ ml: '5px'}}>
							{rank}
						</Typography>
					</Box>
				)
			}
		}
	]

	return (
		<Box width='100%' m='30px 10px'>
			<Box display='flex' justifyContent='center'>
				<Box>
					<Typography 
						variant='h4' 
						fontWeight='bold' 
						sx={{ color: colors.gray[100] }}
					>
					{title}
					</Typography>
				</Box>
			</Box>
			<Box display='flex' justifyContent='center'>
				<Typography 
					variant='h5' 
					sx={{ color: colors.greenAccent[500] }}
				>
				{subtitle}
				</Typography>
				<Typography 
					variant='h5' 
					fontStyle='italic' 
					sx={{ color: colors.greenAccent[600] }}
				>
				</Typography>
			</Box>

			<Box
				m='40px 0 0 0'
				height='65vh'
				sx={{ 
					'& .MuiDataGrid-root': {
						border: 'none'
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none'
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300]
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[500],
						borderBottom: 'none'
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400]
					},
					'& .MuiDataGrid-footerContainer': {
						borderTop: 'none',
						backgroundColor: colors.blueAccent[500]
					}
				}}
			>
				<DataGrid 
					rows={mockDataTeam}
					columns={columns}
				/>
			</Box>
		</Box>
	)
}

export default StatBox;