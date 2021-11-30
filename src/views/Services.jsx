import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ServiceCard from '../components/ServiceCard';
import './Services.scss';

export default function IntroductionPage() {
  return (
    <>
      <Container maxWidth="md" my={2}>
        <Typography variant="h2" sx={{ textAlign: 'center' }} my={8}>
          Services Offered
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <ServiceCard
            image="https://images.idgesg.net/images/article/2019/05/team_manipulates_coding_elements_programming_interface_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056786_2400x1600-100795794-large.jpg?auto=webp&quality=85,70"
            title="Software Services"
          />
          <ServiceCard
            image="https://4.imimg.com/data4/OR/AJ/MY-32248659/all-kind-of-computer-hardware-services-500x500.jpg"
            title="Hardware Services"
          />
        </Box>
      </Container>
    </>
  );
}
