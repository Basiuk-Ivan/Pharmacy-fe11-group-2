import { useState, useEffect } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { Box, Stack, Typography, Button } from '@mui/material';
import TextComponent from '../TextComponent';

const ProductCardInstruction = ({ productItem }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeSubstance, setActiveSubstance] = useState('');

  useEffect(() => {
    const arr = productItem.activeSubstance;
    setActiveSubstance(arr.join(', '));
    window.addEventListener('scroll', () => setActiveButton(false));

    return () => {
      window.removeEventListener('scroll', () => setActiveButton(false));
    };
  }, [productItem.activeSubstance]);
  const handleClick = buttonId => {
    setActiveButton(buttonId);
  };

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
            Виробник
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
            Коротко про товар
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#indications">
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
            Показання
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#howToTake">
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
            Як приймати, курс прийому та дозування
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#description">
          <Button
            variant="outlined"
            color={activeButton === 'button5' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button4')}
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
            Опис
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#functionalBenefits">
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
            Функціональні переваги
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#storageConditions">
          <Button
            variant="outlined"
            color={activeButton === 'button7' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button6')}
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
            Умови зберігання
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#bestBeforeDate">
          <Button
            variant="outlined"
            color={activeButton === 'button8' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button7')}
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
            Термін придатності
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#activeSubstance">
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
            Діюча речовина
          </Button>
        </ScrollIntoView>
        <ScrollIntoView selector="#dosageForm">
          <Button
            variant="outlined"
            color={activeButton === 'button10' ? 'secondary' : 'primary'}
            onClick={() => handleClick('button10')}
            sx={() => ({
              color: activeButton === 'button10' ? '#ffffff' : '#2FD3AE',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeButton === 'button10' ? '#2FD3AE' : '#f7fafb',
              '&:hover': {
                backgroundColor: '#2FD3AE',
                color: '#ffffff',
                border: 'none'
              }
            })}
          >
            Лікарська форма
          </Button>
        </ScrollIntoView>
      </Stack>
      <Box>
        <TextComponent id="manufacturer"
                       title="Виробник"
                       value={productItem?.manufacturer}
        />
        <TextComponent id="brieflyAbout"
                       title="Коротко про товар"
                       value={productItem?.instruction?.brieflyAbout}
        />
        <TextComponent
          id="indications"
          title="Показання"
          value={productItem.instruction.indications}
        />
        <TextComponent id="howToTake"
                       title="Як приймати, курс прийому та дозування"
                       value={productItem?.instruction?.howToTake}
        />
        <TextComponent id="description"
                       title="Опис"
                       value={productItem?.instruction?.description}
        />
        <TextComponent
            id="functionalBenefits"
            title="Функціональні переваги"
            value={productItem?.instruction?.functionalBenefits}
        />
        <TextComponent
            id="storageConditions"
            title="Умови зберігання"
            value={productItem?.instruction?.storageConditions}
        />
        <TextComponent
            id="bestBeforeDate"
            title="Термін придатності"
            value={productItem?.bestBeforeDate}
        />
        <TextComponent
            id="activeSubstance"
            title="Діюча речовина"
            value={activeSubstance}
        />
        <TextComponent
            id="dosageForm"
            title="Лікарська форма"
            value={productItem?.productForm}
        />
      </Box>

    </Box>
  );
};

export default ProductCardInstruction;
