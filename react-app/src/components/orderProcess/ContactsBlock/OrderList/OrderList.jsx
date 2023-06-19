import {useEffect, useState} from 'react';
import {Typography, Container, Grid} from '@mui/material';
import {useSelector} from 'react-redux';
import {roundPrice} from '../../../../utils/ActionsWithProduct/roundPrice';
import {request} from '../../../../tools/request';

const OrderList = () => {
    const [products, setProducts] = useState([]);
    const productItemCart = useSelector(state => state.itemCards.items);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (productItemCart.length > 0) {
                    const cartIds = productItemCart.map(item => item.id).join(',');

                    const {result} = await request({
                        url: '',
                        method: 'GET',
                        params: {_id: cartIds}
                    });

                    const {data} = result;

                    const combinedArray = productItemCart.map(item1 => {
                        const arr2 = data.find(item2 => item2.id === item1.id);
                        return {...item1, ...arr2, quantity: item1.quantity};
                    });

                    setProducts(combinedArray);
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, [productItemCart]);
    return (
        <Container disableGutters>
            <Typography
                sx={{
                    margin: '40px 0 20px 0',
                    fontFamily: 'Raleway, sans-serif',
                    color: '#4F4F4F',
                    fontWeight: '700',
                    fontSize: '24px',
                    width: '100%'
                }}
            >
                Ваше замовлення
            </Typography>
            <Grid container sx={{overflowY: 'auto', maxHeight: '300px'}}>
                {products.map(el => {
                    const currentPrice = roundPrice(el) * el.quantity;
                    return (
                        <Grid container key={el.id} alignItems="center"
                              sx={{mt: "10px", gap: "10px", border: "1px solid #2fd3ae"}}>
                            <Grid item md={12} sx={{ gap:"5px"}}>
                                <Grid container>
                                    <Grid item md={3}>
                                        <img src={`${el.img[0]}`} width="70px"  alt=""/>
                                    </Grid>
                                    <Grid item md={9} sx={{alingSelf:"center"}}>
                                        <Typography
                                            sx={{textAlign: 'left', fontSize: "16px"}}>{`${el.name}`}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item md={12} sx={{ gap:"5px"}}>
                                <Grid container>
                                    <Grid item md={4} sx={{ flexGrow: 0 }}>
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                textAlign: "center"
                                            }}
                                        >
                                            Кількість
                                        </Typography>

                                        <Typography
                                            sx={{
                                                textAlign: 'center',
                                                // borderRadius: '50px',
                                                padding: '2px',
                                                backgroundColor: '#dadada',
                                                fontSize: "12px",
                                                flexGrow: 0
                                            }}
                                        >
                                            {`${el.quantity}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={8}>
                                        <Typography sx={{ textAlign: 'center' }}>Ціна за од.: {`${currentPrice} грн.`}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </Container>
    );
};
export default OrderList;
