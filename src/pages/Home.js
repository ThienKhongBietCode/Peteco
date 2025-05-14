import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SpaIcon from '@mui/icons-material/Spa';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StorefrontIcon from '@mui/icons-material/Storefront';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff9999 30%, #60db60 90%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const features = [
    {
      icon: <SpaIcon fontSize="large" color="primary" />,
      title: 'Pet Spa',
      description: 'Dịch vụ spa và chăm sóc chuyên nghiệp dành cho thú cưng yêu quý của bạn',
      path: '/services',
    },
    {
      icon: <HotelIcon fontSize="large" color="primary" />,
      title: 'Pet Hotel',
      description: 'Nơi ở an toàn và thoải mái cho thú cưng của bạn khi bạn vắng mặt',
      path: '/services',
    },
    {
      icon: <LocalHospitalIcon fontSize="large" color="primary" />,
      title: 'Medical Care',
      description: 'Dịch vụ thú y toàn diện và chăm sóc khẩn cấp',
      path: '/services',
    },
    {
      icon: <StorefrontIcon fontSize="large" color="primary" />,
      title: 'Gallery',
      description: 'Khám phá người bạn đồng hành lý tưởng cho phong cách sống của bạn',
      path: '/gallery', 
    },
  ];

  return (
    <>
      <HeroSection>
        <Container maxWidth="lg">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            component="h1"
            gutterBottom
            align="center"
          >
            Welcome to Peteco
          </Typography>
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            paragraph
            align="center"
          >
            Người bạn đồng hành đáng tin cậy của bạn trong dịch vụ chăm sóc thú cưng
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/services')}
            >
              Explore Project
            </Button>
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          gutterBottom
          align="center"
        >
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard onClick={() => handleCardClick(feature.path)}>
                <CardContent sx={{ textAlign: 'center' }}>
                  {feature.icon}
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home; 