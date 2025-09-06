import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Fab,
  Chip,
} from '@mui/material';
import { Menu as MenuIcon, Phone as PhoneIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 50;
        setScrolled(isScrolled);
      };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    // { label: 'Projects', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              color: location.pathname === item.path ? theme.palette.primary.main : 'inherit',
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        elevation={scrolled ? 4 : 0} 
        sx={{ 
          backgroundColor: scrolled ? 'white' : 'rgba(0, 0, 0, 0)',
          color: scrolled ? 'text.primary' : 'white',
          transition: 'all 0.3s ease-in-out',
          p: 1,
          zIndex: 1000,
          boxShadow: scrolled ? '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' : 'none',
          '& .MuiToolbar-root': {
            transition: 'all 0.3s ease-in-out',
            color: scrolled ? 'text.primary' : 'white',
            backgroundColor: 'transparent',
          },
          '& *': {
            color: scrolled ? 'inherit' : 'white',
          }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Chip
                  label="FREE Consultation"
                  size="small"
                  sx={{
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.75rem',
                    mr: 5,
                  }}
                />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: scrolled ? 'primary.main' : 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  mr: 5,
                  transition: 'color 0.3s ease-in-out',
                }}
              >
                HomePavers
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: scrolled 
                        ? (location.pathname === item.path ? 'primary.main' : 'text.primary')
                        : (location.pathname === item.path ? 'white' : 'rgba(255, 255, 255, 0.8)'),
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: scrolled ? 'primary.main' : 'white',
                        backgroundColor: scrolled ? 'rgba(25, 118, 210, 0.04)' : 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  href="tel:(925)655-7855"
                  sx={{
                    backgroundColor: 'secondary.main',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  (925) 655-7855
                </Button>
              </Box>
            )}

            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<PhoneIcon />}
                  href="tel:(925)655-7855"
                  sx={{
                    backgroundColor: 'secondary.main',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Call
                </Button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: scrolled ? 'text.primary' : 'white',
                    transition: 'color 0.3s ease-in-out',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Floating Call Button for Mobile */}
      {isMobile && (
        <Fab
          color="secondary"
          aria-label="call"
          href="tel:(925)655-7855"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <PhoneIcon />
        </Fab>
      )}

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: 'grey.900',
          color: 'white',
          py: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2">
              © 2024 HomePavers - Professional Paving Services
            </Typography>
            <Typography variant="body2">
              Family-owned Business | Licensed & Insured
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
