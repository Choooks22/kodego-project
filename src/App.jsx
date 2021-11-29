import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import IntroductionPage from './views/IntroductionPage';
import LandingPage from './views/LandingPage';
import ContactsPage from './views/ContactsPage';
import TeamsPage from './views/TeamsPage';

function AppContent() {
  return (
    <main className="AppContent">
      <section id="landing">
        <LandingPage />
      </section>
      <section id="introduction">
        <IntroductionPage />
      </section>
      <section id="team">
        <TeamsPage />
      </section>
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
