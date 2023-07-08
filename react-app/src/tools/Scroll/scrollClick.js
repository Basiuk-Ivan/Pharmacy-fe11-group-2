import { scrollToElement } from './scrollToElement';

export const scrollClick = buttonId => {
  switch (buttonId) {
    case 'button1':
      scrollToElement('compound');
      break;
    case 'button2':
      scrollToElement('dosageForm');
      break;
    case 'button3':
      scrollToElement('pharmGroup');
      break;
    case 'button4':
      scrollToElement('indications');
      break;
    case 'button5':
      scrollToElement('contraindications');
      break;
    case 'button6':
      scrollToElement('howToTake');
      break;
    case 'button7':
      scrollToElement('adverseReactions');
      break;
    case 'button8':
      scrollToElement('bestBeforeDate');
      break;
    case 'button9':
      scrollToElement('storageConditions');
      break;
    case 'button10':
      scrollToElement('manufacturer');
      break;
    default:
      break;
  }
};
