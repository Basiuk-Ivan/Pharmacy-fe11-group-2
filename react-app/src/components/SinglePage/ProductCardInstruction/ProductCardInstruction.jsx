import { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import TextComponent from '../TextComponent';
import { scrollClick } from '../../../tools/scrollClick';
import { instructionTextComponentData } from '../../../tools/instructionTextComponentData';
import { instructionButtons } from '../../../tools/instructionButtons';

const ProductCardInstruction = ({ productItem }) => {
  const [activeButton, setActiveButton] = useState(null);

  const compoundRef = useRef(null);
  const dosageFormRef = useRef(null);
  const pharmGroupRef = useRef(null);
  const indicationsRef = useRef(null);
  const contraindicationsRef = useRef(null);
  const howToTakeRef = useRef(null);
  const adverseReactionsRef = useRef(null);
  const bestBeforeDateRef = useRef(null);
  const storageConditionsRef = useRef(null);
  const manufacturerRef = useRef(null);

  const arrRef = [compoundRef, dosageFormRef, pharmGroupRef, indicationsRef,
    contraindicationsRef, howToTakeRef, adverseReactionsRef,
    bestBeforeDateRef, storageConditionsRef, manufacturerRef];

  useEffect(() => {
    window.addEventListener('scroll', () => setActiveButton(false));
    return () => {
      window.removeEventListener('scroll', () => setActiveButton(false));
    };
  }, [productItem.activeSubstance]);

  return (
    <Box>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
      >
        Інструкція
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {instructionButtons.map((button, btnIndex) => (
          <Button
            key={button.id}
            variant="outlined"
            color={activeButton === button.id ? 'secondary' : 'primary'}
            onClick={() => scrollClick(button.id)}
            ref={arrRef[btnIndex]}
            sx={() => ({
              color: activeButton === button.id ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === button.id ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {button.label}
          </Button>
        ))}
      </Stack>
      <Box>
        {instructionTextComponentData(productItem).map(component => (
          <TextComponent
            key={component.id}
            id={component.id}
            title={component.title}
            value={component.value}
          />
        ))}
      </Box>

    </Box>
  );
};

export default ProductCardInstruction;
