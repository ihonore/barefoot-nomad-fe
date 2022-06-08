import { Button, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function SignupWelcome() {
  const { t } = useTranslation();
  return (
    <div
      style={{
        marginTop: '40%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        style={{
          color: '#f1f1f1',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {t('Welcome to')}
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        style={{
          color: '#f1f1f1',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Barefoot nomad
      </Typography>
      <br />
      <Typography
        variant="body1"
        component="h3"
        style={{ color: '#f1f1f1', textAlign: 'center' }}
      >
        {t('	To keep connected with us please register with us!')}
      </Typography>
      <br />
      <br />
      <br />
      <p style={{ textAlign: 'center' }}>
        <Button
          component={Link}
          to="/login"
          variant="outlined"
          style={{
            color: '#f1f1f1',
            minWidth: '40%',
            borderColor: '#f1f1f1',
            borderRadius: '20px',
            textAlign: 'center',
          }}
        >
          {t('SIGN IN')}
        </Button>
      </p>
    </div>
  );
}

export default SignupWelcome;
