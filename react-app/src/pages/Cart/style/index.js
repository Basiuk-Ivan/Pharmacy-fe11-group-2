import styled from 'styled-components';
import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const ContainerBox = styled(Box)`
  display: flex;
  max-width: 1200px;
  gap: 20px;
  flex-direction: row-reverse;
  font-family: Roboto, sans-serif;
  @media (max-width: 888px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 5%;
  }
`;
export const CardBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction:column;
  gap:20px;
  font-family:Roboto,sans-serif;
  margin-bottom:50px;
 
}
// export const StyledBox = styled(Box)`;
//   display: flex;
//   width: 258px;
//   height: 132px;
//   background: #2fd3ae;
// `;
//
// export const CardContentStyled = styled(CardContent)`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;
//
// export const ContentBox = styled(Box)`
//   width: 400px;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 30px;
//   line-height: 26px;
// `;
//
// export const PriceBox = styled(Box)`
//   width: 60%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-size: 14px;
// `;
export const FormBox = styled(Box)`
  width: 358px;
  height: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(231, 233, 235, 1);
  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const FormTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-start;
  @media (max-width: 1023px) {
    font-size: 22px;
  }
`;
export const FormTitlePromo = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1023px) {
    font-size: 22px;
  }
`;

export const FormText = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  padding: 20px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    font-size: 17px;
  }
`;

export const OrderButton = styled(Button)`
  width: 318px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(231, 233, 235, 1);
  border-radius: 26px;
  padding: 10px;
  color: white;
  background: #2fd3ae;

  &:hover {
    background: #56a2cc;
  }

  @media (max-width: 1023px) {
    width: 100%;
    font-size: 13px;
  }
`;
export const SaleBox = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  background: rgba(247, 250, 251, 1);
`;
export const TotalBox = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
`;
export const PromoBox = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 20px 0 20px;
  flex-direction: column;
  background: rgba(247, 250, 251, 1);
  .MuiOutlinedInput-root {
    border-radius: 26px;
  }
`;
export const HeaderBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  //@media (max-width: 805px) {
  //  width: 100%;
  //} ;
`;
export const TextFieldPromo = styled(TextField)`
  width: 100%;
  border-radius: 50px;
`;
