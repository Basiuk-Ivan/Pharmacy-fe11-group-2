import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { openLogoutModal, setToken } from '../../../redux/slice/isToken';
import ModalWindow from '../../ModalWindow';
import { IsAuthRender } from './components/IsAuthRender';
import { wrapForActionsStyles } from './style';
import { NotAuthRender } from './components/NotAuthRender';

const UserActions = () => {
  const dispatch = useDispatch();
  const isOpenedLogoutModal = useSelector(state => state.isToken.isOpenedLogoutModal);
  const isAuth = useSelector(state => state.user.isAuth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(setToken(token));
  }, [dispatch]);

  const handleCloseLogoutModal = () => {
    dispatch(openLogoutModal(false));
  };

  useEffect(() => {
    if (isOpenedLogoutModal) {
      const timer = setTimeout(() => {
        handleCloseLogoutModal();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpenedLogoutModal]);

  return (
    <>
      {!!isOpenedLogoutModal && (
        <ModalWindow
          mainText="Ви вийшли з кабінета"
          handleClick={() => {}}
          handleClose={handleCloseLogoutModal}
          isOpened={isOpenedLogoutModal}
          actions={false}
        />
      )}
      <Box sx={wrapForActionsStyles}>
        {isAuth ? <IsAuthRender dispatch={dispatch} /> : <NotAuthRender dispatch={dispatch} />}
      </Box>

      <MobileMenu />
    </>
  );
};

export default UserActions;
