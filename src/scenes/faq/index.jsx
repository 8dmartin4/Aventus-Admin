import { 
	Box, 
	useTheme, 
	Typography,
	Accordion, 
	AccordionDetails, 
	AccordionSummary } from '@mui/material';
import Header from '../../components/header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m='20px'>
			<Header title='FAQ' subtitle='Frequently Asked Questions Page'/>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={ colors.greenAccent[500]} variant='h5'>
					An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Text Here
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
} 

export default FAQ;