import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Construction as ConstructionIcon,
  Home as HomeIcon,
  Pool as PoolIcon,
  DirectionsWalk as WalkIcon,
  Landscape as LandscapeIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import Layout from '../components/Layout';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <ConstructionIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Driveway Installation & Repair',
      description: 'Professional driveway services using high-quality materials and expert installation techniques.',
      features: [
        'Interlocking pavers',
        'Concrete driveways',
        'Asphalt repair and replacement',
        'Drainage solutions',
        'Curb appeal enhancement',
      ],
    },
    {
      icon: <HomeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Patio Design & Installation',
      description: 'Create beautiful outdoor living spaces that extend your home\'s functionality and value.',
      features: [
        'Custom patio designs',
        'Natural stone options',
        'Interlocking pavers',
        'Outdoor kitchen areas',
        'Fire pit installations',
      ],
    },
    {
      icon: <BuildIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Retaining Walls',
      description: 'Structural and decorative retaining walls to manage slopes and create usable space.',
      features: [
        'Segmental retaining walls',
        'Natural stone walls',
        'Concrete block systems',
        'Drainage integration',
        'Landscape integration',
      ],
    },
    {
      icon: <WalkIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Walkway Installation',
      description: 'Elegant pathways that guide visitors and enhance your property\'s flow and beauty.',
      features: [
        'Curved and straight designs',
        'Natural stone walkways',
        'Interlocking pavers',
        'Lighting integration',
        'Accessibility compliance',
      ],
    },
    {
      icon: <PoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Pool Deck Installation',
      description: 'Safe, beautiful, and slip-resistant pool deck solutions for your swimming area.',
      features: [
        'Non-slip surfaces',
        'Heat-resistant materials',
        'Custom designs',
        'Safety features',
        'Easy maintenance',
      ],
    },
    {
      icon: <LandscapeIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Artificial Turf Installation',
      description: 'Low-maintenance, beautiful artificial grass that looks great year-round.',
      features: [
        '18-year warranty',
        'Pet-friendly options',
        'Drainage systems',
        'Realistic appearance',
        'Water conservation',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Paving Services - Driveways, Patios, Retaining Walls | HomePavers</title>
        <meta
          name="description"
          content="Professional paving services including driveways, patios, retaining walls, walkways, pool decks, and artificial turf. Expert installation with 18-year warranty."
        />
        <meta name="keywords" content="paving services, driveway installation, patio design, retaining walls, walkways, pool decks, artificial turf" />
        <link rel="canonical" href="https://homepavers.com/services" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Box
        sx={{
          backgroundImage: 'url(/src/assets/images/retaining-wall-w-black-2.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center ',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 24 },
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
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Our Paving Services
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
              From driveways to patios, we provide comprehensive paving solutions with expert craftsmanship and quality materials.
            </Typography>
          </Container>
        </Box>

        {/* Services Grid */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 6, 
            justifyContent: 'center' 
          }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ 
                flex: '1 1 500px',
                maxWidth: '600px',
                minWidth: '400px'
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
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, textAlign: 'center', color: 'text.secondary' }}>
                      {service.description}
                    </Typography>
                    <List>
                      {service.features.map((feature, featureIndex) => (
                        <ListItem key={featureIndex} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>

        {/* Process Section */}
        <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              Our Process
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center' 
            }}>
              <Box sx={{ 
                flex: '1 1 250px',
                maxWidth: '300px',
                minWidth: '220px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    1
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Free Consultation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We visit your property to assess your needs and provide a detailed quote
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ 
                flex: '1 1 250px',
                maxWidth: '300px',
                minWidth: '220px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    2
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Design & Planning
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Custom design solutions tailored to your property and budget
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ 
                flex: '1 1 250px',
                maxWidth: '300px',
                minWidth: '220px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    3
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Professional Installation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expert installation using quality materials and proven techniques
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ 
                flex: '1 1 250px',
                maxWidth: '300px',
                minWidth: '220px'
              }}>
                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                  <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                    4
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Quality Assurance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Final inspection and warranty coverage for your peace of mind
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
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Contact us today for your free consultation and estimate.
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

export default ServicesPage;
