import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SecurityIcon from '@mui/icons-material/Security';

// Styled components with memoization for better performance
const FeatureCard = memo(styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
})));

// Constants moved outside component to prevent recreation on each render
const PROJECT_FEATURES = [
  {
    id: 1,
    title: 'Dịch vụ chăm sóc thú cưng',
    description: 'Là một ứng dụng kết nối giữa khách hàng và các doanh nghiệp trong lĩnh vực chăm sóc thú cưng. Chúng tôi mang đến giải pháp tiện lợi, hiện đại giúp người nuôi thú dễ dàng đặt lịch dịch vụ thú y, làm đẹp, huấn luyện, mua sắm sản phẩm',
    image: 'https://i.imgur.com/C8eDQ3P.png',
    icon: PetsIcon,
    tags: ['Veterinary', 'Grooming', 'Training'],
  },
  {
    id: 2,
    title: 'Tập trung vào cộng đồng',
    description: 'Không chỉ cung cấp dịch vụ – mà còn xây dựng một cộng đồng người nuôi thú cưng gắn kết, tích cực và đầy yêu thương. Thông qua các bài viết, đánh giá và hoạt động thiện nguyện, người nuôi thú có cơ hội kết nối, học hỏi và lan tỏa giá trị chăm sóc thú cưng có trách nhiệm',
    image: 'https://i.imgur.com/UOoXQgS_d.png?maxwidth=520&shape=thumb&fidelity=high',
    icon: GroupIcon,
    tags: ['Events', 'Workshops', 'Social'],
  },
  {
    id: 3,
    title: 'Hướng dẫn chuyên gia',
    description: 'Bên cạnh việc được kết nối với chuyên gia thú y, chúng tôi còn cung cấp một kho kiến thức chăm sóc thú cưng, được biên soạn uy tín, giúp người nuôi thú cập nhật thông tin, học hỏi kỹ năng chăm sóc thú cưng của mình',
    image: 'https://i.imgur.com/Cym0QBT.png',
    icon: EmojiEventsIcon,
    tags: ['Nutrition', 'Behavior', 'Healthcare'],
  },
  {
    id: 4,
    title: 'Môi trường an toàn',
    description: 'Chúng tôi cam kết xây dựng một môi trường sử dụng an toàn và đáng tin cậy cho người dùng. Là một ứng dụng di động, hệ thống được thiết kế với tiêu chuẩn bảo mật cao, đảm bảo mọi thông tin cá nhân, lịch sử đặt dịch vụ và dữ liệu thú cưng của bạn luôn được mã hóa và bảo vệ tuyệt đối',
    image: 'https://i.imgur.com/W3JITKL.png',
    icon: SecurityIcon,
    tags: ['Facilities', 'Safety', 'Comfort'],
  },
];

const TARGET_AUDIENCE = [
  'Chủ nuôi thú cưng',
  'Người yêu động vật',
  'Chuyên gia chăm sóc thú cưng',
  'Thành viên cộng đồng',
];

// Memoized components for better performance
const FeatureCardComponent = memo(({ feature, isMobile }) => {
  const Icon = feature.icon;
  
  return (
    <FeatureCard>
      <CardMedia
        component="img"
        height={isMobile ? '200' : '250'}
        image={feature.image}
        alt={feature.title}
        loading="lazy"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon fontSize="large" />
          <Typography
            gutterBottom
            variant={isMobile ? 'h6' : 'h5'}
            component="h2"
            sx={{ ml: 1 }}
          >
            {feature.title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
        >
          {feature.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {feature.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </FeatureCard>
  );
});

const TargetAudienceItem = memo(({ audience }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Typography variant="body1" align="center">
      • {audience}
    </Typography>
  </Grid>
));

// Main component with optimized navigation
const ProjectIntroduction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  // Memoized navigation handler to prevent unnecessary re-renders
  const handleJoinCommunity = useCallback(() => {
    navigate('/community', { 
      state: { 
        from: 'services',
        timestamp: Date.now() // Add timestamp for tracking navigation timing
      } 
    });
  }, [navigate]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant={isMobile ? 'h4' : 'h3'}
        component="h1"
        gutterBottom
        align="center"
      >
        Dự Án Pet Care
      </Typography>
      <Typography
        variant={isMobile ? 'body1' : 'h6'}
        color="text.secondary"
        paragraph
        align="center"
        sx={{ mb: 4 }}
      >
        Yêu thương trọn vẹn chăm sóc thông minh
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Tổng Quan Dự Án
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} color="text.secondary" paragraph align="center">
          Peteco (PetCare Ecosystem) - Ứng dụng kết nối khách hàng với doanh nghiệp cung cấp các dịch vụ chăm sóc cho thú cưng. Đa dạng các dịch vụ như Spa, Khách Sạn, Khám chữa bệnh cho thú cưng, cung cấp thị trường đa dạng các loại sản phẩm dành cho thú cưng, cũng như tích hợp tư vấn thú y. Bên cạnh đó, ứng dụng còn hỗ trợ kêu gọi quyên góp cho các trại hoạt động cứu hộ và chăm nuôi động vật, giúp lan tỏa những giá trị nhân văn đến cộng đồng quan tâm và yêu thương động vật
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
        Đối tượng mục tiêu
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          {TARGET_AUDIENCE.map((audience) => (
            <TargetAudienceItem key={audience} audience={audience} />
          ))}
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 4 }}>
      Các tính năng chính
      </Typography>

      <Grid container spacing={3}>
        {PROJECT_FEATURES.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.id}>
            <FeatureCardComponent feature={feature} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 4 }}
          onClick={handleJoinCommunity}
        >
          Tham gia cộng đồng
        </Button>
      </Box>
    </Container>
  );
};

// Display names for better debugging
FeatureCardComponent.displayName = 'FeatureCardComponent';
TargetAudienceItem.displayName = 'TargetAudienceItem';

export default memo(ProjectIntroduction); 