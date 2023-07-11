import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalWindow from './ModalWindow';

describe('ModalWindow', () => {
  const mockHandleClick = jest.fn();
  const mockHandleClose = jest.fn();

  const props = {
    mainText: 'Some title',
    isOpened: true,
    handleClick: mockHandleClick,
    handleClose: mockHandleClose,
    confirmTextBtn: 'Confirm',
    cancelTextBtn: 'Cancel',
    actions: true,
  };

  test('displays the main text', () => {
    render(<ModalWindow {...props} />);
    expect(screen.getByText(props.mainText)).toBeInTheDocument();
  });

  test('calls handleClick when the confirm button is clicked', () => {
    render(<ModalWindow {...props} />);
    const confirmButton = screen.getByText(props.confirmTextBtn);
    fireEvent.click(confirmButton);
    expect(mockHandleClick).toHaveBeenCalled();
  });

  test('calls handleClose when the cancel button is clicked', () => {
    render(<ModalWindow {...props} />);
    const cancelButton = screen.getByText(props.cancelTextBtn);
    fireEvent.click(cancelButton);
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
