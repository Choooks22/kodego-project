import './App.scss';
import Divider from '@mui/material/Divider';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import IntroductionPage from './views/Introduction';
import LandingPage from './views/Landing';
import ContactsPage from './views/Contacts';
import TeamsPage from './views/Teams';

function AppContent() {
  return (
    <main className="AppContent">
      <section id="landing">
        <LandingPage />
      </section>
      <Divider />
      <section id="introduction">
        <IntroductionPage />
      </section>
      <Divider />
      <section id="team">
        <TeamsPage />
      </section>
      <Divider />
      <section id="contacts">
        <ContactsPage />
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <AppHeader title="JIM Solutions" />
      <AppContent />
      <AppFooter />
    </>
  );
}
