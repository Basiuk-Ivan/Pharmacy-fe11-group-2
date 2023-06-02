import { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Box, Stack, Typography, Button } from '@mui/material';
import TextComponent from '../TextComponent';

const ProductCardInstruction = ({ goods }) => {
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
              },
            })}
          >{goods.instruction.manufacturer.title}
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
              },
            })}
          >{goods.instruction.brieflyAbout.title}
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
              },
            })}
          >{goods.instruction.howToTake.title}
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
              },
            })}
          >{goods.instruction.description.title}
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
              },
            })}
          >{goods.instruction.functionalBenefits.title}
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
              },
            })}
          >{goods.instruction.storageConditions.title}
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
              },
            })}
          >{goods.instruction.bestBeforeDate.title}
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
              },
            })}
          >{goods.instruction.activeSubstance.title}
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
              },
            })}
          >{goods.instruction.dosageForm.title}
          </Button>
        </ScrollIntoView>
      </Stack>
      <Box>
        <TextComponent id="manufacturer" title={goods.instruction.manufacturer.title}
                       value={goods.instruction.manufacturer.value} />
        <TextComponent id="brieflyAbout" title={goods.instruction.brieflyAbout.title}
                       value={goods.instruction.brieflyAbout.value} />
        <TextComponent id="indications" title={goods.instruction.indications.title}
                       value={goods.instruction.indications.value} />
        <TextComponent id="howToTake" title={goods.instruction.howToTake.title}
                       value={goods.instruction.howToTake.value} />
        <TextComponent id="description" title={goods.instruction.description.title}
                       value={goods.instruction.description.value} />
        <TextComponent id="functionalBenefits" title={goods.instruction.functionalBenefits.title}
                       value={goods.instruction.functionalBenefits.value} />
        <TextComponent id="storageConditions" title={goods.instruction.storageConditions.title}
                       value={goods.instruction.storageConditions.value} />
        <TextComponent id="bestBeforeDate" title={goods.instruction.bestBeforeDate.title}
                       value={goods.instruction.bestBeforeDate.value} />
        <TextComponent id="activeSubstance" title={goods.instruction.activeSubstance.title}
                       value={goods.instruction.activeSubstance.value} />
        <TextComponent id="dosageForm" title={goods.instruction.dosageForm.title}
                       value={goods.instruction.dosageForm.value} />
      </Box>
    </>
  );
};

export default ProductCardInstruction;
