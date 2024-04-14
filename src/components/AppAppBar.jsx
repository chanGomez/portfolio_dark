import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import "./FQA.css"

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="sm">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              // boxShadow:
              //   theme === 'light'
              //     ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              //     : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-8px',
                px: 0,
              }}
            >
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  onClick={() => scrollToSection('hero')}
                  sx={{ py: '6px', px: '20px' }}
                  className='menuItem'
                >
                  <Typography variant="subtitle1" color="text.primary">
                    Home
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('highlights')}
                  sx={{ py: '6px', px: '20px' }}
                  className='menuItem'
                >
                  <Typography variant="subtitle1" color="text.primary">
                    About
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('testimonials')}
                  className='menuItem'
                  sx={{ py: '6px', px: '20px' }}
                >
                  <Typography variant="subtitle1" color="text.primary">
                    Projects
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('contact')}
                  className='menuItem'
                  sx={{ py: '6px', px: '20px' }}
                >
                  <Typography variant="subtitle1" color="text.primary">
                    Contact
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection('faq')}
                  className='menuItem'
                  sx={{ py: '6px', px: '20px' }}
                >
                  <Typography variant="subtitle1" color="text.primary">
                    FAQ
                  </Typography>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                  </Box>
                  <MenuItem onClick={() => scrollToSection('hero')}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('highlights')}>
                    About
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('testimonials')}>
                    Projects
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('contact')}>
                    Contact
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;