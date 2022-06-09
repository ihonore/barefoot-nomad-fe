import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import i18next from 'i18next';
import cookies from 'js-cookie';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

const LanguageSwitcher = () => {
  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'us',
    },
    {
      code: 'kin',
      name: 'Ikinyarwanda',
      country_code: 'rw',
    },
  ];
  const currentLanguageCode = cookies.get('i18next') || 'en';

  return (
    <Box
      sx={{
        minWidth: 120,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={40}
        label="Age"
        variant="standard"
        sx={{
          width: 50,
          height: 40,
          marginRight: 15,
          // border: '1px solid white',
        }}
      >
        {languages.map(({ code, name, country_code }) => (
          <MenuItem
            key={country_code}
            onClick={() => i18next.changeLanguage(code)}
          >
            <button
              className="dropdown-item"
              disabled={code === currentLanguageCode}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{ marginRight: '5px' }}>
                <img
                  src={`https://flagcdn.com/16x12/${country_code}.png`}
                  width="16"
                  height="12"
                  alt={code}
                  style={{
                    opacity: code === currentLanguageCode ? 0.5 : 1,
                  }}
                />
              </span>
              {name}
            </button>
          </MenuItem>
        ))}
      </Select>
      <LanguageIcon
        color="white"
        sx={{
          height: '2rem',
          color: 'white',
          width: '2rem',
          position: 'absolute',
          top: 2.5,
          left: 2.5,
        }}
      />
    </Box>
  );
};

export default LanguageSwitcher;
