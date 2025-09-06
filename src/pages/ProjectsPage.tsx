import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Paper,
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

const ProjectsPage: React.FC = () => {
  const projectCategories = [
    {
      icon: <ConstructionIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Driveways',
      count: '50+',
      description: 'Professional driveway installations and repairs',
    },
    {
      icon: <HomeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Patios',
      count: '75+',
      description: 'Beautiful outdoor living spaces',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Retaining Walls',
      count: '30+',
      description: 'Structural and decorative walls',
    },
    {
      icon: <WalkIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Walkways',
      count: '60+',
      description: 'Elegant pathways and walkways',
    },
    {
      icon: <PoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Pool Decks',
      count: '25+',
      description: 'Safe and beautiful pool areas',
    },
    {
      icon: <LandscapeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Artificial Turf',
      count: '40+',
      description: 'Low-maintenance grass solutions',
    },
  ];

  const featuredProjects = [
    {
      title: 'Modern Driveway with Interlocking Pavers',
      category: 'Driveway',
      location: 'Walnut Creek, CA',
      description: 'Complete driveway transformation using premium interlocking pavers with custom edging and drainage solutions.',
      image: '/api/placeholder/400/300',
      features: ['Interlocking Pavers', 'Custom Edging', 'Drainage System'],
    },
    {
      title: 'Luxury Patio with Outdoor Kitchen',
      category: 'Patio',
      location: 'Pleasanton, CA',
      description: 'Spacious outdoor living area featuring natural stone patio with integrated outdoor kitchen and fire pit.',
      image: '/api/placeholder/400/300',
      features: ['Natural Stone', 'Outdoor Kitchen', 'Fire Pit'],
    },
    {
      title: 'Multi-Level Retaining Wall System',
      category: 'Retaining Wall',
      location: 'Fremont, CA',
      description: 'Complex multi-level retaining wall system to manage steep slope and create usable garden space.',
      image: '/api/placeholder/400/300',
      features: ['Multi-Level Design', 'Drainage Integration', 'Garden Integration'],
    },
    {
      title: 'Curved Walkway with Lighting',
      category: 'Walkway',
      location: 'San Ramon, CA',
      description: 'Elegant curved walkway connecting front yard to backyard with integrated LED lighting system.',
      image: '/api/placeholder/400/300',
      features: ['Curved Design', 'LED Lighting', 'Natural Stone'],
    },
    {
      title: 'Pool Deck with Safety Features',
      category: 'Pool Deck',
      location: 'Danville, CA',
      description: 'Non-slip pool deck installation with safety features and beautiful stone finish.',
      image: '/api/placeholder/400/300',
      features: ['Non-Slip Surface', 'Safety Features', 'Stone Finish'],
    },
    {
      title: 'Pet-Friendly Artificial Turf',
      category: 'Artificial Turf',
      location: 'Livermore, CA',
      description: 'High-quality artificial turf installation with pet-friendly features and drainage system.',
      image: '/api/placeholder/400/300',
      features: ['Pet-Friendly', 'Drainage System', '18-Year Warranty'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - HomePavers | Before & After Gallery</title>
        <meta
          name="description"
          content="View our portfolio of completed paving projects including driveways, patios, retaining walls, walkways, pool decks, and artificial turf installations."
        />
        <meta name="keywords" content="paving projects, before and after, driveway projects, patio projects, retaining wall projects" />
        <link rel="canonical" href="https://homepavers.com/projects" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Box
         sx={{
          backgroundImage: 'url(/src/assets/images/turf-and-pavers.jpg)',
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
              Our Projects
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
              Explore our portfolio of completed projects. From driveways to patios, see the quality and craftsmanship that sets us apart.
            </Typography>
          </Container>
        </Box>

        {/* Project Categories */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Project Categories
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center' 
          }}>
            {projectCategories.map((category, index) => (
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
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>{category.icon}</Box>
                    <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 1 }}>
                      {category.count}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {category.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>

        {/* Featured Projects */}
        <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ mb: 6, fontWeight: 'bold' }}
            >
              Featured Projects
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center' 
            }}>
              {featuredProjects.map((project, index) => (
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
                    <CardMedia
                      component="div"
                      sx={{
                        height: 200,
                        backgroundColor: 'grey.300',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'grey.600',
                      }}
                    >
                      <Typography variant="h6">Project Image</Typography>
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip label={project.category} size="small" color="primary" />
                        <Chip label={project.location} size="small" variant="outlined" />
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.features.map((feature, featureIndex) => (
                          <Chip
                            key={featureIndex}
                            label={feature}
                            size="small"
                            variant="outlined"
                            color="secondary"
                          />
                        ))}
                      </Box>
                    </CardContent>
                                  </Card>
              </Box>
            ))}
          </Box>
          </Container>
        </Box>

        {/* Before & After Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 'bold' }}
          >
            Before & After Transformations
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center' 
          }}>
            <Box sx={{ 
              flex: '1 1 500px',
              maxWidth: '600px',
              minWidth: '400px'
            }}>
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                  Driveway Makeover
                </Typography>
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'grey.600',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Before Image</Typography>
                </Box>
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'grey.600',
                  }}
                >
                  <Typography variant="h6">After Image</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Complete transformation from cracked concrete to beautiful interlocking pavers
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ 
              flex: '1 1 500px',
              maxWidth: '600px',
              minWidth: '400px'
            }}>
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                  Patio Installation
                </Typography>
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'grey.600',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Before Image</Typography>
                </Box>
                <Box
                  sx={{
                    height: 200,
                    backgroundColor: 'grey.300',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'grey.600',
                  }}
                >
                  <Typography variant="h6">After Image</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  From bare backyard to stunning outdoor living space with natural stone
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Container>

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
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Let us transform your property with the same quality and craftsmanship you see in our portfolio.
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

export default ProjectsPage;
