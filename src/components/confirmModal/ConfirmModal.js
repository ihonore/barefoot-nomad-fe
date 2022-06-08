import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  approveTripRequest,
  deleteTripRequest,
  rejectTripRequest,
} from '../../redux/actions/tripRequestsActions';
import { showLoader } from '../../redux/actions/loaderActions';

const ConfirmModal = (props) => {
  const { t } = useTranslation();
  const entireState = useSelector((state) => state);
  const dispatch = useDispatch();
  const currentUserState = entireState.currentUser;
  const { showModal, close, modalData } = props;
  const { message, id, action } = modalData;
  const { token } = currentUserState.currentUser;

  const handleAction = () => {
    if (action === 'delete') {
      dispatch(deleteTripRequest(id, token));
      close();
      dispatch(showLoader());
    }
    if (action === 'approve') {
      dispatch(approveTripRequest(id, token));
      console.log('%cIdddd=', 'background-color:teal', id);
      close();
      dispatch(showLoader());
    }
    if (action === 'reject') {
      dispatch(rejectTripRequest(id, token));
      close();
      dispatch(showLoader());
    }
  };
  return (
    <Dialog
      open={showModal}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ marginLeft: '10vw' }}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>{t('No')}</Button>
        <Button onClick={handleAction} autoFocus>
          {t('Yes')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmModal;
