import './Teams.scss';
import TeamCard from '../components/TeamCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function TeamsPage() {
  return (
    <>
      <Container className="TeamCardContainer" maxWidth="lg">
        <Typography variant="h2" mb={8}>
          Team
        </Typography>
        <TeamCard
          icon="https://avatars.githubusercontent.com/u/49726759"
          name="Isiah Kayl Nabablit"
          title="Backend Developer"
          username="Choooks22"
        />
        <TeamCard
          icon="https://avatars.githubusercontent.com/u/93632907"
          name="Jojo de los Santos"
          title="Fullstack Developer"
          username="jojodelossantos1563"
        />
        <TeamCard
          icon="https://avatars.githubusercontent.com/u/42108343"
          name="Michael Fernandez"
          title="Fullstack Developer"
          username="fmik3r"
        />
      </Container>
    </>
  );
}
