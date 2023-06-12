import { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import TextComponent from '../TextComponent';

const ProductCardInstruction = ({ productItem }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeSubstanceText, setActiveSubstanceText] = useState('');

  const manufacturerRef = useRef(null);
  const brieflyAboutRef = useRef(null);
  const indicationsRef = useRef(null);
  const howToTakeRef = useRef(null);
  const descriptionRef = useRef(null);
  const functionalBenefitsRef = useRef(null);
  const storageConditionsRef = useRef(null);
  const bestBeforeDateRef = useRef(null);
  const activeSubstanceRef = useRef(null);
  const dosageFormRef = useRef(null);

  const scrollToElement = elementId => {
    const element = document.getElementById(elementId);
    if (element) {
      const scrollTopPosition = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: scrollTopPosition, behavior: 'smooth' });
    }
  };

  const handleClick = buttonId => {
    switch (buttonId) {
      case 'button1':
        scrollToElement('manufacturer');
        break;
      case 'button2':
        scrollToElement('brieflyAbout');
        break;
      case 'button3':
        scrollToElement('indications');
        break;
      case 'button4':
        scrollToElement('howToTake');
        break;
      case 'button5':
        scrollToElement('description');
        break;
      case 'button6':
        scrollToElement('functionalBenefits');
        break;
      case 'button7':
        scrollToElement('storageConditions');
        break;
      case 'button8':
        scrollToElement('bestBeforeDate');
        break;
      case 'button9':
        scrollToElement('activeSubstance');
        break;
      case 'button10':
        scrollToElement('dosageForm');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const arr = productItem.activeSubstance;
    setActiveSubstanceText(arr.join(', '));
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
        <Button
          variant="outlined"
          onClick={() => handleClick('button1')}
          ref={manufacturerRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button2' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button2')}
          ref={brieflyAboutRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button3' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button3')}
          ref={indicationsRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button4' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button4')}
          ref={howToTakeRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button5' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button5')}
          ref={descriptionRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button6' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button6')}
          ref={functionalBenefitsRef}
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

        <Button
          variant="outlined"
          color={activeButton === 'button7' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button7')}
          ref={storageConditionsRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button8' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button8')}
          ref={bestBeforeDateRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button9' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button9')}
          ref={activeSubstanceRef}
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
        <Button
          variant="outlined"
          color={activeButton === 'button10' ? 'secondary' : 'primary'}
          onClick={() => handleClick('button10')}
          ref={dosageFormRef}
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
      </Stack>
      <Box>
        <TextComponent
          id="manufacturer"
          title="Виробник"
          value={productItem?.manufacturer}
        />
        <TextComponent
          id="brieflyAbout"
          title="Коротко про товар"
          value={productItem?.instruction?.brieflyAbout}
        />
        <TextComponent
          id="indications"
          title="Показання"
          value={productItem.instruction.indications}
        />
        <TextComponent
          id="howToTake"
          title="Як приймати, курс прийому та дозування"
          value={productItem?.instruction?.howToTake}
        />
        <TextComponent
          id="description"
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
          value={activeSubstanceText}
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
