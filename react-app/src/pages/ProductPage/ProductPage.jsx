import { useState, useEffect } from "react";
import {Container, Typography, Box, Grid, List, ListItemText, ListItemButton} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCardMainBlock from "../../components/SinglePage/ProductCardMainBlock";
import ProductCardInstruction from "../../components/SinglePage/ProductCardInstruction";
import ProductAnalogiesCardContainer from "../../components/SinglePage/ProductAnalogiesCardContainer";
import ProductCardReviews from "../../components/SinglePage/ProductCardReviews";
import { useParams} from 'react-router-dom';


const ProductPage = () => {

    const { id } = useParams();
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch(`./products.json`)
            .then(res => {
                console.log(res)
                return res.json()})
            .then(data => setGoods(data));
    }, [id]);


    const [valueTabs, setValueTabs] = useState('1');

    const handleChangeTab = (event, newValue) => {
        setValueTabs(newValue);
    };

    return (

        <Container sx={{width: '1200px'}}>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <List sx={{display: 'flex'}}>
                        <ListItemButton sx={{flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0}}>
                            <HomeOutlinedIcon sx={{paddingRight: '12px', color: "#2FD3AE"}}/>
                            <ListItemText primaryTypographyProps={{
                                style: {
                                    fontSize: '14px',
                                    paddingRight: '12px',
                                    color: "#2FD3AE"
                                }
                            }} primary="Головна/ "/>
                        </ListItemButton>
                        <ListItemButton sx={{flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0}}>
                            <ListItemText primaryTypographyProps={{
                                style: {
                                    fontSize: '14px',
                                    paddingRight: '12px',
                                    color: "#2FD3AE"
                                }
                            }} primary={`${goods.mainCategory} /`}/>
                        </ListItemButton>
                        <ListItemButton sx={{flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0}}>
                            <ListItemText sx={{paddingRight: 0}}
                                          primaryTypographyProps={{style: {fontSize: '14px', paddingRight: '12px'}}}
                                          primary={`${goods.subCategory}`}/>
                        </ListItemButton>
                    </List>
                </Grid>

                <Grid item lg={12}>
                    <Typography variant="h4" sx={{fontSize: '36px', fontWeight: 700, color: '#394045'}} gutterBottom>
                        {goods.name}
                    </Typography>
                </Grid>

                <Grid item lg={12}>
                    <TabContext value={valueTabs} >
                        <Box>
                            <TabList textColor="primary" indicatorColor="primary" onChange={handleChangeTab}
                                     aria-label="nav tabs example" sx={{width: '100%', backgroundColor:'#F7FAFB'}}>
                                <Tab sx={{flexGrow: 1}} label="Все про товар" value="1"/>
                                <Tab sx={{flexGrow: 1}} label="Інструкція" value="2"/>
                                <Tab sx={{flexGrow: 1}} label="Аналоги" value="3"/>
                                <Tab sx={{flexGrow: 1}} label="Відгуки" value="4"/>
                            </TabList>
                        </Box>

                        <TabPanel value="1"  >
                            <ProductCardMainBlock goods={goods}/>
                            <ProductCardInstruction goods={goods}/>
                            <ProductAnalogiesCardContainer goods={goods}/>
                            <ProductCardReviews goods={goods}/>
                        </TabPanel>

                        <TabPanel value="2">
                            <ProductCardMainBlock goods={goods}/>
                            <ProductCardInstruction goods={goods}/>
                        </TabPanel>

                        <TabPanel value="3">
                            <ProductCardMainBlock goods={goods}/>
                            <ProductAnalogiesCardContainer goods={goods}/>
                        </TabPanel>

                        <TabPanel value="4">
                            <ProductCardMainBlock goods={goods}/>
                            <ProductCardReviews goods={goods}/>
                        </TabPanel>

                    </TabContext>
                </Grid>


            </Grid>
        </Container>


    );
};

export default ProductPage;