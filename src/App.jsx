import './App.scss';
import CreateSection from './components/Section';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import ServicesPage from './views/Introduction';
import LandingPage from './views/Landing';
import ContactsPage from './views/Contacts';
import TeamsPage from './views/Teams';

export default function App() {
  return (
    <>
      <AppHeader title="JIM Solutions" />
      <main className="AppContent">
        <CreateSection id="landing" content={LandingPage} />
        <CreateSection id="services" content={ServicesPage} />
        <CreateSection id="team" content={TeamsPage} />
        <CreateSection id="contacts" content={ContactsPage} noDivider />
      </main>
      <AppFooter />
    </>
  );
}
