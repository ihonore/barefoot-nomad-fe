import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Avatar,
  Button,
  Dialog,
  Paper,
  Slide,
  Typography,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import VerificationProgress from '../progressBar/VerificationProgress';
import { openGlobalSnackBar } from '../../redux/actions/globalSnackBarActions';

const VerifyEmail = () => {
  const [open, setOpen] = React.useState(true);

  const { token } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const newToken = token.replace(/\|+/gi, '.');

    const URL = `https://elites-barefoot-nomad.herokuapp.com/api/v1/users/verifyEmail/${newToken}`;

    const verifyEmail = () => {
      axios
        .patch(URL, {})
        .then((res) => {
          // console.log('RESSSPONSS', res);
          setOpen(false);
        })
        .catch((err) => {
          // console.log('ERRRORRRR', err.response?.data?.message);
          dispatch(
            openGlobalSnackBar({
              message: err.response?.data?.message ?? err.message,
              severity: 'error',
            })
          );
          setTimeout(() => {
            navigate('/login');
          }, 4000);
        });
    };
    verifyEmail();
  }, []);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return open ? (
    <VerificationProgress />
  ) : (
    <div>
      <Dialog
        fullScreen
        open
        // onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: '80vw',
              height: '30vh',
              margin: '10% auto',
            },
          }}
        >
          <Paper elevation={3}>
            <Box
              sx={{
                bgcolor: '#07539F',
                color: 'white',
                padding: '10vh 10vh',
                display: 'flex',
                flexDirection: 'column',
                height: 'inherit',
              }}
            >
              <Typography
                sx={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}
              >
                {t('Your email has been verified successfully!')}
              </Typography>
              <Avatar sx={{ bgcolor: 'green', marginTop: '5%' }}>
                <DoneIcon />
              </Avatar>
              <Button
                autoFocus
                sx={{
                  backgroundColor: 'white',
                  marginTop: '5%',
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
                onClick={() => navigate('/login')}
              >
                {t('Login')}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Dialog>
    </div>
  );
};

export default VerifyEmail;
