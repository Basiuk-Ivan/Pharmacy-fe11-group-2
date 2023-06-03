import { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Box, Stack, Typography, Button } from '@mui/material';
import TextComponent from '../TextComponent';

const ProductCardInstruction = ({ productItem }) => {
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    window.addEventListener('scroll', () => setActiveButton(false));

    return () => {
      window.removeEventListener('scroll', () => setActiveButton(false));
    };
  }, []);
  const handleClick = buttonId => {
    setActiveButton(buttonId);
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        gutterBottom
        sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
      >
        Інструкція
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        <ScrollIntoView selector="#manufacturer">
          <Button
            variant="outlined"
            onClick={() => handleClick('button1')}
            sx={() => ({
              color: activeButton === 'button1' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button1' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.manufacturer.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#brieflyAbout">
          <Button
            variant="outlined"
            color={activeButton === 'button2' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button2')}
            sx={() => ({
              color: activeButton === 'button2' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button2' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.brieflyAbout.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#howToTake">
          <Button
            variant="outlined"
            color={activeButton === 'button3' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button3')}
            sx={() => ({
              color: activeButton === 'button3' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button3' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.howToTake.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#description">
          <Button
            variant="outlined"
            color={activeButton === 'button4' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button4')}
            sx={() => ({
              color: activeButton === 'button4' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button4' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.description.title}
          </Button>
        </ScrollIntoView>

        <ScrollIntoView selector="#functionalBenefits">
          <Button
            variant="outlined"
            color={activeButton === 'button5' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button5')}
            sx={() => ({
              color: activeButton === 'button5' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button5' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.functionalBenefits.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#storageConditions">
          <Button
            variant="outlined"
            color={activeButton === 'button6' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button6')}
            sx={() => ({
              color: activeButton === 'button6' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button6' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.storageConditions.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#bestBeforeDate">
          <Button
            variant="outlined"
            color={activeButton === 'button7' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button7')}
            sx={() => ({
              color: activeButton === 'button7' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button7' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.bestBeforeDate.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#activeSubstance">
          <Button
            variant="outlined"
            color={activeButton === 'button8' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button8')}
            sx={() => ({
              color: activeButton === 'button8' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button8' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.activeSubstance.title}
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#dosageForm">
          <Button
            variant="outlined"
            color={activeButton === 'button9' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button9')}
            sx={() => ({
              color: activeButton === 'button9' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button9' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            {productItem.instruction.dosageForm.title}
          </Button>
        </ScrollIntoView>
      </Stack>
      <Box>
        <TextComponent
          id="manufacturer"
          title={productItem.instruction.manufacturer.title}
          value={productItem.instruction.manufacturer.value}
        />
        <TextComponent
          id="brieflyAbout"
          title={productItem.instruction.brieflyAbout.title}
          value={productItem.instruction.brieflyAbout.value}
        />
        <TextComponent
          id="indications"
          title={productItem.instruction.indications.title}
          value={productItem.instruction.indications.value}
        />
        <TextComponent
          id="howToTake"
          title={productItem.instruction.howToTake.title}
          value={productItem.instruction.howToTake.value}
        />
        <TextComponent
          id="description"
          title={productItem.instruction.description.title}
          value={productItem.instruction.description.value}
        />
        <TextComponent
          id="functionalBenefits"
          title={productItem.instruction.functionalBenefits.title}
          value={productItem.instruction.functionalBenefits.value}
        />
        <TextComponent
          id="storageConditions"
          title={productItem.instruction.storageConditions.title}
          value={productItem.instruction.storageConditions.value}
        />
        <TextComponent
          id="bestBeforeDate"
          title={productItem.instruction.bestBeforeDate.title}
          value={productItem.instruction.bestBeforeDate.value}
        />
        <TextComponent
          id="activeSubstance"
          title={productItem.instruction.activeSubstance.title}
          value={productItem.instruction.activeSubstance.value}
        />
        <TextComponent
          id="dosageForm"
          title={productItem.instruction.dosageForm.title}
          value={productItem.instruction.dosageForm.value}
        />
      </Box>
    </>
  );
};

export default ProductCardInstruction;
