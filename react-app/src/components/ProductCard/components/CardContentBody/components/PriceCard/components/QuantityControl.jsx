import { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import {
  buttonBasePlusStyles,
  buttonBaseMinusStyles,
  wrappForQuantityStyles,
  boxForButtonBaseStyles
} from '../../../../../style';

export const QuantityControl = ({ isInCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = event => {
    event.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecrement = event => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!isInCart) {
    return null;
  }

  return (
    <Box sx={boxForButtonBaseStyles}>
      <ButtonBase sx={buttonBaseMinusStyles} onClick={handleDecrement}>
        -
      </ButtonBase>
      <Box sx={wrappForQuantityStyles}>{quantity}</Box>
      <ButtonBase onClick={handleIncrement} sx={buttonBasePlusStyles}>
        +
      </ButtonBase>
    </Box>
  );
};
