import { Box, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { BallTriangle } from 'react-loader-spinner';

const VerificationProgress = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 2000,
      }}
    >
      <BallTriangle color="#00BFFF" height={80} width={80} />
      <Typography variant="h5" mt={2} color="white">
        {t('Verifying email...')}
      </Typography>
    </Box>
  );
};

export default VerificationProgress;
