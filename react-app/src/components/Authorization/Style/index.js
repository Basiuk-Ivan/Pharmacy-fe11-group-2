import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #f7f7f7',
  boxShadow: 24,
  borderRadius: 5
};

export const StyledButton = styled(Button)`
  width: 160px;
  height: 50px;
  border-radius: 26px;
  background: #2fd3ae;
  @media (max-width: 360px) {
    font-size: 10px;
  }
`;

export const UnderlineSpan = styled.span`
  text-decoration: underline;
  color: #2fd3ae;
`;

export const HighlightSpan = styled.span`
  color: #2fd3ae;
`;

export const CustomTextField = styled(TextField)`
  border-radius: 26px;
`;
