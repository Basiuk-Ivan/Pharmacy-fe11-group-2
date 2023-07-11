import { render, fireEvent } from '@testing-library/react';
import ProductCardInstruction from './ProductCardInstruction';


const mockProductItem = {
  activeSubstance: 'exampleActiveSubstance',
};
describe('ProductCardInstruction', () => {
  test('renders without errors', () => {
    render(<ProductCardInstruction productItem={mockProductItem} />);
  });

  test('handles button click correctly', () => {
    const { getByText } = render(<ProductCardInstruction productItem={mockProductItem} />);
    const button = getByText('Склад');

    fireEvent.click(button);
  });

  test('renders text components correctly', () => {
    const { getByText } = render(<ProductCardInstruction productItem={mockProductItem} />);

    const textComponent = getByText('Інструкція');
  });
});
