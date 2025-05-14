import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Chip,
  Paper,
  alpha,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PetsIcon from '@mui/icons-material/Pets';
import PeopleIcon from '@mui/icons-material/People';

// Styled components with memoization for better performance
const CommunityCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const DecorativeLine = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '4px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '2px',
  margin: '0 auto 16px',
}));

const AudienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    '&::before': {
      transform: 'scaleX(1)',
    },
    '& .MuiSvgIcon-root': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.primary.main,
    },
    '& .audience-title': {
      color: theme.palette.primary.main,
    }
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    fontSize: '40px',
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
  },
}));

// Constants moved outside component to prevent recreation
const FACEBOOK_GROUPS = {
  PET_CARE: 'https://www.facebook.com/groups/959541987720820/',
  PET_HEALTH: 'https://www.facebook.com/groups/hotrotuvanchamsocbenhtieuchaychomeohanoi/',
  PET_RESCUE: 'https://www.facebook.com/savesgt'
};

// Welcome message content based on navigation source
const WELCOME_MESSAGES = {
  services: {
    title: "Chào mừng bạn đến với cộng đồng chăm sóc thú cưng của chúng tôi! 🐾",
    description: "Cảm ơn bạn đã tham gia cộng đồng của chúng tôi! Tại đây, bạn có thể kết nối với những chủ nuôi thú cưng khác, chia sẻ kinh nghiệm và nhận được những lời khuyên chuyên môn về chăm sóc thú cưng. Hãy bắt đầu bằng cách khám phá các nhóm hoặc tham gia vào một cuộc thảo luận!"
  },
  default: {
    title: "Chào mừng bạn đến với cộng đồng của chúng tôi! 👋",
    description: "Chúng tôi rất vui khi có bạn đến với cộng đồng của chúng tôi! Hãy tham gia các nhóm, tham gia vào cuộc thảo luận và kết nối với những người yêu thú cưng khác."
  }
};

const GROUPS = [
  {
    title: 'Hội Chia Sẻ Kinh Nghiệm Chăm Sóc Chó Mèo',
    members: 320700,
    description: 'Một cộng đồng dành cho các chủ nuôi thú cưng để chia sẻ kinh nghiệm và lời khuyên.',
    topics: ['Huấn luyện', 'Sức khỏe', 'Hành vi', 'Chăm sóc'],
    url: FACEBOOK_GROUPS.PET_CARE
  },
  {
    title: 'Hỗ Trợ Tư Vấn Chăm Sóc Tất Cả Các Bệnh Chó Mèo',
    members: 83700,
    description: 'Mạng lưới chia sẻ và đưa ra các lời khuyên về sức khỏe thú cưng',
    topics: ['Nuôi dưỡng', 'Chăm sóc'],
    url: FACEBOOK_GROUPS.PET_HEALTH
  },
  {
    title: 'Mạng Lưới Cứu Trợ Thú Cưng',
    members: 175000,
    description: 'Kết nối với các tổ chức cứu trợ và bạn bè đồng hành.',
    topics: ['Cứu trợ', 'Tình nguyện', 'Nuôi dưỡng', 'Nhận nuôi'],
    url: FACEBOOK_GROUPS.PET_RESCUE
  }
];

const AUDIENCE_ITEMS = [
  {
    title: 'Chủ nuôi thú cưng',
    icon: PetsIcon,
    description: 'Những người đang chăm sóc thú cưng và tìm kiếm dịch vụ chất lượng'
  },
  {
    title: 'Người yêu động vật',
    icon: FavoriteIcon,
    description: 'Những người quan tâm và muốn đóng góp cho cộng đồng thú cưng'
  },
  {
    title: 'Chuyên gia chăm sóc thú cưng',
    icon: GroupIcon,
    description: 'Các bác sĩ thú y, huấn luyện viên và chuyên gia trong lĩnh vực'
  },
  {
    title: 'Thành viên cộng đồng',
    icon: PeopleIcon,
    description: 'Những người muốn kết nối và chia sẻ kinh nghiệm với cộng đồng'
  }
];

const Community = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();
  

  // Memoized welcome message based on navigation source
  const welcomeMessage = useMemo(() => {
    return location.state?.from === 'services' 
      ? WELCOME_MESSAGES.services 
      : WELCOME_MESSAGES.default;
  }, [location.state?.from]);

  // Memoized close handler to prevent unnecessary re-renders
  const handleCloseWelcome = useCallback(() => {
    setShowWelcome(false);
  }, []);

  // Memoized join group handler
  const handleJoinGroup = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  useEffect(() => {
    const fromServices = location.state?.from === 'services';
    const hasVisitedBefore = localStorage.getItem('hasVisitedCommunity');
    
    if (fromServices || !hasVisitedBefore) {
      if (!hasVisitedBefore) {
        localStorage.setItem('hasVisitedCommunity', 'true');
      }
      setShowWelcome(true);
    } else {
      setShowWelcome(false);
    }
  }, [location]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {showWelcome && (
        <Box
          sx={{
            mb: 4,
            p: 3,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            position: 'relative',
          }}
        >
          <Typography variant="h5" gutterBottom>
            {welcomeMessage.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {welcomeMessage.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCloseWelcome}
            sx={{ mt: 2 }}
          >
            Bắt đầu
          </Button>
        </Box>
      )}

      <Typography variant="h3" component="h1" gutterBottom align="center">
        Cộng đồng
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph align="center">
        Hãy gia nhập cộng đồng sôi động của những người yêu thú cưng và các chuyên gia
      </Typography>

      {/* Target Audience Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 2 }}>
          Đối Tượng Tham Gia
        </Typography>
        <DecorativeLine />
        <Grid container spacing={4}>
          {AUDIENCE_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AudienceCard elevation={2}>
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    className="audience-title"
                    sx={{ 
                      fontWeight: 600,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {item.description}
                  </Typography>
                </AudienceCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Groups Section */}
      <Typography variant="h4" gutterBottom>
        Các nhóm
      </Typography>
      <Grid container spacing={3}>
        {GROUPS.map((group, index) => (
          <Grid item xs={12} key={index}>
            <CommunityCard>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <GroupIcon sx={{ mr: 1 }} color="primary" />
                  <Typography variant="h5" component="h2">
                    {group.title}
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  {group.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {group.topics.map((topic, idx) => (
                    <Chip
                      key={idx}
                      label={topic}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {group.members.toLocaleString()} thành viên
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={() => handleJoinGroup(group.url)}
                >
                  Tham gia nhóm
                </Button>
              </CardContent>
            </CommunityCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Community; 