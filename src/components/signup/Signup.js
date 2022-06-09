import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputLabel,
  Snackbar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/signupActions';
import SignupWelcome from './SignupWelcome';

import { FormControl, Input, Link, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
} from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

function Signup(props) {
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton> */}
    </React.Fragment>
  );
  const googleDir = () => {
    window.open(
      'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/auth/google',
      '_self'
    );
  };

  const facebook = () => {
    window.open(
      'https://elites-barefoot-nomad.herokuapp.com/api/v1/users/auth/facebook',
      '_self'
    );
  };
  return (
    <Grid container spacing={2} sx={{ maxHeight: '100vh' }}>
      <Grid
        item
        xs={12}
        md={5}
        style={{ minHeight: '100vh', background: '#07539F' }}
      >
        <SignupWelcome />
      </Grid>
      <Grid item xs={12} md={7} lg={7}>
        {props.signupData.hasOwnProperty('error') ? (
          <Snackbar
            open={props.signupData.hasOwnProperty('error') ? true : false}
            autoHideDuration={6000}
            onClose={handleClose}
            message={props.signupData.error.response.data.message}
            action={action}
          />
        ) : null}
        {props.signupData.hasOwnProperty('error') ? (
          <h4>{null}</h4>
        ) : props.signupData.data ? (
          <Navigate to="/signup/success" />
        ) : (
          ''
        )}
        {
          <div
            style={{
              paddingTop: '4%',
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              style={{
                color: '#07539F',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              {t('Create Account')}
            </Typography>
            <br />
            <p style={{ textAlign: 'center' }}>
              <GoogleIcon
                style={{ color: '#9A9A9A', cursor: 'pointer' }}
                onClick={googleDir}
              />
              &nbsp; &nbsp; &nbsp;
              <FacebookOutlinedIcon
                style={{ color: '#9A9A9A', cursor: 'pointer' }}
                onClick={facebook}
              />
            </p>
            <br />
            <div>
              <Typography
                variant="body1"
                component="h3"
                style={{ color: '#9A9A9A', textAlign: 'center' }}
              >
                {t('or use your email for registration')}
              </Typography>
            </div>

            <br />
            <ValidatorForm
              form
              onSubmit={() => props.registerUser({ names, email, password })}
            >
              <div>
                <p style={{ textAlign: 'center' }}>
                  <FormControl sx={{ m: 1, width: '65%' }} required>
                    {/* <InputLabel htmlFor="standard-adornment-names">Names</InputLabel> */}
                    {/* <Input
									id="standard-adornment-names"
									type='text'
									value={names}
									onChange={(e) => setNames(e.target.value)}
								/> */}
                    <TextValidator
                      id="standard-adornment-names"
                      type="text"
                      value={names}
                      validators={['required']}
                      errorMessages={['This field is required']}
                      variant="filled"
                      label={t('Names')}
                      sx={{ m: 1, width: '100%' }}
                      onChange={(e) => setNames(e.target.value)}
                    />
                  </FormControl>
                </p>
              </div>
              <div>
                <p style={{ textAlign: 'center' }}>
                  <FormControl sx={{ m: 1, width: '65%' }} variant="standard">
                    {/* <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
									<Input
										id="standard-adornment-names"
										type='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/> */}
                    <TextValidator
                      id="standard-adornment-email"
                      type="text"
                      value={email}
                      validators={['required', 'isEmail']}
                      errorMessages={[
                        'This field is required',
                        'email is not valid',
                      ]}
                      variant="filled"
                      label="Email"
                      sx={{ m: 1, width: '100%' }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                </p>
              </div>
              <div>
                <p style={{ textAlign: 'center' }}>
                  <FormControl sx={{ m: 1, width: '65%' }} variant="standard">
                    {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
									<Input
										id="standard-adornment-password"
										type='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/> */}
                    <TextValidator
                      id="standard-adornment-password"
                      type="password"
                      value={password}
                      validators={['required']}
                      errorMessages={['This field is required']}
                      variant="filled"
                      label={t('Password')}
                      sx={{ m: 1, width: '100%' }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                </p>
              </div>
              <br />
              <div>
                <p style={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    disabled={props.signupData.loading}
                    variant="contained"
                    style={{
                      backgroundColor: '#07539F',
                      borderRadius: '20px',
                      width: '40%',
                    }}
                  >
                    {props.signupData.loading ? (
                      <CircularProgress
                        style={{ color: 'white' }}
                        size="25px"
                      />
                    ) : (
                      t('Register')
                    )}
                  </Button>
                </p>
              </div>
            </ValidatorForm>
          </div>
        }
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    signupData: state.signup,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
