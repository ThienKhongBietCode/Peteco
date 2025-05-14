import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Link,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const TeamCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Phạm Tuấn Phi',
      position: 'Project Lead ',
      image: 'https://i.imgur.com/eLy5EtV_d.jpeg?maxwidth=520&shape=thumb&fidelity=high',
      description: 'Tôi là Phạm Tuấn Phi, sinh viên năm 3 Công nghệ Phần mềm, đam mê học hỏi và áp dụng công nghệ vào thực tiễn. Tôi từng tham gia nhiều đồ án về web, ứng dụng di động và thương mại điện tử, qua đó rèn luyện kỹ năng làm việc nhóm và triển khai sản phẩm. Tham gia cuộc thi khởi nghiệp, tôi mong muốn thử thách bản thân và biến ý tưởng thành sản phẩm hữu ích cho cộng đồng',
      facebook: 'https://www.facebook.com/tupae.1509',
      linkedin: 'https://www.linkedin.com/in/phi-phạm-tuấn-0b8407247/',
      email: 'tuanphi1509@gmail.com',
    },
    {
      name: 'Thái Lê Nhật Thiên',
      position: 'Member',
      image: 'https://i.imgur.com/8LAqzcZ.jpeg',
      description: 'Xin chào, tôi là Nhật Thiên, sinh viên năm 3 ngành Công nghệ Phần mềm tại Đại học Văn Lang, đam mê sáng tạo và khởi nghiệp. Tôi tham gia cuộc thi khởi nghiệp để rèn luyện tư duy kinh doanh, kỹ năng công nghệ và làm việc nhóm. Mục tiêu của tôi là trở thành kỹ sư phần mềm và nhà sáng lập, ứng dụng công nghệ để giải quyết vấn đề thực tiễn và tạo giá trị cho cộng đồng',
      facebook: 'https://www.facebook.com/nhat.thien.542849/',
      linkedin: 'https://www.linkedin.com/in/nhatthien100?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BupPfwok3Tia343bXH5CuNw%3D%3D',
      email: 'thiennhatkg123@gmail.com',
    },
    {
      name: 'Lê Thảo Nhân',
      position: 'Member',
      image: 'https://i.imgur.com/GiDYdVb.jpeg',
      description: 'Tôi là Lê Thảo Nhân, sinh viên năm 3 ngành Quan hệ Công chúng - Truyền thông, đam mê kinh doanh và truyền thông. Tham gia cuộc thi khởi nghiệp, tôi muốn học hỏi, kết nối và phát triển kỹ năng chiến lược, marketing, truyền thông, góp phần mang lại giá trị thực tiễn cho cộng đồng',
      facebook: 'https://www.facebook.com/profile.php?id=100071180190222',
      
      email: 'emma.rodriguez@petcare.com',
    },
    {
      name: 'Đinh Xuân Nghi',
      position: 'Member',
      image: 'https://i.imgur.com/f5ayc6D.jpeg',
      description: 'Đinh Xuân Nghi, sinh viên năm 3 ngành Quan hệ Công chúng tại Đại học Văn Lang, đam mê khám phá và sáng tạo. Tham gia cuộc thi khởi nghiệp để rèn luyện tư duy kinh doanh, kỹ năng thương hiệu và mong muốn góp sức vào dự án kết hợp công nghệ với truyền thông bền vững',
      facebook: 'https://www.facebook.com/xuan.nghi.1107',
      
      email: 'xuannghidinh1234@gmail.com',
    },
    {
      name: 'Nguyễn Trần Minh Thơ',
      position: 'Member',
      image: 'https://i.imgur.com/7wVvriV.jpeg',
      description: 'Tôi là Nguyễn Trần Minh Thơ, sinh viên năm 3 ngành Quan hệ Công chúng tại Đại học Văn Lang. Có kinh nghiệm tổ chức sự kiện, xây dựng thương hiệu, lập kế hoạch và pitching, tôi tham gia cuộc thi để mở rộng tư duy, kết nối và ứng dụng truyền thông – công nghệ vào xây dựng thương hiệu',
      facebook: 'https://www.facebook.com/photo/?fbid=1679942575914388&set=a.114001165841878',
      
      email: 'tho.prvlu@gmail.com',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Meet Our Team
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph align="center">
      Đội ngũ chuyên gia tận tâm cam kết mang đến sự chăm sóc tốt nhất cho thú cưng của bạn
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamCard>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.position}
                </Typography>
                <Typography variant="body1" paragraph>
                  {member.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <IconButton
                    component={Link}
                    href={member.facebook}
                    target="_blank"
                    color="primary"
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href={member.linkedin}
                    target="_blank"
                    color="primary"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component={Link}
                    href={`mailto:${member.email}`}
                    color="primary"
                  >
                    <EmailIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </TeamCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
        Chúng tôi cam kết cung cấp dịch vụ chăm sóc xuất sắc cho thú cưng và hỗ trợ chủ nuôi với những lời khuyên chuyên môn.
        Đội ngũ chuyên gia tận tâm của chúng tôi làm việc chặt chẽ với nhau để đảm bảo sức khỏe và hạnh phúc của từng thú cưng khi đến với chúng tôi
        </Typography>
        <Typography variant="body1">
        Dù bạn đang tìm kiếm dịch vụ chăm sóc thú y, huấn luyện hành vi hay tư vấn dinh dưỡng, đội ngũ giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn và thú cưng của bạn phát triển khỏe mạnh
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs; 