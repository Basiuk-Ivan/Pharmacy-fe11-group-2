import {Box, Grid, Stack, Typography} from "@mui/material";
const ProductData = ({productItem}) => (

    <Grid container sx={{ mb: 1, border: '1px solid green', p: 1 }}>
        <Grid item xs={12} md={2}>
            <Box component="img" src={productItem.img[0]} sx={{ width: '120px', maxWidth:"100%" }} />
        </Grid>
        <Grid item xs={12} md={10}>
            <Stack direction="column" spacing={1} sx={{ mb: 1, p: 1 }}>
                <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                    {productItem.name}
                </Typography>
                <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                    Кількість:  {productItem.quantity} од.
                </Typography>
                <Typography gutterBottom variant="body1" sx={{ fontWeight: 500 }}>
                    Ціна за од.: {productItem.price} грн.
                </Typography>
            </Stack>
        </Grid>
    </Grid>

)

export default ProductData;