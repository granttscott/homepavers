import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Construction as ConstructionIcon,
  Home as HomeIcon,
  Pool as PoolIcon,
  DirectionsWalk as WalkIcon,
  Landscape as LandscapeIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <ConstructionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Driveways',
      description: 'Professional driveway installation and repair services',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Patios',
      description: 'Beautiful outdoor living spaces for your home',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Retaining Walls',
      description: 'Structural and decorative retaining wall solutions',
    },
    {
      icon: <WalkIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Walkways',
      description: 'Elegant pathways to enhance your property',
    },
    {
      icon: <PoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Pool Decks',
      description: 'Safe and beautiful pool deck installations',
    },
    {
      icon: <LandscapeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Artificial Turf',
      description: 'Low-maintenance, beautiful artificial grass solutions',
    },
  ];

  return (
    <>
      <Helmet>
        <title>HomePavers - Professional Paving Services | Driveways, Patios & More</title>
        <meta
          name="description"
          content="Professional paving services including driveways, patios, retaining walls, walkways, pool decks, and artificial turf. Family-owned business with 20+ years of experience. Call (925) 655-7855 for free consultation."
        />
        <meta name="keywords" content="paving, driveways, patios, retaining walls, walkways, pool decks, artificial turf, interlocking pavers" />
        <meta property="og:title" content="HomePavers - Professional Paving Services" />
        <meta property="og:description" content="Professional paving services with 20+ years of experience. Family-owned business offering driveways, patios, and more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://homepavers.com" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: 'url(/src/assets/images/front-yard-all-bells.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 77%',
            backgroundRepeat: 'no-repeat',
            color: 'white',
            pt: { xs: 12, md: 16 },
            pb: { xs: 8, md: 20 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 1,
            },
            '& > *': {
              position: 'relative',
              zIndex: 2,
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              Transform Your Outdoor Space
            </Typography>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}
            >
              Professional paving services that enhance your property's value and beauty. 
              From driveways to patios, we create outdoor spaces you'll love for years to come.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                href="tel:(925)655-7855"
                sx={{
                  backgroundColor: 'secondary.main',
                  '&:hover': { backgroundColor: 'secondary.dark' },
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                Call (925) 655-7855
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                }}
              >
                Get Started
              </Button>
            </Box>
            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 500 }}>
              Free consultation • No obligation • Licensed & insured
            </Typography>
          </Container>
        </Box>

        {/* Value Proposition Banner */}
        <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 3 }}>
          <Container maxWidth="lg">
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 3, 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Box sx={{ 
                textAlign: 'center', 
                flex: '1 1 300px',
                minWidth: '250px'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  FREE Consultation
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  No obligation design consultation
                </Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: '1 1 300px',
                minWidth: '250px'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Licensed & Insured
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Fully licensed and insured for your protection
                </Typography>
              </Box>
              <Box sx={{ 
                textAlign: 'center', 
                flex: '1 1 300px',
                minWidth: '250px'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Quality Guarantee
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Industry-leading warranties on all work
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Services Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Our Services
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center' 
          }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px'
              }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>

        {/* How It Works Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            How It Works
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 6, 
            justifyContent: 'center' 
          }}>
            <Box sx={{ 
              textAlign: 'center', 
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                1
              </Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Free Consultation
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We visit your property to assess your needs, discuss your vision, and provide expert recommendations tailored to your space and budget.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                2
              </Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Custom Design
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our design team creates detailed plans and 3D renderings so you can visualize your new outdoor space before we begin construction.
              </Typography>
            </Box>
            <Box sx={{ 
              textAlign: 'center', 
              flex: '1 1 300px',
              maxWidth: '400px',
              minWidth: '280px'
            }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  mx: 'auto',
                  mb: 3,
                }}
              >
                3
              </Box>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Professional Installation
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our skilled craftsmen bring your vision to life using premium materials and proven installation techniques, backed by our comprehensive warranty.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold',
              }}
            >
              Start Your Project
            </Button>
          </Box>
        </Container>

        {/* Social Proof Section */}
        <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              Trusted by Bay Area Homeowners
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center' 
            }}>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    20+ Years
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Experience
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Family-owned business with decades of experience serving the Bay Area community
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    1000+
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Projects Completed
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Hundreds of satisfied customers with beautiful outdoor transformations
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    5-Star
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Customer Rating
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Consistently high ratings for quality workmanship and customer service
                  </Typography>
                </Paper>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center',
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Transform Your Property?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Get your free design consultation today. Our expert staff is here to help with your next project.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="tel:(925)655-7855"
              sx={{
                backgroundColor: 'white',
                color: 'secondary.main',
                '&:hover': { backgroundColor: 'grey.100' },
                px: 6,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              Call (925) 655-7855
            </Button>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default HomePage;
