import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Phone',
      details: '(925) 655-7855',
      action: 'tel:(925)655-7855',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Email',
      details: 'info@homepavers.com',
      action: 'mailto:info@homepavers.com',
    },
    // {
    //   icon: <LocationIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    //   title: 'Service Area',
    //   details: 'Bay Area & Surrounding Counties',
    //   action: null,
    // },
    // {
    //   icon: <ScheduleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    //   title: 'Business Hours',
    //   details: 'Mon-Fri: 7AM-6PM\nSat: 8AM-4PM\nSun: By Appointment',
    //   action: null,
    // },
  ];

  const services = [
    'Driveway Installation',
    'Patio Design',
    'Retaining Walls',
    'Walkways',
    'Pool Decks',
    'Artificial Turf',
    'Repairs & Maintenance',
    'Other',
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - HomePavers | Free Consultation (925) 655-7855</title>
        <meta
          name="description"
          content="Contact HomePavers for your free paving consultation. Call (925) 655-7855 or fill out our form. We offer virtual consultations and serve the Bay Area."
        />
        <meta name="keywords" content="contact homepavers, free consultation, paving quote, bay area paving contractor" />
        <link rel="canonical" href="https://homepavers.com/contact" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Box
    sx={{
      backgroundImage: 'url(/src/assets/images/driveway-inprogress.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
              Contact Us
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', opacity: 0.9 }}>
              Ready to transform your property? Get your free consultation today. Our expert staff is here to help with your next project.
            </Typography>
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
              }}
            >
              Call Now: (925) 655-7855
            </Button>
          </Container>
        </Box>

        {/* Contact Information */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 6, 
            alignItems: 'stretch'
          }}>
            {/* Contact Form */}
            <Box sx={{ 
              flex: '1 1 600px',
              minWidth: '400px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Card sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                  Get Your Free Consultation
                </Typography>
                <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 3,
                    flex: 1
                  }}>
                    <Box sx={{ 
                      flex: '1 1 250px',
                      minWidth: '200px'
                    }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ 
                      flex: '1 1 250px',
                      minWidth: '200px'
                    }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ 
                      flex: '1 1 100%',
                      minWidth: '200px'
                    }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ 
                      flex: '1 1 100%',
                      minWidth: '200px'
                    }}>
                      <TextField
                        fullWidth
                        select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        SelectProps={{
                          native: true,
                        }}
                        variant="outlined"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </TextField>
                    </Box>
                    <Box sx={{ 
                      flex: '1 1 100%',
                      minWidth: '200px'
                    }}>
                      <TextField
                        fullWidth
                        label="Project Details"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        variant="outlined"
                      />
                    </Box>
                    <Box sx={{ 
                      flex: '1 1 100%',
                      minWidth: '200px'
                    }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{
                          px: 6,
                          py: 2,
                          fontSize: '1.1rem',
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Card>
            </Box>

            {/* Contact Information */}
            <Box sx={{ 
              flex: '1 1 300px',
              minWidth: '250px',
              display: 'flex',
              flexDirection: 'column'
            }}
            >
               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, gap: 2 }}>
                {contactInfo.map((info, index) => (
                  <Card key={index} sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ mb: 2 }}>{info.icon}</Box>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          whiteSpace: 'pre-line',
                          color: info.action ? 'primary.main' : 'text.primary',
                          cursor: info.action ? 'pointer' : 'default',
                          '&:hover': info.action ? { textDecoration: 'underline' } : {},
                        }}
                        onClick={info.action ? () => window.open(info.action) : undefined}
                      >
                        {info.details}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Virtual Consultations */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Paper
            sx={{
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)',
              color: 'white',
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              We Offer Virtual Consultations
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Can't meet in person? No problem! We offer virtual consultations to discuss your project, 
              provide estimates, and answer all your questions from the comfort of your home. Just submit the contact form above!
            </Typography>
          </Paper>
        </Container>

        {/* Success Message */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => setShowSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Thank you for your message! We'll get back to you within 24 hours.
          </Alert>
        </Snackbar>
      </Layout>
    </>
  );
};

export default ContactPage;
