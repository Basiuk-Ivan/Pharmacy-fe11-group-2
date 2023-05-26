import {useState} from "react"
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    Box,
    Rating,
    Stack,
} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import s from './ProductCard.module.scss'

const ProductCard = ({productItem}) => {

    const [value, setValue] = useState(5);

    return (
        <Card sx={{width: '278px', position: "relative"}}>
            <CardMedia
                sx={{height: 160}}
                image={productItem?.img[0]}
                title="productImage"
            />
            <CardContent sx={{display:'flex', flexDirection:'column'}}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mt: '22px'}}>
                    <Typography variant="p" gutterBottom sx={{fontSize: "12px", fontWeight: 700, color: '#2FD3AE'}}>
                        {productItem.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                    </Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        sx={{fontSize: "18px"}}
                    />
                </Stack>
                <Typography className={s.productName} gutterBottom variant="h5" component="p"
                            sx={{mt: '5px', mb: '20px', fontSize: "16px", fontWeight: 500, color: '#525A68'}}>
                    {productItem.name}
                </Typography>

                <Box>
                    <Stack direction="column">
                        <Stack direction="row" alignItems="center">
                            <span className={s.bullet}></span>
                            <span className={s.brandTitle}>Бренд:</span>
                            <span className={s.brandValue}>{productItem.characteristics.brand}</span>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <span className={s.bullet}></span>
                            <span className={s.brandTitle}>Кількість в упаковці:</span>
                            <span className={s.brandValue}>{productItem.quantity}</span>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <span className={s.bullet}></span>
                            <span className={s.brandTitle}>Код товару:</span>
                            <span className={s.brandValue}>{productItem.article}</span>
                        </Stack>
                    </Stack>
                </Box>

                <Stack spacing={2} direction="row" justifyContent="space-between" sx={{mb: 1,}}>
                    <Stack direction='column'>
                        <Typography variant="body1" sx={{fontSize: "24px", fontWeight: 700, color: '#525A68'}}>
                            {productItem.discount > 0 ?
                                `${productItem.price * ((100 - productItem.discount) / 100)} ГРН.` :
                                `${productItem.price} ГРН.`}
                        </Typography>

                        {productItem.discount > 0 &&
                            <Typography variant="body2" sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: '#DD8888',
                                textDecoration: 'line-through'
                            }}>
                                {productItem.price} ГРН.
                            </Typography>}
                    </Stack>

                    <IconButton sx={{
                        backgroundColor: "#2FD3AE",
                        borderRadius: "50%",
                        height: '50px',
                        width: '50px',
                        color: "#ffffff",
                        '&:hover': {
                            backgroundColor: "orange"
                        }
                    }}>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                </Stack>

                <Typography variant="span" gutterBottom sx={{
                    position: "absolute",
                    top: 12,
                    left: 10,
                    padding: "5px 10px",
                    backgroundColor: "#2FD3AE",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: '#FFFFFF',
                    borderRadius: '20px'
                }}>
                    Товар дня
                </Typography>
            </CardContent>
        </Card>
    );
}


export default ProductCard;