import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  Business as BusinessIcon,
  Star as StarIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Family-Owned Business',
      description: 'We are a family-owned business with deep roots in the community, treating every project as if it were our own home.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Quality Workmanship',
      description: 'Our team of professionals is trained to the fullest to provide you with the highest workmanship possible every time.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Licensed & Insured',
      description: 'We are fully licensed and insured, giving you peace of mind and protection for your investment.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: '18-Year Warranty',
      description: 'We stand behind our work with comprehensive warranties, including an 18-year warranty on artificial turf installations.',
    },
  ];

  const certifications = [
    'Licensed Paving Contractor',
    'Fully Insured & Bonded',
    '20+ Years Experience',
    'BBB Accredited Business',
    'Local Business Association Member',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - HomePavers | Family-Owned Paving Company</title>
        <meta
          name="description"
          content="Learn about HomePavers, a family-owned paving company with 18+ years of experience. Licensed, insured, and committed to quality workmanship."
        />
        <meta name="keywords" content="about homepavers, family owned paving company, licensed paving contractor, experienced paving team" />
        <link rel="canonical" href="https://homepavers.com/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Box
sx={{
  backgroundImage: 'url(/src/assets/images/front-yard-dogs.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center 35%',
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
              About HomePavers
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
              A family-owned business dedicated to providing the highest quality paving services with expert craftsmanship and fair prices.
            </Typography>
          </Container>
        </Box>

        {/* Company Story */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 6, 
            alignItems: 'center' 
          }}>
            <Box sx={{ 
              flex: '1 1 500px',
              minWidth: '300px'
            }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                HomePavers has been serving the community for over 18 years as a family-owned and operated business. 
                We specialize in interlocking pavers and provide comprehensive paving solutions for residential and commercial properties.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                Our commitment to quality, integrity, and customer satisfaction has made us a trusted name in the paving industry. 
                We believe that every project, no matter the size, deserves the same level of attention to detail and professional craftsmanship.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
                With our pavers, you will have beauty, durability, and more value added to your property. We provide the highest 
                quality work at fair prices, and our staff of professionals are trained to provide you with the highest workmanship possible every time.
              </Typography>
            </Box>
            <Box sx={{ 
              flex: '1 1 400px',
              minWidth: '300px'
            }}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
                  color: 'white',
                }}
              >
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                  18+
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Years of Experience
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Serving the community with professional paving services since our founding
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>

        {/* Our Values */}
        <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              Our Values
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center' 
            }}>
              {values.map((value, index) => (
                <Box key={index} sx={{ 
                  flex: '1 1 250px',
                  maxWidth: '300px',
                  minWidth: '220px'
                }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      p: 3,
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>{value.icon}</Box>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Certifications & Credentials */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 6, 
            alignItems: 'center' 
          }}>
            <Box sx={{ 
              flex: '1 1 400px',
              minWidth: '300px'
            }}>
              <Paper
                sx={{
                  p: 4,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  color: 'white',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Licensed & Insured
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Professional Credentials
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Fully licensed, bonded, and insured for your protection and peace of mind
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ 
              flex: '1 1 500px',
              minWidth: '300px'
            }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Certifications & Credentials
              </Typography>
              <List>
                {certifications.map((cert, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary={cert} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>

        {/* Team Section */}
        <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              Our Expert Team
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center',
              alignItems: 'stretch'
            }}>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px',
                display: 'flex'
              }}>
                <Card sx={{ textAlign: 'center', p: 3, width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: 'primary.main',
                      fontSize: '3rem',
                    }}
                  >
                    👷
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Skilled Craftsmen
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                    Our team consists of experienced professionals who are trained to the highest standards in paving installation and repair techniques.
                  </Typography>
                </Card>
              </Box>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px',
                display: 'flex'
              }}>
                <Card sx={{ textAlign: 'center', p: 3, width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: 'secondary.main',
                      fontSize: '3rem',
                    }}
                  >
                    🏗️
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Project Managers
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                    Dedicated project managers ensure every job is completed on time, within budget, and to the highest quality standards.
                  </Typography>
                </Card>
              </Box>
              <Box sx={{ 
                flex: '1 1 300px',
                maxWidth: '350px',
                minWidth: '280px',
                display: 'flex'
              }}>
                <Card sx={{ textAlign: 'center', p: 3, width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 2,
                      backgroundColor: 'success.main',
                      fontSize: '3rem',
                    }}
                  >
                    🎨
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Design Specialists
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                    Our design team creates beautiful, functional outdoor spaces that enhance your property's value and appeal.
                  </Typography>
                </Card>
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
              Ready to Work With Us?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Experience the difference that 18+ years of expertise and family values can make for your project.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                }}
              >
                Get Free Quote
              </Button>
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default AboutPage;
