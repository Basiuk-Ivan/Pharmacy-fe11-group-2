import {Container, Typography, Grid} from '@mui/material';
import {useState} from 'react';
import OrdersBlock from '../components/Cabinet/OrdersBlock';
import PersonalData from '../components/Cabinet/PersonalData';
import SectionsMenu from '../components/Cabinet/SectionsMenu';
import Bread from '../components/Bread';
import ReviewsBlock from '../components/Cabinet/ReviewsBlock';
import {cabineteTitleStyles, sectionStyles} from "../components/Cabinet/style";

const Cabinet = () => {
    const [activeSection, setActiveSection] = useState('personalData');

    const handleSectionClick = section => {
        setActiveSection(section);
    };

    return (
        <Container disableGutters sx={{minHeight: '80vh'}}>
            <Bread/>
            <Typography sx={cabineteTitleStyles}>
                Особистий кабінет
            </Typography>
            <Grid container sx={{gap: '30px', margin:'0 auto'}}>
                <Grid item md={3} sx={sectionStyles}>
                    <SectionsMenu handleSectionClick={handleSectionClick}/>
                </Grid>

                <Grid item md={8} sx={{margin:'0 auto'}}>
                    {activeSection === 'personalData' && <PersonalData/>}
                    {activeSection === 'orders' && <OrdersBlock/>}
                    {activeSection === 'reviews' && <ReviewsBlock/>}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Cabinet;
