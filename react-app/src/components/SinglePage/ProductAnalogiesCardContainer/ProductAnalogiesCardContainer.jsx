import {Box, Grid, Typography,Tabs, Tab} from "@mui/material";
import ProductCard from "../ProductCard/index.js";
import React from "react";




const ProductAnalogiesCardContainer = ({goods}) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <Box>
        <Typography variant="h4" component="h4" gutterBottom sx={{}}>
            Аналоги
        </Typography>


        <Grid container sx={{}}>
            <Grid item lg={12}>
                <Box sx={{ maxWidth: '1200px', bgcolor: 'background.paper'}}>
                    <Tabs
                        // value={value}
                        // onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label={<ProductCard productItem={goods}/>} sx={{flexGrow:'1'}} />
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                        <Tab label={<ProductCard productItem={goods}/>}  sx={{flexGrow:'1'}}/>
                    </Tabs>
                </Box>



                {/*<Grid container  spacing={4} sx={{}}>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item lg={3}>*/}
                {/*        <ProductCard productItem={goods}/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}


            </Grid>
        </Grid>
    </Box>
    )
}

export default ProductAnalogiesCardContainer;